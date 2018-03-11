import moment from 'moment-timezone'

export function getSpeakerAvatarURL(speaker) {
  if (
    speaker.avatar.includes('gravatar') ||
    !speaker.avatar.startsWith('/img')
  ) {
    return speaker.avatar
  } else {
    return `http://nodevember.org${speaker.avatar}`
  }
}

const CONFERENCE_START_TIME = moment.tz('2018-05-15T08:30:00', 'Europe/Paris')
const CONFERENCE_END_TIME = moment.tz('2018-05-19T21:00:00', 'Europe/Paris')

export function conferenceHasStarted() {
  return moment.tz('Europe/Paris').isAfter(CONFERENCE_START_TIME)
}

export function conferenceHasEnded() {
  return moment.tz('Europe/Paris').isAfter(CONFERENCE_END_TIME)
}

export function HideWhenConferenceHasStarted({ children }) {
  if (conferenceHasStarted()) {
    return null
  } else {
    return children
  }
}

export function HideWhenConferenceHasEnded({ children }) {
  if (conferenceHasEnded()) {
    return null
  } else {
    return children
  }
}

export function ShowWhenConferenceHasEnded({ children }) {
  if (conferenceHasEnded()) {
    return children
  } else {
    return null
  }
}
