/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#FF0A0A";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#000000",
    background: "#F2F2F2",
    tint: tintColorLight,
    icon: "#000000",
    tabIconDefault: "#000000",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};

export const Theme = {
  default: tintColorLight,
  base: "#FFFFFF",
  key: "#000000",
};
