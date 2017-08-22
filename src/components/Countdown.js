import React from 'react';
import { View } from 'react-native';
import glamorous from 'glamorous-native';
import moment from 'moment';

// Nov 27, 2017 at 8am central standard
const NODEVEMBER_MOMENT = moment('2017-11-27T08-0600');

const Section = glamorous.view({
  flexDirection: 'column',
  padding: 10,
});

const Title = glamorous.text({
  color: 'white',
  fontSize: 16,
  textAlign: 'center',
});

const Value = glamorous.text({
  color: 'white',
  fontSize: 32,
  textAlign: 'center',
  flex: 1,
  fontFamily: 'orbitron-bold',
});

const sections = ['Days', 'Hours', 'Minutes', 'Seconds'];

const valuesInMilliseconds = {
  Seconds: 1000,
  Minutes: 1000 * 60,
  Hours: 1000 * 60 * 60,
  Days: 1000 * 60 * 60 * 24,
};

const dateDiff = milliseconds => {
  let millisecondsLeft = milliseconds;
  return sections.reduce((acc, value) => {
    const millisecondValue = valuesInMilliseconds[value];
    const diffValue = parseInt(millisecondsLeft / millisecondValue);
    millisecondsLeft -= diffValue * millisecondValue;
    return {
      ...acc,
      [value]: parseInt(diffValue),
    };
  }, {});

  const diffObj = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  diffObj.days = parseInt(millisecondsLeft / daysInMilliseconds);
  millisecondsLeft -= diffObj.days * daysInMilliseconds;
  diffObj.hours = parseInt(millisecondsLeft / hoursInMilliseconds);
  millisecondsLeft -= diffObj.hours * hoursInMilliseconds;
  diffObj.minutes = parseInt(millisecondsLeft / minutesInMilliseconds);
  millisecondsLeft -= diffObj.minutes * minutesInMilliseconds;
  diffObj.seconds = parseInt(millisecondsLeft / secondsInMilliseconds);
  millisecondsLeft -= diffObj.seconds * secondsInMilliseconds;
  return diffObj;
};

export default class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      now: new Date(),
      timer: setInterval(this.updateNow, 1000),
    };
  }
  componentWillUnmount() {
    clearInterval(this.state.timer);
  }
  updateNow = () => {
    this.setState({
      now: new Date(),
    });
  };
  render() {
    const { now } = this.state;
    const diff = dateDiff(NODEVEMBER_MOMENT.diff(now));
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        {sections.map(v => {
          return (
            <Section key={v}>
              <Title>{v}</Title>
              <Value>{diff[v]}</Value>
            </Section>
          );
        })}
      </View>
    );
  }
}
