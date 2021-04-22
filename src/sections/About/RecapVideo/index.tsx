import { UnstyledModal, Button, Spacer } from "@hackthenorth/north";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import styled, { css } from "styled-components";

import { PlayButtonIcon, CloseButtonIcon, ArtboardImg } from "src/static";
import { deviceBreakpoints } from "src/theme/deviceBreakpoints";
import { hoverStyles } from "src/theme/sharedStyles";
import { useWindowSize } from "src/utils";

const RECAP_VIDEO_ID = "sY8NawpJViw";

const AUTOPLAY_URL = `https://www.youtube.com/embed/${RECAP_VIDEO_ID}?autoplay=1&color=white&loop=1&enablejsapi=1&controls=0&modestbranding=1&showinfo=0&mute=1&playlist=${RECAP_VIDEO_ID}`;

const MODAL_URL = `https://www.youtube.com/embed/${RECAP_VIDEO_ID}?loop=1&color=white&modestbranding=1&showinfo=0`;

const ModalVideoContainer = styled.div`
  text-align: right;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const autoplaySize = css`
  border-radius: 14px;
  max-width: 100%;
  width: 502px;
  max-height: 100%;
  height: 282px;

  ${({ theme }) => theme.mediaQueries.largeMobile`
    width: 336px;
    height: 188px;
  `}
`;

const Modal = styled(UnstyledModal)`
  background-color: transparent;
  outline: none;
  z-index: 99;
  text-align: center;
`;

const AutoplayVideoContainer = styled.div`
  ${autoplaySize}
  overflow: hidden;
`;

const VideoOverlay = styled.div`
  ${autoplaySize}
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
      145.59deg,
      rgba(90, 188, 170, 0.5) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    rgba(29, 193, 204, 0.5);
  mix-blend-mode: multiply;
  opacity: 0.75;
  border-radius: 14px;
`;

const PlayButtonContainer = styled.div`
  ${autoplaySize}
  position: absolute;
  top: 0;
  left: 0;
  opacity: 1;
  text-align: center;
  cursor: pointer;
  z-index: 2;

  > :first-child {
    visibility: hidden;
    opacity: 0;
    transition: opacity 250ms;
  }

  &:hover {
    > :first-child {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const PlayButton = styled.img.attrs({
  src: PlayButtonIcon,
  alt: "Play Button",
})`
  margin: 0 auto;
  height: 84px;
  width: auto;
  position: relative;
  top: 50%;
  margin-top: -42px;
  opacity: 1;
`;

const RecapVideoContainer = styled.div`
  position: relative;
  text-align: center;
`;

const ArtboardImage = styled.img.attrs({ src: ArtboardImg, alt: "" })`
  z-index: -1;
  position: absolute;
  top: 30%;
  left: 50%;

  width: 475px;
  ${({ theme }) => theme.mediaQueries.large`
    width: 426px;
  `}

  ${({ theme }) => theme.mediaQueries.tablet`
  `}

  ${({ theme }) => theme.mediaQueries.largeMobile`
    width: 348px;
  `}

`;

const CloseButton = styled.img.attrs({
  src: CloseButtonIcon,
  alt: "Close button",
})`
  ${hoverStyles}
`;

const RecapVideo: React.FC = () => {
  const autoplayIframe = useRef<HTMLIFrameElement | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { windowWidth, windowHeight } = useWindowSize();

  // get video modal width based on window width, but if it's too high, resize
  let modalVideoWidth = windowWidth * 0.8;
  let modalVideoHeight = modalVideoWidth * (9 / 16);
  if (modalVideoHeight > windowHeight * 0.8) {
    modalVideoHeight = windowHeight * 0.8;
    modalVideoWidth = modalVideoHeight * (16 / 9);
  }

  const autoplayVideoWidth =
    windowWidth > deviceBreakpoints.largeMobile ? 505 : 340;
  const autoplayVideoHeight = autoplayVideoWidth * (9 / 16);

  const [ref, isInView] = useInView();

  const updateAutoplayState = useCallback(() => {
    const { current } = autoplayIframe;

    if (current) {
      if (isInView && !isModalOpen) {
        // also runs if playing == undefined
        if (current.dataset.playing !== "true") {
          current.dataset.playing = "true";
          // https://stackoverflow.com/questions/15164942/stop-embedded-youtube-iframe
          current.contentWindow?.postMessage(
            '{"event":"command","func":"playVideo","args":""}',
            "*"
          );
        }
      } else {
        if (current.dataset.playing !== "false") {
          current.dataset.playing = "false";
          current.contentWindow?.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*"
          );
        }
      }
    }
  }, [isInView, isModalOpen, autoplayIframe]);
  useEffect(updateAutoplayState, [updateAutoplayState, isModalOpen, isInView]);
  const setAutoplay = useCallback(
    (ref) => {
      autoplayIframe.current = ref;
      // pause the video after 3 seconds or so
      setTimeout(updateAutoplayState, 3000);
    },
    [updateAutoplayState]
  );

  return (
    <RecapVideoContainer>
      <AutoplayVideoContainer ref={ref}>
        <iframe
          ref={setAutoplay}
          title="htn recap video autoplay"
          id="ytplayer"
          width={autoplayVideoWidth}
          height={autoplayVideoHeight}
          src={AUTOPLAY_URL}
          frameBorder="0"
          allow="autoplay"
          sandbox="allow-scripts allow-same-origin allow-presentation"
        ></iframe>
        <ArtboardImage aria-hidden />
      </AutoplayVideoContainer>
      <VideoOverlay />
      {!isModalOpen && (
        <PlayButtonContainer onClick={() => setIsModalOpen(true)}>
          <PlayButton />
        </PlayButtonContainer>
      )}
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        overlayStyle={{
          zIndex: 100,
        }}
      >
        <ModalVideoContainer>
          <Button onClick={() => setIsModalOpen(false)} removeSharedStyles>
            <CloseButton />
          </Button>
          <Spacer height={24} />
          <iframe
            title="htn recap video autoplay"
            id="ytplayer"
            width={modalVideoWidth}
            height={modalVideoHeight}
            src={MODAL_URL}
            frameBorder="0"
            allow="fullscreen"
          ></iframe>
        </ModalVideoContainer>
      </Modal>
    </RecapVideoContainer>
  );
};

export default RecapVideo;
