import { generatePath } from 'react-router'

// Application URL paths. Keep links and route definitions in sync through these constants.
export const routes = {
  login: '/login',

  speaker: '/speaker',
  speakerProfile: '/speaker/profile',
  speakerTalks: '/speaker/talks',
  speakerTalk: '/speaker/talks/:talkId',
  speakerMedia: '/speaker/media',

  organizer: '/organizer',
  organizerSpeakers: '/organizer/speakers',
  organizerSpeaker: '/organizer/speakers/:speakerId',
  organizerBlindSpots: '/organizer/blind-spots',
  organizerEvents: '/organizer/events',
  organizerRoles: '/organizer/roles',
} as const

export const talkPath = (talkId: string) => generatePath(routes.speakerTalk, { talkId })

export const speakerPath = (speakerId: string) =>
  generatePath(routes.organizerSpeaker, { speakerId })
