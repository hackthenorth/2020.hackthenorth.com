export const getPathname = () =>
  window.location.pathname.replace(/(\/+$)|(^\/+)/gm, "");
