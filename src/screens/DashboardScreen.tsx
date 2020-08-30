import React, { memo } from "react";
import { Background, Logo, Header, Paragraph, Button } from "../components";
import { Navigation } from "../types/common";

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => (
  <Background>
    <Logo />
    <Header>Let’s start</Header>
    <Paragraph>
      Your amazing app starts here. Open you favourite code editor and start
      editing this project.
    </Paragraph>
    <Button mode="outlined" onPress={() => {
        console.log(111111)
    }}>
      Logout
    </Button>
  </Background>
);

export default memo(Dashboard);