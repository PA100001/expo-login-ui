### React Native Expo Login UI (Learning Project)

This is a simple React Native + Expo project built while learning mobile app development.
It focuses on building a modern login screen UI with form inputs, icons, and basic state handling.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

### 📱 Preview

A login screen with:

### 🚀 Tech Stack

- React Native
- Expo
- Expo Router
- React Hooks (useState, useEffect)
- React Native Safe Area Context
- React Native Vector Icons (FontAwesome)

### ✨ Features

- Clean login screen UI
- Keyboard handling with KeyboardAvoidingView + ScrollView
- Focus-based input highlighting
- Password visibility toggle
- Social login button UI (Facebook, Google, Instagram)
- Custom theme-based styling system
- Expo Router integration (no visible header)

### ⚠️ Notes / Improvements

This is a learning project, so it is not production-ready. A few things that can be improved:

- No actual authentication logic is implemented
- Social login buttons are UI-only (no OAuth integration yet)
- Could be split into reusable components (Input, Button, etc.)

### Other setup steps

- To set up ESLint for linting, run `npx expo lint`, or follow our guide on ["Using ESLint and Prettier"](https://docs.expo.dev/guides/using-eslint/)
- If you'd like to set up unit testing, follow our guide on ["Unit Testing with Jest"](https://docs.expo.dev/develop/unit-testing/)
- Learn more about the TypeScript setup in this template in our guide on ["Using TypeScript"](https://docs.expo.dev/guides/typescript/)
