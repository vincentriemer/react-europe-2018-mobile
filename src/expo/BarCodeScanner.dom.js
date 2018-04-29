// @flow
import * as React from "react";
import PropTypes from "prop-types";
import { requireNativeComponent, ViewPropTypes } from "react-native";

type Data = {
  data: string,
  type: string,
};

type Props = {
  torchMode?: string | number,
  type?: string | number,
  onBarCodeRead: Data => void,
  barCodeTypes: string[]
};

class BarCodeScanner extends React.Component {
  mounted = true;

  componentWillUnmount() {
    this.mounted = false;
  }

  _onCodeCodeRead = (event) => {
    if (!this.props.onBarCodeRead || !this.mounted) {
      return;
    }
    this.props.onBarCodeRead(event.nativeEvent);
  }

  render() {
    return <ExponentBarCodeScanner {...this.props} onBarCodeRead={this._onCodeCodeRead} />
  }
}

BarCodeScanner.propTypes = {
  ...ViewPropTypes,
  onBarCodeRead: PropTypes.func
};

const ExponentBarCodeScanner = requireNativeComponent('ExponentBarCodeScanner', BarCodeScanner);

export default BarCodeScanner;


