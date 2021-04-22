import { North, ThemeDefinition } from "@hackthenorth/north";
import { createBrowserHistory } from "history";
import React, { Suspense } from "react";
import { Helmet } from "react-helmet";

import { Route } from "src/constants";
import {
  LazyMain,
  LazyNotFound,
  Loading,
  LazyPrivacy,
  LazyCodeOfConduct,
  LazyTerms,
  // LazyTravel,
} from "src/pages";
import themeDef from "src/theme";
import { getPathname } from "src/utils";


export const cHistory = createBrowserHistory();

const ROUTES = {
  [Route.MAIN]: LazyMain,
  [Route.PRIVACY]: LazyPrivacy,
  [Route.CODE_OF_CONDUCT]: LazyCodeOfConduct,
  [Route.TERMS]: LazyTerms,
  // [Route.JOIN]: LazyJoin,
  [Route.NOT_FOUND]: LazyNotFound,
  // [Route.TRAVEL]: LazyTravel, @todo: re-enable this when logistics wants
};

const Router = () => {
  const path = getPathname();
  const foundRoute = path in ROUTES ? path : Route.NOT_FOUND;

  const ComponentAtRoute = ROUTES[foundRoute];
  return <ComponentAtRoute />;
};

const App: React.FC = () => (
  <North themeDefinition={themeDef as ThemeDefinition}>
    <Helmet>
      <meta property="og:url" content="https://hackthenorth.com" />

      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="851" />
      <meta property="og:image:height" content="315" />
      <meta property="og:image:alt" content="Hack the North logo" />

      <meta
        property="og:description"
        content="Hack the North is Canada’s biggest hackathon, happening January 15-17, 2021. With 36 hours of mentorship, resources, and unique experiences, we want to make it easy for anyone to dream big."
      />
      <meta
        property="og:image"
        content="https://hackthenorth.com/preview_img.jpg"
      />
      <meta
        property="og:image:secure_url"
        content="https://hackthenorth.com/preview_img.jpg"
      />
      <meta
        name="twitter:image"
        content="https://hackthenorth.com/preview_img_twitter.jpg"
      />
    </Helmet>
      <Suspense fallback={<Loading />}>
        <Router />
      </Suspense>
  </North>
);

export default App;
