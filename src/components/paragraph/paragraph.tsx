import React, { memo } from 'react';
import { Text } from 'react-native';
import { ParagraphProps } from './paragraph.props';
import { paragraphStyles } from './paragraph.style';

const Paragraph = ({ children }: ParagraphProps) => (
  <Text style={paragraphStyles.text}>{children}</Text>
);

export default memo(Paragraph);