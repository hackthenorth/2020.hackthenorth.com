import React from "react";

import { withLoader } from "src/utils";

const Leaders = React.lazy(() =>
  import(/* webpackChunkName: "section-leaders" */ "./Leaders")
);

export default withLoader(Leaders);
