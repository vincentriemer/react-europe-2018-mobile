export function getSpeakerAvatarURL(speaker) {
  if (speaker.avatar.includes('gravatar')) {
    return speaker.avatar;
  } else {
    return `http://nodevember.org${speaker.avatar}`;
  }
}
