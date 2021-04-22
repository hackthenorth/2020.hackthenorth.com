import React from "react";

import { withLoader } from "src/utils";

const Sponsors = React.lazy(() =>
  import(/* webpackChunkName: "section-sponsors" */ "./Sponsors")
);

export default withLoader(Sponsors, { height: "150vh" });
