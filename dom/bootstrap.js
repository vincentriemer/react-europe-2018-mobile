require("babel-polyfill");

import { RNDomInstance } from "react-native-dom";

// Path to RN Bundle Entrypoint ================================================
const rnBundlePath = "./entry.bundle?platform=dom&dev=true";

// React Native DOM Runtime Options =============================================
import FontLoader from "./native-modules/FontLoader";

const ReactNativeDomOptions = {
  enableHotReload: false,
  nativeModules: [FontLoader],
};

// Helper Functions ============================================================
function addScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.setAttribute("src", src);
    s.onerror = reject;
    s.onload = resolve;
    document.body.appendChild(s);
  });
}

function waitForWebComponentsPolyfill() {
  return new Promise(resolve => {
    window.addEventListener("WebComponentsReady", resolve);
  });
}

// Polyfills ============================================================
const polyfillPromises = [];

polyfillPromises.push(waitForWebComponentsPolyfill());

// Web Animations Polyfill
polyfillPromises.push(
  addScript(
    "https://cdnjs.cloudflare.com/ajax/libs/web-animations/2.3.1/web-animations-next.min.js"
  )
);

// App Initialization ============================================================
Promise.all(polyfillPromises).then(() => {
  const app = new RNDomInstance(
    rnBundlePath,
    "ReactEurope2018",
    document.body,
    ReactNativeDomOptions
  );

  app.start();
});
