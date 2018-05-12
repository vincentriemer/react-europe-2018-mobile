import { RNDomInstance } from "react-native-dom";

// Path to RN Bundle Entrypoint ================================================
const rnBundlePath = "./entry.bundle?platform=dom&dev=true";

// React Native DOM Runtime Options =============================================
import FontLoader from "./native-modules/FontLoader";
import ExponentPermissions from "./native-modules/ExponentPermissions";
import ExponentBarCodeScannerManager from "./native-modules/ExponentBarCodeScannerManager";

const ReactNativeDomOptions = {
  enableHotReload: false,
  nativeModules: [
    FontLoader,
    ExponentPermissions,
    ExponentBarCodeScannerManager,
  ],
};

// App Initialization ============================================================
const app = new RNDomInstance(
  rnBundlePath,
  "ReactEurope2018",
  document.body,
  ReactNativeDomOptions
);

app.start();
