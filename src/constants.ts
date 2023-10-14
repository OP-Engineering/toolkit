import { Platform } from "react-native";

export const isAndroid = Platform.OS === "android";
export const isIOS = Platform.OS === "ios";
// on Android Version returns number on iOS string
// https://reactnative.dev/docs/platform#version
export const ANDROID_VERSION = isIOS ? 0 : (Platform.Version as number);
export const IOS_VERSION = isIOS ? (Platform.Version as string) : "";
