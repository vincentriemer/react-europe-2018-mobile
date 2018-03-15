import moment from "moment-timezone";
import _ from "lodash";
export const Schedule = require("../data/schedule.json");
const Event = Schedule.events[0];

export function getSpeakerTalk(speaker) {
  const talk = _.find(speaker.talks, function(talk) {
    return talk.type === 0;
  });
  if (!talk) {
    return speaker.talks[0];
  }
  return talk;
}

export function convertUtcDateToEventTimezone(date) {
  console.log(date);
  return moment.tz(date, Event.timezoneId).format("MM/DD/YYYY h:mm A");
}

const CONFERENCE_START_TIME = convertUtcDateToEventTimezone(Event.startDate);
const CONFERENCE_END_TIME = convertUtcDateToEventTimezone(Event.endDate);

export function conferenceHasStarted() {
  return moment.tz("Europe/Paris").isAfter(CONFERENCE_START_TIME);
}

export function conferenceHasEnded() {
  return moment.tz("Europe/Paris").isAfter(CONFERENCE_END_TIME);
}

export function HideWhenConferenceHasStarted({ children }) {
  if (conferenceHasStarted()) {
    return null;
  } else {
    return children;
  }
}

export function HideWhenConferenceHasEnded({ children }) {
  if (conferenceHasEnded()) {
    return null;
  } else {
    return children;
  }
}

export function ShowWhenConferenceHasEnded({ children }) {
  if (conferenceHasEnded()) {
    return children;
  } else {
    return null;
  }
}
