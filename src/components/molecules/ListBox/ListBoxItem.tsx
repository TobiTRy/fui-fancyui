import { styled, CSSProp, css } from 'styled-components';

import { RawLI } from '@/components/atoms/RawLI';
import { TComponentSizes } from '@/types/TComponentSizes';
import { sizeSettings } from './sizeSettings';
import { arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';

export type TListBoxItemProps = {
  children?: React.ReactNode;
  externalStyle?: CSSProp;
  sizeC?: TComponentSizes;
};
// --------------------------------------------------------------------------- //
// ------- The List Item for The ListBox to handle the distances -------- //
// --------------------------------------------------------------------------- //
function ListBoxItem(props: TListBoxItemProps) {
  const { children, externalStyle, sizeC = 'md' } = props;
  return (
    <StyledLi $sizeC={sizeC} $externalStyle={externalStyle}>
      {children}
    </StyledLi>
  );
}

// This convention is used to allow the Storybook to render the component
ListBoxItem.displayName = 'ListBox.Item';
export { ListBoxItem };

// ------------------------------------------- //
// ------- The style for the component ------- //
// ------------------------------------------- //
// handle the distances between the items and the edeges of the list
const StyledLi = styled(RawLI)<{ $externalStyle?: CSSProp; $sizeC: TComponentSizes }>`
  ${({ $sizeC }) => css`
    padding: ${arrayToCssValues(sizeSettings[$sizeC ?? 'md'].padding, 'spacing')};
  `}

  ${({ $externalStyle }) => $externalStyle}
`;
