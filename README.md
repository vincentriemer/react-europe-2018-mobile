# Nodevember app

- Download [Nodevember on the Apple App Store](https://itunes.apple.com/us/app/nodevember/id1316372562?mt=8)
- Download [Nodevember on Google Play](https://play.google.com/store/apps/details?id=org.nodevember.app&hl=en)
- Open November [with the Expo client](https://expo.io/@nodevember/app)

## Get it running on your machine (anybody)

- `yarn global add exp`
- Clone this repo, cd into it, run `yarn`
- `exp start`
- Scan the QR code from your phone. Alternatively, in another terminal window run `exp ios` and/or `exp android` to open in simulator.

## Deployment (for project owners)

### Publishing updates (JS only)

First, sign in `nodevember` Expo account.

- Android: `exp publish --release-channel android`
- iOS: `exp publish --release-channel ios`
- Expo client: `exp publish`

### Standalone builds

First, sign in to the `nodevember` Expo account.

- Android: `exp build:android --release-channel android`
- iOS: `exp build:android --release-channel ios`
