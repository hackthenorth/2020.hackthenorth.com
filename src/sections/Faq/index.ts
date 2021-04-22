import React from "react";

import { withLoader } from "src/utils";

const Faq = React.lazy(() =>
  import(/* webpackChunkName: "section-faq" */ "./Faq")
);

export default withLoader(Faq);
