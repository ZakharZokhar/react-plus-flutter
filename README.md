## How to build the app

### Requirements

If you want to build and run this demo on your machine, you'll need
a moderately recent version of NodeJS:

```console
$ node -v

v20.3.1
```

And Flutter:

```
$ flutter --version

Flutter 3.10.5 • channel stable
Framework • revision 796c8ef792 (5 weeks ago) • 2023-06-13 15:51:02 -0700
Engine • revision 45f6e00911
Tools • Dart 3.0.5 • DevTools 2.23.1
```
**Ensure `npm` and `flutter` are present in your `$PATH`.**

### Building the app

This repository is a moderately standard React app. It integrates
Flutter web by making it part of the React `assets`.

In order to build this app, first fetch its `npm` dependencies:

```console
$ npm install
```

Then run the `build` script. It'll take care of building Flutter
automatically:

```console
$ npm run build

> cra-flutter@0.0.0 prebuild

... Flutter web build output ...

Compiling lib/main.dart for the Web...

> cra-flutter@0.0.0 build
> react-scripts build

... React build output ...

Compiled successfully.
```

### Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
