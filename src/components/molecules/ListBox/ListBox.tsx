import { FancyBox } from '@/components/atoms/FancyBox';
import { ListBoxItem } from './ListBoxItem';
import { generateFancyBoxStyle } from './ListBox.style';
import { TFancyBoxProps } from '@/components/atoms/FancyBox/FancyBox.model';
import { TComponentSizes } from '@/types/TComponentSizes';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';

// --------------------------------------------------------------------------- //
// ------------- The ListBox is only a Styled list with items  --------------- //
// --------------------------------------------------------------------------- //
export type TListBox = {
  size?: TComponentSizes;
  borderRadius?: TBorderRadiusSizes;
  boxShadow?: boolean;
} & Omit<TFancyBoxProps<'ul'>, 'as'>;
function ListBox(props: TListBox) {
  const { children, size = 'md', externalStyle, borderRadius, boxShadow, ...htmlProps } = props;

  return (
    <FancyBox
      as="ul"
      externalStyle={generateFancyBoxStyle({
        $borderRadius: borderRadius,
        $externalStyle: externalStyle,
        $size: size,
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
