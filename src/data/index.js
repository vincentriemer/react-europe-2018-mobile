import _ from "lodash";
import moment from "moment";

export const Schedule = require("../data/schedule.json");
const FullSchedule = Schedule.events[0].groupedSchedule;

const Speakers = Schedule.events[0].speakers;

export const Talks = _.chain(FullSchedule)
  .map(day =>
    day.slots.map(slot => {
      slot.day = day.title;
      slot.dateTime = talkToDateTime(slot);
      return slot;
    })
  )
  .flatten()
  .filter(slot => slot.talk || slot.keynote)
  .value();

export const TalksByTime = _.groupBy(Talks, talk => talk.dateTime);

// lol
export function dayToDate(day) {
  if (day === "Sunday") {
    return "2017-11-26";
  } else if (day === "Monday") {
    return "2017-11-27";
  } else if (day === "Tuesday") {
    return "2017-11-28";
  }
}

// lol also
export function talkToDateTime(talk) {
  let startTime = talk.startDate;
  let endTime = moment(startTime).add(talk.length, "minutes");

  return moment(`${startTime}`, "YYYY-MM-DD HH:mm a Z");
}

// oh my lol
export function findNextTalksAfterDate(date = new Date(), allTalks = Talks) {
  date = moment(date);
  let sortedMatches = _.chain(allTalks)
    .filter(talk => talk.startDate.isAfter(date))
    .sortBy(talk => talk.startDate.unix())
    .value();

  // This will happen after the conference
  if (!sortedMatches[0]) {
    return [NextYearTalk];
  } else {
    let nextTime = sortedMatches[0].startDate;
    return TalksByTime[nextTime];
  }
}

export function findRandomTalk(allTalks = Talks) {
  return [_.sample(allTalks)];
}

const NextYearTalk = {
  talk: true,
  keynote: true,
  room: "Unknown",
  summary: "",
  time: "-",
  title: "Nodevember 2018",
  speaker: "Maybe you?"
};

export function findTalkData(speakerName) {
  return _.find(Talks, talk => talk.speaker === speakerName);
}

export function findSpeakerData(speakerName) {
  return _.find(Speakers, speaker => speaker.name === speakerName);
}
