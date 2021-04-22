import React from "react";

import { withLoader } from "src/utils";

const About = React.lazy(() =>
  import(/* webpackChunkName: "section-about" */ "./About")
);

export default withLoader(About);
