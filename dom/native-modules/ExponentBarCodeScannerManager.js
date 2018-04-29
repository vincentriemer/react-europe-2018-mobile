// @flow

import {
  RCTView,
  RCTViewManager as _RCTViewManager,
  RCT_EXPORT_MODULE,
  RCT_EXPORT_METHOD,
} from "react-native-dom";
import ExponentBarCodeScanner from "./ExponentBarCodeScanner";

import type { RCTBridge } from "react-native-dom";

module.exports = (async () => {
  const RCTViewManager = await _RCTViewManager;
  const { RCT_EXPORT_VIEW_PROP } = RCTViewManager;

  @RCT_EXPORT_MODULE("ExponentBarCodeScannerManager")
  class ExponentBarCodeScannerManager extends RCTViewManager {
    view(): UIView {
      return new ExponentBarCodeScanner(this.bridge);
    }

    @RCT_EXPORT_VIEW_PROP("onBarCodeRead", "RCTDirectEventBlock")
    setOnCode(view: ExponentBarCodeScanner, value: Function) {
      view.onCode = value;
    }
  }

  return ExponentBarCodeScannerManager;
})();
