"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IOS_VERSION = exports.ANDROID_VERSION = exports.isIOS = exports.isAndroid = void 0;
const react_native_1 = require("react-native");
exports.isAndroid = react_native_1.Platform.OS === "android";
exports.isIOS = react_native_1.Platform.OS === "ios";
// on Android Version returns number on iOS string
// https://reactnative.dev/docs/platform#version
exports.ANDROID_VERSION = exports.isIOS ? 0 : react_native_1.Platform.Version;
exports.IOS_VERSION = exports.isIOS ? react_native_1.Platform.Version : "";
