import { FancyBox } from '@/components/atoms/FancyBox';
import { ListBoxItem } from './ListBoxItem';
import { generateFancyBoxStyle } from './ListBox.style';
import { TFancyBoxProps } from '@/components/atoms/FancyBox/FancyBox.model';
import { TComponentSizes } from '@/types/TComponentSizes';
import { TThemeArrayCssValues } from '@/design/designFunctions/arrayToCssValues';

// --------------------------------------------------------------------------- //
// ------------- The ListBox is only a Styled list with items  --------------- //
// --------------------------------------------------------------------------- //
export type TListBox = {
  sizeC?: TComponentSizes;
  borderRadius?: TThemeArrayCssValues;
  boxShadow?: boolean;
} & Omit<TFancyBoxProps<'ul'>, 'as'>;
function ListBox(props: TListBox) {
  const { children, sizeC = 'md', externalStyle, borderRadius, boxShadow, ...htmlProps } = props;

  return (
    <FancyBox
      as="ul"
      externalStyle={generateFancyBoxStyle({
        $borderRadius: borderRadius,
        $externalStyle: externalStyle,
        $sizeC: sizeC,
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
