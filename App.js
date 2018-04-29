import "expo";
import React from "react";
import { Asset, AppLoading, Font } from "./src/expo";
import { Platform, View, YellowBox } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { loadSavedTalksAsync } from "./src/utils/storage";
import { SafeAreaView } from "react-navigation";
import { Provider, Client, Connect, query } from "urql";
import { ScheduleQuery } from "./src/data/schedulequery";
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { GQL } from "./src/constants";

YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader",
]);

if (Platform.OS === "android") {
  SafeAreaView.setStatusBarHeight(0);
}

const theme = {
  ...DefaultTheme,
  fonts: {
    thin: "open-sans",
    light: "open-sans",
    regular: "open-sans-semibold",
    medium: "open-sans-bold"
  }
};

const client = new Client({
  url: GQL.uri
});

import Navigation from "./src/Navigation";

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  _loadResourcesAsync = () => {
    return Promise.all([this._loadAssetsAsync(), this._loadDataAsync()]);
  };

  _loadDataAsync = () => {
    return loadSavedTalksAsync();
  };

  _loadAssetsAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        "open-sans-bold": require("./src/assets/OpenSans-Bold.ttf"),
        "open-sans": require("./src/assets/OpenSans-Regular.ttf"),
        "open-sans-semibold": require("./src/assets/OpenSans-SemiBold.ttf"),
        ...Ionicons.font,
      }),
      Asset.fromModule(require("./src/assets/logo.png")).downloadAsync(),
      Asset.fromModule(
        require("react-navigation/src/views/assets/back-icon.png")
      ).downloadAsync(),
    ]);
  };

  render() {
    if (!this.state.fontLoaded) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={console.error}
          onFinish={() => {
            this.setState({ fontLoaded: true });
          }}
        />
      );
    }

    return (
      <Provider client={client}>
        <PaperProvider theme={theme}>
          <View style={{ flex: 1 }}>
            <Connect
              query={query(ScheduleQuery)}
              children={({ loaded, data, addTodo, removeTodo, refetch }) => {
                if (loaded) {
                  //console.log(data.events[0].name)
                }
                return <Navigation schedule={data} client={client} />;
              }}
            />
          </View>
        </PaperProvider>
      </Provider>
    );
  }
}
