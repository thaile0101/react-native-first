import React, { memo } from "react";
import { ActivityIndicator } from "react-native";
import {Background} from "../components";
import { Navigation } from "../types";
import { theme, HOME } from "../constants";

type Props = {
  navigation: Navigation;
};

const LoadingScreen = ({ navigation }: Props) => {
  setTimeout(() => {    
    navigation.navigate(HOME);
  }, 3000);
  
  return (
    <Background>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </Background>
  );
};

export default memo(LoadingScreen);