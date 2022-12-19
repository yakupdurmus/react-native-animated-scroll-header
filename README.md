# React Native Animated Scroll Header 

React Native Animated Scroll Header components for iOS + Android

Header that supports RTL. 

## Installation

To install this module `cd` to your project directory and enter the following command:

```
yarn add @react-native-community/slider
```
or
```
npm install @react-native-community/slider --save
```

## Demo 

| Short Content        | Scrollable Content                     |
-----------------------|----------------------------------------|
<img src="https://github.com/yakupdurmus/react-native-animated-scroll-header/blob/main/src/assets/demo1.gif" alt="demo1" width="300"/> | <img src="https://github.com/yakupdurmus/react-native-animated-scroll-header/blob/main/src/assets/demo2.gif" alt="demo2" width="300"/>



## Properties 

| Props                | Types                                  | Description                                                     |
|----------------------|----------------------------------------|-----------------------------------------------------------------|
| iconComponent        | JSX.Element                            | *Require - Left button component                                           |
| onPressIcon          |  () => void                 | Left button onPress event                                       |
| headerText           | string                                 | *Require - Header text                                                     |
| headerTextStyle      |  TextStyle                | Header text style                                               |
| scrollViewProps      |  ScrollViewProps            | ScrollView component props                                      |
| scrollViewRef        |  (ref: ScrollView) => void  | ScrollView referance                                            |
| maxHeight            |  number                   | Header max height. Default 92                                   |
| minHeight            |  number                     | Header min height. Default 48                                   |
| headerContainerStyle |  ViewStyle                 | Default background color backgroundColor #eee |





