import React from "react";

import { withLoader } from "src/utils";

const Judges = React.lazy(() =>
  import(/* webpackChunkName: "section-judges" */ "./Judges")
);

export default withLoader(Judges);
