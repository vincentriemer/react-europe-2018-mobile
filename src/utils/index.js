import moment from 'moment-timezone';

export function getSpeakerAvatarURL(speaker) {
  if (speaker.avatar.includes('gravatar') || !speaker.avatar.startsWith('/img')) {
    return speaker.avatar;
  } else {
    return `http://nodevember.org${speaker.avatar}`;
  }
}

const CONFERENCE_START_TIME = moment.tz('2017-11-27T08:30:00', 'America/Chicago');
const CONFERENCE_END_TIME = moment.tz('2017-11-28T20:00:00', 'America/Chicago');

export function HideWhenConferenceHasStarted({children}) {
  if (moment.tz('America/Chicago').isAfter(CONFERENCE_START_TIME)) {
    return null;
  } else {
    return children;
  }
}

export function HideWhenConferenceHasEnded({children}) {
  if (moment.tz('America/Chicago').isAfter(CONFERENCE_END_TIME)) {
    return null;
  } else {
    return children;
  }
}

export function ShowWhenConferenceHasEnded({children}) {
  if (moment.tz('America/Chicago').isAfter(CONFERENCE_END_TIME)) {
    return children;
  } else {
    return null;
  }
}