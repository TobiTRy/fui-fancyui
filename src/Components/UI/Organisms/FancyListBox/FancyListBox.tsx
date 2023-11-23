import React from 'react';

import { FancyBox } from '@/Components/UI/Atoms/FancyBox';
import FancyListBoxItem from './FancyListBoxItem';
import { FancyBoxStyle } from './FancyListBox.style';

type FancyListBoxProps = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;
export default function FancyListBox({ children, ...htmlProps }: FancyListBoxProps) {
  return (
    <FancyBox as="ul" externalStyle={FancyBoxStyle} {...htmlProps}>
      {children}
    </FancyBox>
  );
}

FancyListBox.Item = FancyListBoxItem;
