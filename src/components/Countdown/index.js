// import React from 'react';
// import moment from 'moment';
// import leftPad from 'left-pad';
// import {
//   Container,
//   SectionContainer,
//   Section,
//   Title,
//   Value,
//   Label,
// } from './styles';

// // Nov 27, 2017 at 8am central standard
// const NODEVEMBER_MOMENT = moment('2017-11-27T08-0600');

// const sections = ['Days', 'Hours', 'Minutes', 'Seconds'];

// const valuesInMilliseconds = {
//   Seconds: 1000,
//   Minutes: 1000 * 60,
//   Hours: 1000 * 60 * 60,
//   Days: 1000 * 60 * 60 * 24,
// };

// const dateDiff = milliseconds => {
//   let millisecondsLeft = milliseconds;
//   return sections.reduce((acc, value) => {
//     const millisecondValue = valuesInMilliseconds[value];
//     const diffValue = parseInt(millisecondsLeft / millisecondValue);
//     millisecondsLeft -= diffValue * millisecondValue;
//     return {
//       ...acc,
//       [value]: leftPad(parseInt(diffValue), 2, '0'),
//     };
//   }, {});
// };

// export default class Countdown extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       now: new Date(),
//       timer: setInterval(this.updateNow, 1000),
//     };
//   }

//   componentWillUnmount() {
//     clearInterval(this.state.timer);
//   }

//   updateNow = () => {
//     this.setState({
//       now: new Date(),
//     });
//   };

//   render() {
//     const { now } = this.state;
//     const diff = dateDiff(NODEVEMBER_MOMENT.diff(now));
//     return (
//       <Container>
//         <Title>Countdown</Title>
//         <SectionContainer>
//           {sections.map(v => {
//             return (
//               <Section key={v}>
//                 <Value>{diff[v]}</Value>
//                 <Label>{v.toLowerCase().substr(0, 1)}</Label>
//               </Section>
//             );
//           })}
//         </SectionContainer>
//       </Container>
//     );
//   }
// }
