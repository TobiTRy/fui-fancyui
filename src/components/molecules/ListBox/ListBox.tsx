'use client';

import { FancyBox } from '@/components/atoms/FancyBox';
import { generateFancyBoxStyle } from './ListBox.style';
import { ListBoxItem } from './ListBoxItem/ListBoxItem';
import { TListBoxWithFancyBoxAttrs } from './TListBox.model';

// --------------------------------------------------------------------------- //
// ------------- The ListBox is only a Styled list with items  --------------- //
// --------------------------------------------------------------------------- //
function ListBox(props: TListBoxWithFancyBoxAttrs) {
  const { children, sizeC = 'md', externalStyle, borderRadius, boxShadow, ...htmlProps } = props;

  return (
    <FancyBox
      as="ul"
      sizeC={sizeC}
      borderRadius={borderRadius}
      externalStyle={generateFancyBoxStyle({
        $externalStyle: externalStyle,
        $boxShadow: boxShadow,
      })}
      {...htmlProps}
    >
      {children}
    </FancyBox>
  );
}

ListBox.Item = ListBoxItem;
export default ListBox; // this convention is used to allow the Storybook to render the component
