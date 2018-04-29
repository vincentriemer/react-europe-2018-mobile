/**
 * @flow
 */

import {
  RCT_EXPORT_METHOD,
  RCT_EXPORT_MODULE,
  RCTFunctionTypePromise,
} from "react-native-dom";

import type { RCTBridge } from "react-native-dom";

type PermissionTypes = "camera";

type PermissionStatus = "undetermined" | "granted" | "denied";
type PermissionExpires = "never";

type PermissionResponse = {
  status: PermissionStatus,
  expires: PermissionExpires,
};

async function askForCameraPermission(): PermissionStatus {
  return "granted";
  try {
    const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
    mediaStream.getVideoTracks().forEach(track => track.stop());
    return "granted";
  } catch (err) {
    switch (err.name) {
      case "NotAllowedError": {
        return "denied";
      }
      case "AbortError":
      case "NotFoundError":
      case "NotReadableError":
      case "OverconstrainedError":
      case "SecurityError":
      case "TypeError": {
        console.error(err);
        return "undetermined";
      }
    }
  }
}

@RCT_EXPORT_MODULE("ExponentPermissions")
export default class Permissions {
  bridge: RCTBridge;

  constructor(bridge: RCTBridge) {
    this.bridge = bridge;
  }

  @RCT_EXPORT_METHOD(RCTFunctionTypePromise)
  async getAsync(type: PermissionTypes, resolveId: number) {
    this.bridge.callbackFromId(resolveId)({
      status: "undetermined",
      expires: "never",
    });
  }

  @RCT_EXPORT_METHOD(RCTFunctionTypePromise)
  async askAsync(type: PermissionTypes, resolveId: number) {
    const callback = this.bridge.callbackFromId(resolveId);

    switch (type) {
      case "camera": {
        const status = await askForCameraPermission();
        const response: PermissionResponse = {
          status,
          expires: "never",
        };
        callback(response);
        break;
      }
      default: {
        const response: PermissionResponse = {
          status: "undetermined",
          expires: "never",
        };
        callback(response);
        break;
      }
    }
  }
}
