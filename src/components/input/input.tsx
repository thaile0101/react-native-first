import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { TextInput as Input } from 'react-native-paper';
import { inputStyles } from './input.style';
import { InputProps } from './input.props';
import { theme } from '../../constants';

const TextInput = ({ errorText, ...props }: InputProps) => (
  <View style={inputStyles.container}>
    <Input
      style={inputStyles.input}
      selectionColor={theme.colors.primary}
      underlineColor="transparent"
      mode="outlined"
      {...props}
    />
    {errorText ? <Text style={inputStyles.error}>{errorText}</Text> : null}
  </View>
);

export default memo(TextInput);