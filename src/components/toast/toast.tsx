import React, { memo } from "react";
import { Snackbar } from "react-native-paper";
import { View, Text } from "react-native";
import { theme } from "../../constants";
import { toastStyles } from "./toast.style";
import { ToastProps } from "./toast.props";

const Toast = ({ type = "error", message, onDismiss }: ToastProps) => (
  <View style={toastStyles.container}>
    <Snackbar
      visible={!!message}
      duration={2000}
      onDismiss={onDismiss}
      style={{
        backgroundColor:
          type === "error" ? theme.colors.error : theme.colors.success
      }}
    >
      <Text style={toastStyles.content}>{message}</Text>
    </Snackbar>
  </View>
);

export default memo(Toast);