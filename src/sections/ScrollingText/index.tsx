import React from "react";

import { withLoader } from "src/utils";

const ScrollingText = React.lazy(() =>
  import(/* webpackChunkName: "section-scrolling-text" */ "./ScrollingText")
);

export default withLoader(ScrollingText);
