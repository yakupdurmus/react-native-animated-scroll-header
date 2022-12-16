import React, { useState } from "react";
import {
  ScrollView,
  Animated,
  ScrollViewProps,
  View,
  ViewStyle,
  StyleSheet,
  TextStyle,
} from "react-native";

import Header from "./Header";

interface IProps {
  iconComponent: JSX.Element;
  onPressIcon?: () => void;
  headerText: string;
  headerTextStyle?: TextStyle;
  scrollViewProps?: ScrollViewProps;
  scrollViewRef?: (ref: ScrollView) => void;
  maxHeight?: number;
  minHeight?: number;
  headerContainerStyle?: ViewStyle;
  children?: JSX.Element;
}

const RNAnimatedHeader = ({
  headerText,
  onPressIcon,
  scrollViewProps,
  scrollViewRef,
  maxHeight = 92,
  minHeight = 48,
  headerContainerStyle,
  headerTextStyle,
  iconComponent,
  children,
}: IProps): JSX.Element => {
  const [scrollY, _setScrollY] = useState(new Animated.Value(0));

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );

  const headerHeight = scrollY.interpolate({
    inputRange: [0, maxHeight - minHeight],
    outputRange: [maxHeight, minHeight],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          height: headerHeight,
          ...styles.headerContainer,
          ...headerContainerStyle,
        }}
      >
        <Header
          onPressIcon={onPressIcon}
          headerTextStyle={headerTextStyle}
          headerText={headerText}
          scrollY={scrollY}
          iconComponent={iconComponent}
        />
      </Animated.View>

      <Animated.ScrollView
        {...scrollViewProps}
        ref={scrollViewRef}
        scrollEventThrottle={16}
        onScroll={onScroll}
      >
        <View style={{ height: maxHeight }} />
        {children || <></>}
      </Animated.ScrollView>
    </View>
  );
};

export default RNAnimatedHeader;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    overflow: "scroll",
  },
  headerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#eee",
    zIndex: 2,
  },
});
