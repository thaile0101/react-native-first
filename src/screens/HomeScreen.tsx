import React, { memo } from "react";
import { Paragraph, Button, Background, Header, Logo } from "../components";
import { Navigation } from "../types";
import { LOGIN, REGISTER } from "../constants";

type Props = {
  navigation: Navigation;
};

const HomeScreen = ({ navigation }: Props) => (
  <Background>
    <Logo />
    <Header>WeMove Login</Header>

    <Paragraph>
      Login With WeMove.
    </Paragraph>
    <Button mode="contained" onPress={() =>navigation.navigate(LOGIN)}>
      Login
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate(REGISTER)}
    >
      Sign Up
    </Button>
  </Background>
);

export default memo(HomeScreen);