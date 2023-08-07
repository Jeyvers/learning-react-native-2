# Expo Router Example

Use [`expo-router`](https://expo.github.io/router) to build native navigation using files in the `app/` directory.

## 🚀 How to use

```sh
npx create-expo-app -e with-router
```

## 📝 Notes

- [Expo Router: Docs](https://expo.github.io/router)
- [Expo Router: Repo](https://github.com/expo/router)

<!-- COMMANDS RUN IN THIS COURSE SO FAR -->

- npx create-expo-app -e with-router
- npm start
- download and install Andriod studio
- click on the menu, click on virtual device manager (or AVD if they change again)
- Create device - nexus 6P - For google APIs (Pie download) - Finish
- Go back to AVD and click play on our newly created device
- press a on terminal of our project to open Andriod simulator
  If it crashes:
- npx expo install react-native@0.71.8
- clear apps open on simulator
- stop and restart the expo server

- command m will open that thing again
- rnfe is rafce for react-native

<!-- NOTES -->

- https://reactnative.dev/docs/intro-react-native-components#core-components
- https://reactnative.dev/docs/ (VERY IMPORTANT)
- In react native, button are self closing tags and receive props such as title, onPress, etc. but they do not take in style prop
- Go to the api reference for a particular rn tag to see more information about the props you can use and how they work. Good advice.

<!-- ISSUES AND FIXES -->

- In FlatList, item must be destructure (({})) not (())
