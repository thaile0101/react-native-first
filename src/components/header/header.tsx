import React, { memo } from 'react';
import { Text } from 'react-native';
import { HeaderProps } from './header.props';
import { headerStyles } from './header.style';

const Header = ({ children }: HeaderProps) => (
  <Text style={headerStyles.header}>{children}</Text>
);

export default memo(Header);