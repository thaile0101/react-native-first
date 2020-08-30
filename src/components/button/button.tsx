import React, { memo } from "react";
import { Button as PaperButton } from "react-native-paper";
import { theme } from "../../constants/Theme";
import ButtonProps from "./button.props";
import buttonStyles from "./button.style";

const Button = ({ mode, style, children, ...props }: ButtonProps) => (
  <PaperButton
    style={[
      buttonStyles.button,
      mode === "outlined" && { backgroundColor: theme.colors.surface },
      style
    ]}
    labelStyle={[
        buttonStyles.text,
      mode === "contained" && { color: theme.colors.surface }
    ]}
    mode={mode}
    {...props}
  >
    {children}
  </PaperButton>
);

export default memo(Button);