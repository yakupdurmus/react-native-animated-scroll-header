import React from "react";
import {
  Animated,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";

const Header = ({
  onPressIcon,

  headerTextStyle,
  headerText,
  scrollY,
  iconComponent,
}: {
  onPressIcon?: () => void;
  iconName?: string;
  headerTextStyle?: TextStyle;
  headerText: string;
  scrollY: Animated.Value;
  iconComponent: JSX.Element;
}): JSX.Element => {
  const headerTextLeft = scrollY.interpolate({
    inputRange: [0, 44],
    outputRange: [16, 48],
    extrapolate: "clamp",
  });

  const headerTextTop = scrollY.interpolate({
    inputRange: [0, 44],
    outputRange: [44, 9],
    extrapolate: "clamp",
  });

  const headerTextSize = scrollY.interpolate({
    inputRange: [0, 44],
    outputRange: [30, 22],
    extrapolate: "clamp",
  });

  const headerTextLineHeight = scrollY.interpolate({
    inputRange: [0, 44],
    outputRange: [39, 30],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.headerContent}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={onPressIcon}
        hitSlop={hitSlop}
      >
        {iconComponent}
      </TouchableOpacity>

      <Animated.View
        style={{
          ...styles.headerTextWrapper,
          top: headerTextTop,
          left: headerTextLeft,
        }}
      >
        <Animated.Text
          style={{
            ...styles.headerText,
            ...(headerTextStyle ? headerTextStyle : {}),
            fontSize: headerTextSize,
            lineHeight: headerTextLineHeight,
          }}
          numberOfLines={1}
        >
          {headerText}
        </Animated.Text>
      </Animated.View>
    </View>
  );
};

export default Header;

const hitSlop = { top: 5, right: 5, left: 5, bottom: 5 };

const styles = StyleSheet.create({
  headerText: {
    color: "#333",
    fontWeight: "700",
    lineHeight: 39,
  },
  headerTextWrapper: {
    minHeight: 30,
    position: "absolute",
    flexDirection: "row",
  },
  backButton: {
    top: 12,
    left: 16,
    position: "absolute",
  },
  headerContent: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flex: 1,
  },
});
