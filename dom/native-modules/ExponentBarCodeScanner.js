// @flow

import jsQR from "jsqr";
import { RCTView, CustomElement } from "react-native-dom";

import type { RCTBridge } from "react-native-dom";

@CustomElement("exp-barcode-scanner")
export default class ExponentBarCodeScanner extends RCTView {
  videoElement: HTMLVideoElement;
  canvasCapture: HTMLCanvasElement;
  canvas: CanvasRenderingContext2D;

  shouldStopVideo = false;

  onCode: (data: string) => void;

  constructor(bridge: RCTBridge) {
    super(bridge);

    this.canvasCapture = document.createElement("canvas");
    Object.assign(this.canvasCapture.style, {
      position: "absolute",
      width: "0px",
      height: "0px",
      objectFit: "contain",
    });

    this.childContainer.appendChild(this.canvasCapture);
    this.canvas = this.canvasCapture.getContext("2d");

    this.videoElement = document.createElement("video");
    Object.assign(this.videoElement.style, {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    });

    this.childContainer.appendChild(this.videoElement);
  }

  connectedCallback() {
    this.attachCameraToVideo();
  }

  async attachCameraToVideo() {
    const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
    this.videoElement.srcObject = mediaStream;
    this.videoElement.onloadedmetadata = e => {
      this.videoElement.play().then(() => {
        window.requestAnimationFrame(this.tick);
      });
    };
  }

  tick = () => {
    if (this.shouldStopVideo) {
      return;
    }

    if (this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA) {
      this.canvasCapture.width = this.videoElement.videoWidth;
      this.canvasCapture.height = this.videoElement.videoHeight;

      this.canvas.drawImage(
        this.videoElement,
        0,
        0,
        this.canvasCapture.width,
        this.canvasCapture.height
      );

      const imageData = this.canvas.getImageData(0, 0, this.canvasCapture.width, this.canvasCapture.height);
      const code = jsQR(imageData.data, imageData.width, imageData.height);
      
      if (code && code.data && code.data !== "") {
        this.onCode({ data: code.data });
      }

      window.setTimeout(this.tick, 500);
    }
  };

  disconnectedCallback() {
    this.shouldStopVideo = true;
    this.videoElement.srcObject && this.videoElement.srcObject.getVideoTracks().forEach(track => track.stop());
  }

  // purge() {
  //   this.shouldStopVideo = true;
  //   this.videoElement.srcObject && this.videoElement.srcObject.getVideoTracks().forEach(track => track.stop());
  //   super.purge();
  // }
}
