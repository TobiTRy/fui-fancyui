import React from 'react';

import { FancyBox } from '@/components/atoms/FancyBox';
import { FancyListBoxItem } from './FancyListBoxItem';
import { generateFancyBoxStyle } from './FancyListBox.style';

type FancyListBoxProps = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement> &
  React.ComponentProps<typeof FancyBox>;
// --------------------------------------------------------------------------- //
// ---------- The FancyListBox is only a Styled list with items  ------------- //
// --------------------------------------------------------------------------- //
function FancyListBox({ children, externalStyle, ...htmlProps }: FancyListBoxProps) {
  return (
    <FancyBox as="ul" externalStyle={generateFancyBoxStyle(externalStyle)} {...htmlProps}>
      {children}
    </FancyBox>
  );
}

FancyListBox.Item = FancyListBoxItem;
export default FancyListBox; // this convention is used to allow the Storybook to render the component
