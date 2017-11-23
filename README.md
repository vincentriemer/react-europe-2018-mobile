# Nodevember app

## Get it running

- `yarn global add exp`
- Clone this repo, cd into it, run `yarn`
- `exp start`
- Scan the QR code from your phone. Alternatively, in another terminal window run `exp ios` and/or `exp android` to open in simulator.

## Publishing updates (JS only)

Android: `exp publish --release-channel android`
iOS: `exp publish --release-channel ios`
Expo client: `exp publish`

## Standalone builds

Android: `exp build:android --release-channel android`
iOS: `exp build:android --release-channel ios`
