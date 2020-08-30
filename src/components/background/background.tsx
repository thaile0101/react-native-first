import React, { memo } from "react";
import {
  ImageBackground,
  KeyboardAvoidingView
} from "react-native";
import BackgroundProps from "./background.props";
import backgroundStyles from "./background.style";

const Background = ({ children }: BackgroundProps) => (
  <ImageBackground
    source={require("../../assets/background_dot.png")}
    resizeMode="repeat"
    style={backgroundStyles.background}
  >
    <KeyboardAvoidingView style={backgroundStyles.container} behavior="padding">
      {children}
    </KeyboardAvoidingView>
  </ImageBackground>
);

export default memo(Background);