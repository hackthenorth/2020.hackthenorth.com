import React from "react";

import { withLoader } from "src/utils";

const Footer = React.lazy(() =>
  import(/* webpackChunkName: "section-footer" */ "./Footer")
);

export default withLoader(Footer, { height: "15vh" });
