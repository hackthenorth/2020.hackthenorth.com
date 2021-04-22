import { init as initApm } from "@elastic/apm-rum";
import "focus-visible";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "smoothscroll-anchor-polyfill";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

const apm = initApm({
  serviceName: "2020-hackthenorth-com",
  serverUrl: "https://apm.hackthenorth.com",
});

/**
 * polyfills
 */
(async () => {
  const isIntersectionObserverSupported = "IntersectionObserver" in window;
  if (!isIntersectionObserverSupported) {
    await import("intersection-observer");
  }

  const isSmoothscrollSupported =
    "scrollBehavior" in document.documentElement.style;
  if (!isSmoothscrollSupported) {
    const module = await import("smoothscroll-polyfill");
    const smoothscroll = module.default;
    smoothscroll.polyfill();
    await import("smoothscroll-anchor-polyfill");
  }

  const isCustomEventSupported = typeof window.CustomEvent === "function";
  if (!isCustomEventSupported) {
    await import("custom-event-polyfill");
  }
})();

apm.setInitialPageLoadName("HackTheNorth2020");
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/* eslint-disable no-console */
console.log(`
             ╓╖╖╖╖╓╓╖╦Θ▒▒▒▒▒@@@▒▒╠░░░░░╚▒▒▒▒▒╚░░░░░░╚╚╚╚░░░░░░╚╚╚╚╠▒▒░b
           ╒╬▓▒░░░░░░░░░░▒▒▒▒░░░░░░░░▒░░░░░░░░░░░░░░░▒░░░░░░░░░░░╣╬╬╬▐▌
          #▒░░▀▒░░░░░░φ╬╬╬╬╬╬░░░░░░░░░░░░▒▄╩░░░░░░▒##▀▀#╪▄▄░░░░▒░░░░░░▌
       ╓#╬░░░░░╟▌░░░░╠╬╬╬╬╬╬╩░░░░▒▒░φ░░▄▀▀╝▒▒░▒░░░▒░▒░░▒#▀╠╣▀▀▄▒░≥░▒▒▒░▓
     @╚░░░░░░░░▐▌░░░░╬╬╬╬╬╩▒░░░▒φ░▒░░▒▓▄▄▄╦,  ╙╝▄░░░░▄▀,#╬░▄▓▓▀▀▀▀▓▒▀╬▀╬
    ▐░░░░░░░▒▒░╚▓░░░░░░╚╠▒▒░░░░░░░▒▄▀▒Å╙╙╙▀▒╩▒#ç ╙▓░▌ ╔╬½▓██╙      █▓▒╢µ¼
  ,╬▒░░░░░║▓▓▓▓▓╩▓▒░░░φ╬╬╬╬▒▄▄Å╩▓▀░▄╨      ╟█▓▒░▀µ ╙▄╔▒╟███      ▄████▒╟ %
╓╬░░░░░░░]▓▓▓▓▓▓▌░╚▓░░░╠╩╚░╫¬  @░╔█▌     ,▄██▀▀█░╚▄ ╟▌░█████▓▓▓████▀╙█▌░▌ b
╫░░░░░░░░▐▓▓▓▓▓▓▌░░╠▌░░░░░▐▌  ▐▒▐███▄▄▄▄███▒ ,▄██░╟  ▌░████▀╙╙█████#██▌░▌ ▌
 ╙▒░░░░░░░╫▓▓▓▓▓░░░░▓░░░░░▐⌐  ╟░╟███▀▀███████████░░▌ █░╟█▌,,▄███▒φ▒▒░╟▒╟⌐]⌐
   ╙▒░░░░░░╚▀▀▒░░░░░▓░░░░░░▌  ╙▒╚█▌   ▄██████████░▐⌐▐╨╫░╚█████▀░▒░░░░▓▒╨ ▓
    ▐▒░░░░░░░░░░░░░░╙╣▄░░░▒╟   ╟░╚██████████████▒░▌,▓▄ ╙▒░╠█▀░░░░░▒▄▓╩▄▄▀░▌
     ▌░░░░░░░░░░░░░░░░╚╫▒░░░▓   ╙▄╙▀██████████▀░▄╩╓╬φ░╬▄▄▀░▒░░░░▒▄▀▀,▄╬░░░╫
     └╬░░░░░▄▓▓▓░░░░░░░░▓░░░▒╚╦   ╙╬▒╚╚╙▀▀╬╚░▒Å╙╓#▒▒▒░░░▒▒░▒▄▄▓╬▄#Θ╠░▒░╚░╠╛
       ╙╬░░▐▓▓▓▓░░░░░░░░▓▒░░░░▒╠#▄   └╙╙╙╙╙╙└,▄▀░▒░░░░░░▒╠░░▒▒▒▒▒░░░░░φ▒░╫
         ╟▒░╚╬╚░░░░▓▓▓▓▄╚▓▒░░░░#░▒░╠▒#####▒▒░░▒░░░░░░░░░░░░░░░░░░░░░░░░░░╠µ
         j▒░░░░░░╔▓▓▓▓▓▓▒░╟▒░░░░░░░▒░░░░░░░░░░░░░░░░░░▒▄▄▄╝╝▄▒░░░░░▒╬╬╬╬░░▓
          ╣░░░░░░▓▓▓▓▓▓▓▌░░╟▒░░░░░░░░░░░░░░░░░░░░░▄▓▌─ ╟╬▌   █▓▌░▓╠╬╬╬╬╬░░▌
           ╙╬░░░░╫▓▓▓▓▓▓░░░╟▌░░░░░φ╬╬╬▒░░░░░░▒▒░▄▓╣▓▌,▄#▀▀▒▒░░╠#▀░░╩╩╩░░░╣
             ╚▒░░░╙▀▓▓▀░░░░╟▒░░░░░╚╩╩╚░░░░░░Γ▌░╫▓╝▀╠░▒▒░░░░░░░▒░░░░░░▒φ▒░▌
              ╬░░░░░▒░░░░░░░╫▒░░░░░░░░▒╠╬╬▒░░░╠▀▒░░░░░░░░░░░░░░░░░░░░╬╬╩░▓"
               ╚▒░▓▓▓▌░▄▄▒░░░╟▒░░░░░▒╬╬╬╬╬╬░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒Å▀
                ▓░╙▀▒å─.  ╙╬░░▓▒░░░░╬╬╬╬╬╬▒░░░░░░░░░░░░░▒▒▄▄ÅÅÅ╝╝╙╙╙╙
                 ╙╝╩▓ ;    ▌░╟▒░░░░░░╚░░░░▒▄▄╝╝╩╝╝▄╝▓╝╝╨╙└
                            ^"╙╩▒▄╝╩╙╙╙╙╜╨╙
                           ██╗  ██╗ █████╗  ██████╗██╗  ██╗      
                           ██║  ██║██╔══██╗██╔════╝██║ ██╔╝      
                           ███████║███████║██║     █████╔╝       
                           ██╔══██║██╔══██║██║     ██╔═██╗       
                           ██║  ██║██║  ██║╚██████╗██║  ██╗      
                           ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝      
                                                                 
                             ████████╗██╗  ██╗███████╗           
                             ╚══██╔══╝██║  ██║██╔════╝           
                                ██║   ███████║█████╗             
                                ██║   ██╔══██║██╔══╝             
                                ██║   ██║  ██║███████╗           
                                ╚═╝   ╚═╝  ╚═╝╚══════╝           
                                                                 
                     ███╗   ██╗ ██████╗ ██████╗ ████████╗██╗  ██╗
                     ████╗  ██║██╔═══██╗██╔══██╗╚══██╔══╝██║  ██║
                     ██╔██╗ ██║██║   ██║██████╔╝   ██║   ███████║
                     ██║╚██╗██║██║   ██║██╔══██╗   ██║   ██╔══██║
                     ██║ ╚████║╚██████╔╝██║  ██║   ██║   ██║  ██║
                     ╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝
`);
