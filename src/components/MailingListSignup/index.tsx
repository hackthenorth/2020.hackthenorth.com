import HackerAPI from "@hackthenorth/hackerapi-js";
import { Text, Button } from "@hackthenorth/north";
import React, { useState, useMemo, useCallback, FormEvent } from "react";
import styled from "styled-components";

import Icon from "src/components/Icon";
import Spinner from "src/components/Spinner";
import { ArrowWhiteIcon, CheckmarkWhiteIcon } from "src/static";
import { hoverStyles } from "src/theme/sharedStyles";
import { useDeviceSize } from "src/utils";

interface MailingListSignupProps
  extends React.ComponentPropsWithoutRef<"form"> {
  placeholder: string;
  mobilePlaceholder?: string;
}

interface CheckErrorsProps {
  hasErrors: boolean;
}

enum SignUpState {
  DUPLICATE = "duplicate",
  EMPTY = "empty",
  ERROR = "error",
  INITIAL = "initial",
  INVALID = "invalid",
  SUBMITTING = "submitting",
  SUBMITTED = "submitted",
}

const StyledInput = styled.input<CheckErrorsProps>`
  font-size: ${({ theme }) => theme.globalConstants.fontSize.bodyS}px;
  width: 85%;
  height: 100%;
  border-radius: 100px;
  border: 1px solid
    ${({ theme, hasErrors }) =>
      hasErrors
        ? theme.globalConstants.color.roseSecondary
        : theme.globalConstants.color.bluePrimaryM};
  background: ${({ theme }) => theme.globalConstants.color.white};
  padding: 12px 24px;
  text-align: left;

  margin-right: 12px;
  color: ${({ theme }) => theme.globalConstants.color.textDark};

  ::placeholder {
    color: ${({ theme }) => theme.globalConstants.color.bluePrimaryM};
  }

  &:focus {
    outline: none;
  }

  ${hoverStyles}

  ${({ theme }) => theme.mediaQueries.largeMobile`
    width: 85%;
    padding: 10px 20px;
  `}
`;

const FormWrapper = styled.form`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 52px;
  margin-bottom: 22px !important; /* this is to account for the error text */
  ${({ theme }) => theme.mediaQueries.largeMobile`
    height: 36px;
  `}
`;

const ResultText = styled(Text)<CheckErrorsProps>`
  font-family: ${({ theme }) => theme.globalConstants.fontFamily.body};
  color: ${({ theme, hasErrors }) =>
    hasErrors
      ? theme.globalConstants.color.roseSecondary
      : theme.globalConstants.color.bluePrimaryM};

  position: absolute;
  transform: translateY(53px);
  margin-top: 7px;
  left: 28px;

  ${({ theme }) => theme.mediaQueries.largeMobile`
    left: 20px;
    transform: translateY(38px);
  `}
`;

const StyledButton = styled(Button)<{ isSubmitted: boolean }>`
  display: flex;
  justify-content: center;
  background: ${({ theme, isSubmitted }) =>
    isSubmitted
      ? theme.globalConstants.color.tealSecondary
      : theme.globalConstants.color.bluePrimaryD};
  height: 52px;
  width: 52px;

  ${({ theme }) => theme.mediaQueries.largeMobile`
    align-items: center;
    padding: 0 !important;
    width: 36px;
    height: 36px;
  `}

  ${hoverStyles}
  &:focus {
    opacity: 0.8;
  }

  /* Align the spinner in the center */
  > div {
    margin: auto;
  }

  /* sharedStyles minus background */
  font-family: ${({ theme }) => theme.globalConstants.fontFamily.body};
  font-size: ${({ theme }) => theme.globalConstants.fontSize.bodyM};
  font-weight: 500;
  color: ${({ theme }) => theme.globalConstants.color.textLight};
`;

const CheckMarkIcon = styled(Icon)`
  ${({ theme }) => theme.mediaQueries.largeMobile`
    margin: auto;
    margin-top: 5px;
    width: 20px;
    height: 20px;
  `}
`;

const CenteredIcon = styled(Icon)`
  margin: auto;
  height: 20px;
  ${({ theme }) => theme.mediaQueries.largeMobile`
    width: 20px;
    height: 15px;
  `}
`;

const EVENT_SLUG = "hackthenorth2020";

const validateEmailAddress = (email: string) => {
  const emailPrefix = "[A-Z0-9a-z]([A-Z0-9a-z._%+-]{0,30}[A-Z0-9a-z])?";
  const emailServer = "([A-Z0-9a-z]([A-Z0-9a-z-]{0,30}[A-Z0-9a-z])?\\.){1,5}";
  const emailRegEx = `${emailPrefix}@${emailServer}[A-Za-z]{2,6}`;
  return email.match(emailRegEx);
};

const getButtonIcon = (
  signUpState: SignUpState,
  isLargeMobileOrSmaller: boolean
) => {
  switch (signUpState) {
    case SignUpState.SUBMITTED:
      return (
        <CheckMarkIcon src={CheckmarkWhiteIcon} alt="White Checkmark Icon" />
      );
    case SignUpState.SUBMITTING:
      return <Spinner color="white" size={isLargeMobileOrSmaller ? 18 : 24} />;
    default:
      return <CenteredIcon src={ArrowWhiteIcon} alt="White Arrow Icon" />;
  }
};

const getSignUpButton = (
  signUpState: SignUpState,
  onSubmit: () => void,
  isLargeMobileOrSmaller: boolean
) => (
  <StyledButton
    mods="round"
    removeSharedStyles
    isSubmitted={signUpState === SignUpState.SUBMITTED}
    disabled={signUpState === SignUpState.SUBMITTING}
    onClick={
      signUpState !== SignUpState.SUBMITTED &&
      signUpState !== SignUpState.SUBMITTING
        ? onSubmit
        : undefined
    }
    aria-label="Submit email"
  >
    {getButtonIcon(signUpState, isLargeMobileOrSmaller)}
  </StyledButton>
);

const getResultMsg = (signUpState: SignUpState) => {
  switch (signUpState) {
    case SignUpState.EMPTY:
      return "Please enter an email";
    case SignUpState.INVALID:
      return "You must enter a valid email address";
    case SignUpState.DUPLICATE:
      return "This email is already on our mailing list!";
    case SignUpState.SUBMITTED:
      return "Thanks for signing up! We'll be in touch :)";
    default:
      return "An error has occurred. Please check back later!";
  }
};

const MailingListSignup: React.FC<MailingListSignupProps> = ({
  mobilePlaceholder,
  placeholder,
  ...rest
}) => {
  const [email, setEmail] = useState("");
  const [signUpState, updateSignUpState] = useState(SignUpState.INITIAL);
  const isLargeMobileOrSmaller = useDeviceSize("largeMobile");

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (email === "") {
        updateSignUpState(SignUpState.EMPTY);
        return;
      }

      if (validateEmailAddress(email)) {
        updateSignUpState(SignUpState.SUBMITTING);
        HackerAPI.Event.MailingListSignup.create(
          { slug: EVENT_SLUG },
          new HackerAPI.Event.MailingListSignup({ email })
        )
          .then((data: { email: string; alreadySignedUp: boolean }) => {
            if (data && "email" in data) {
              if (data.alreadySignedUp) {
                updateSignUpState(SignUpState.DUPLICATE);
              } else {
                updateSignUpState(SignUpState.SUBMITTED);
              }
            } else {
              updateSignUpState(SignUpState.ERROR);
            }
          })
          .catch(() => {
            // request error
            updateSignUpState(SignUpState.ERROR);
          });
      } else {
        updateSignUpState(SignUpState.INVALID);
      }
    },
    [email]
  );

  const hasErrors =
    signUpState === SignUpState.EMPTY ||
    signUpState === SignUpState.INVALID ||
    signUpState === SignUpState.DUPLICATE ||
    signUpState === SignUpState.ERROR;

  // use a different placeholder for largeMobile
  const refinedPlaceholder =
    mobilePlaceholder && isLargeMobileOrSmaller
      ? mobilePlaceholder
      : placeholder;

  const SignUpButton = useMemo(
    () =>
      getSignUpButton(
        signUpState,
        onSubmit as () => void,
        isLargeMobileOrSmaller
      ),
    [onSubmit, signUpState, isLargeMobileOrSmaller]
  );

  const ResultMsg = useMemo(() => getResultMsg(signUpState), [signUpState]);

  return (
    <FormWrapper onSubmit={onSubmit} {...rest}>
      <StyledInput
        value={email}
        hasErrors={hasErrors}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={refinedPlaceholder}
        aria-label="Signup for Hack The North's mailing list"
        aria-required
      />
      {(hasErrors || signUpState === SignUpState.SUBMITTED) && (
        <ResultText hasErrors={hasErrors} mods="small" removeSharedStyles>
          {ResultMsg}
        </ResultText>
      )}
      {SignUpButton}
    </FormWrapper>
  );
};

export default MailingListSignup;
