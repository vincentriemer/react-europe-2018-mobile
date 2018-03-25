import React from "react";
import { Asset, AppLoading, Font } from "./src/expo";
import { Platform, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { loadSavedTalksAsync } from "./src/utils/storage";
import { SafeAreaView } from "react-navigation";
import { Provider, Client, Connect, query } from "urql";
import { ScheduleQuery } from "./src/data/schedulequery";

if (Platform.OS === "android") {
  SafeAreaView.setStatusBarHeight(0);
}

const client = new Client({
  url: "https://www.react-europe.org/gql",
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
        <View style={{ flex: 1 }}>
          <Connect
            query={query(ScheduleQuery)}
            children={({ loaded, data, addTodo, removeTodo, refetch }) => {
              if (loaded) {
                //console.log(data.events[0].name)
              }
              return <Navigation schedule={data} />;
            }}
          />
        </View>
      </Provider>
    );
  }
}
