/* @flow */

import * as React from 'react';
import Showcase from './src/Showcase';

export default class ShowcasePage extends React.Component<{}> {
  static meta = {
    title: 'Showcase',
    description: 'Showcase for applications build with Paper',
    permalink: 'showcase',
  };

  render() {
    return <Showcase />;
  }
}
