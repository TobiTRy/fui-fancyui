import React from 'react';

import { FancyBox } from '@/Components/UI/Atoms/FancyBox';
import { FancyListBoxItem } from './FancyListBoxItem';
import { FancyBoxStyle } from './FancyListBox.style';

type FancyListBoxProps = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;
// --------------------------------------------------------------------------- //
// ---------- The FancyListBox is only a Styled list with items  ------------- //
// --------------------------------------------------------------------------- //
function FancyListBox({ children, ...htmlProps }: FancyListBoxProps) {
  return (
    <FancyBox as="ul" externalStyle={FancyBoxStyle} {...htmlProps}>
      {children}
    </FancyBox>
  );
}

FancyListBox.Item = FancyListBoxItem;
export default FancyListBox; // this convention is used to allow the Storybook to render the component
