import { styled, CSSProp, css } from 'styled-components';

import { RawLI } from '@/components/atoms/RawLI';
import { TTheme } from '@/types/TTheme';
import { TComponentSizes } from '@/types/TComponentSizes';
import { sizeSettings } from './sizeSettings';

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
const StyledLi = styled(RawLI)<{ $externalStyle?: CSSProp; theme: TTheme; $sizeC: TComponentSizes }>`
  ${({ $sizeC, theme }) => css`
    padding: ${theme.spacing[sizeSettings[$sizeC ?? 'md'].padding]}
      ${theme.spacing[sizeSettings[$sizeC ?? 'md'].padding]};

    &:first-child {
      padding-top: ${theme.spacing[sizeSettings[$sizeC ?? 'md'].padding]};
    }

    &:last-child {
      padding-bottom: ${theme.spacing[sizeSettings[$sizeC ?? 'md'].padding]};
    }
  `}

  ${({ $externalStyle }) => $externalStyle}
`;
