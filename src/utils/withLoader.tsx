/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Suspense } from "react";

import { Loader, LoaderProps } from "src/components";

/**
 * A HOC to wrap any lazy-loaded components with a loader
 * @param C the component being lazy loaded
 */
export const withLoader = <T extends {}>(
  C: any,
  loaderProps?: LoaderProps
): React.FC<T> => (props: T) => (
  <Suspense fallback={<Loader {...loaderProps} />}>
    <C {...props} />
  </Suspense>
);
