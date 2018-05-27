import _ from "lodash";
import moment from "moment-timezone";
import { convertUtcDateToEventTimezone, conferenceHasEnded } from "../utils";

export const Schedule = require("../data/schedule.json");
const FullSchedule = Schedule.events[0].groupedSchedule;

const Speakers = Schedule.events[0].speakers;
const Event = Schedule.events[0];
export const Talks = Schedule.events[0].schedule;

function flattenTalks(groupedTalks) {
  const talks = groupedTalks
    .reduce((acc, cur) => acc.concat(cur.slots), [])
    .filter(schedule => {
      return moment(schedule.startDate).isAfter(moment(new Date()));
    });
  return talks;
}

export function findNextTalksAfterDate(date = new Date(), allTalks = Talks) {
  let talks = flattenTalks(Event.groupedSchedule);
  return talks.slice(0, 3);
}

export function findRandomTalk(allTalks = Talks) {
  const talks = Event.groupedSchedule.reduce((acc, cur) => acc.concat(cur.slots), []).filter(talk => talk.type === 0);
  return [_.sample(talks)];
}

const NextYearTalk = {
  talk: true,
  keynote: true,
  room: "Unknown",
  summary: "",
  time: "-",
  title: "ReactEurope 2019",
  speaker: "Maybe you?",
};

export function findTalkData(speakerName) {
  return _.find(Talks, talk => talk.speaker === speakerName);
}
