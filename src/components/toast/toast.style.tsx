import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const toastStyles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 80 + getStatusBarHeight(),
    width: "100%"
  },
  content: {
    fontWeight: "500"
  }
});