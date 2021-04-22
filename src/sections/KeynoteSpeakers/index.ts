import React from "react";

import { withLoader } from "src/utils";

const KeynoteSpeakers = React.lazy(() =>
  import(/* webpackChunkName: "section-keynote-speakers" */ "./KeynoteSpeakers")
);

export default withLoader(KeynoteSpeakers);
