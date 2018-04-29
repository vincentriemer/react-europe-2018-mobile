// @flow

import * as React from "react";
import {
  View,
  NativeModules,
  Linking,
  Image,
  ActivityIndicator,
} from "react-native";
import resolveAssetSource from "resolveAssetSource";
import * as Permissions from "./Permissions";

const FontLoader = NativeModules.FontLoader;

export const Constants = {
  statusBarHeight: 0,
};

export const Asset = {
  fromModule(assetId: number) {
    const asset = resolveAssetSource(assetId);
    return {
      downloadAsync: (): Promise<void> => {
        if (asset) {
          return Image.prefetch(asset.uri);
        }
        return Promise.resolve();
      },
    };
  },
};

export const Video = (props: any) => null;

export const WebBrowser = {
  openBrowserAsync(url: string) {
    return Linking.openURL(url);
  },
};

export const Font = {
  loadedFonts: [],
  isLoaded(fontName: string) {
    return this.loadedFonts.includes(fontName);
  },
  loadAsync(fontConfig: { [fontName: string]: string }) {
    return Promise.all(
      Object.entries(fontConfig).map(([name, assetId]) => {
        const asset = resolveAssetSource(assetId);
        if (asset) {
          return FontLoader.loadFont(name, asset.uri).then(() => {
            this.loadedFonts.push(name);
          });
        } else {
          return Promise.reject();
        }
      })
    );
  },
};

export class AppLoading extends React.Component<*> {
  componentDidMount() {
    if (this.props.startAsync) {
      this.props
        .startAsync()
        .then(() => {
          if (this.props.onFinish) {
            this.props.onFinish();
          }
        })
        .catch(err => {
          if (this.props.onError) {
            this.props.onError(err);
          }
        });
    }
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#4E5EAB",
        }}
      >
        <ActivityIndicator color="#fff" size="large" />
      </View>
    );
  }
}

export const Updates = {
  addListener: () => {}
};

// export const BarCodeScanner = (props) => <View {...props} />;

import BarCodeScanner from "./BarCodeScanner";

export { Permissions, BarCodeScanner };