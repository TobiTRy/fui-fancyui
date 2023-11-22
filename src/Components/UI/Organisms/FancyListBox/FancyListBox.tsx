import React from 'react';

import { FancyBox } from '@/Components/UI/Atoms/FancyBox';
import FancyListBoxItem from './FancyListBoxItem';
import { FancyBoxStyle } from './FancyListBox.style';

interface FancyListBoxProps {
  children?: React.ReactNode;
}
export default function FancyListBox({ children }: FancyListBoxProps) {
  return (
    <FancyBox as="ul" externalStyle={FancyBoxStyle}>
      {children}
    </FancyBox>
  );
}

FancyListBox.Item = FancyListBoxItem;
