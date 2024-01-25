import React from 'react';

import { FancyBox } from '@/components/atoms/FancyBox';
import { ListBoxItem } from './ListBoxItem';
import { generateFancyBoxStyle } from './ListBox.style';

type ListBoxProps = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement> &
  React.ComponentProps<typeof FancyBox>;
// --------------------------------------------------------------------------- //
// ---------- The ListBox is only a Styled list with items  ------------- //
// --------------------------------------------------------------------------- //
function ListBox({ children, externalStyle, ...htmlProps }: ListBoxProps) {
  return (
    <FancyBox as="ul" externalStyle={generateFancyBoxStyle(externalStyle)} {...htmlProps}>
      {children}
    </FancyBox>
  );
}

ListBox.Item = ListBoxItem;
export default ListBox; // this convention is used to allow the Storybook to render the component
