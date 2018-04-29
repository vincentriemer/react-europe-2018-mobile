import * as React from "react";

import {
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from "react-native";


export { ScrollView };

export const BorderlessButton = (props: any) => (
  <TouchableOpacity {...props}>
    <React.Fragment>{props.children}</React.Fragment>
  </TouchableOpacity>
);

export const RectButton = ({ underlayColor, children, ...restProps }: any) => (
  <TouchableHighlight underlayColor="rgba(0, 0, 0, 0.105)" {...restProps}>
    <React.Fragment>{children}</React.Fragment>
  </TouchableHighlight>
);
