import React from "react";

export { default as Loading } from "./Loading";

export const LazyCodeOfConduct = React.lazy(() =>
  import(/* webpackChunkName: "page-code-of-conduct" */ "./code-of-conduct")
);

export const LazyTerms = React.lazy(() =>
  import(/* webpackChunkName: "page-terms" */ "./terms")
);

export const LazyPrivacy = React.lazy(() =>
  import(/* webpackChunkName: "page-privacy" */ "./privacy")
);

export const LazyMain = React.lazy(() =>
  import(/* webpackChunkName: "page-main" */ "./Main")
);

export const LazyTravel = React.lazy(() =>
  import(/* webpackChunkName: "page-travel" */ "./travel")
);

export const LazyJoin = React.lazy(() =>
  import(/* webpackChunkName: "page-join" */ "./join")
);

export const LazyNotFound = React.lazy(() =>
  import(/* webpackChunkName: "page-404" */ "./NotFound")
);

export { default as AwSnap } from "./AwSnap";
