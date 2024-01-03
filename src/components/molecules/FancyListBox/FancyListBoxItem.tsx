import { styled, CSSProp } from 'styled-components';

import { RawLI } from '@/components/atoms/RawLI';
import { TTheme } from '@/types/TTheme';

interface FancyListBoxItemProps {
  children?: React.ReactNode;
  externalStyle?: CSSProp;
}
// --------------------------------------------------------------------------- //
// ------- The List Item for The FancyListBox to handle the distances -------- //
// --------------------------------------------------------------------------- //
function FancyListBoxItem({ children }: FancyListBoxItemProps) {
  return <StyledLi>{children}</StyledLi>;
}

// This convention is used to allow the Storybook to render the component
FancyListBoxItem.displayName = 'FancyListBox.Item';
export { FancyListBoxItem };

// ------------------------------------------- //
// ------- The style for the component ------- //
// ------------------------------------------- //
// handle the distances between the items and the edeges of the list
const StyledLi = styled(RawLI)<{ $externalStyle?: CSSProp; theme: TTheme }>`
  ${({ $externalStyle }) => ($externalStyle ? $externalStyle : '')}

  padding: 0 ${({ theme }) => theme.spacing.md};

  &:first-child {
    padding-top: ${({ theme }) => theme.spacing.md};
  }

  &:last-child {
    padding-bottom: ${({ theme }) => theme.spacing.md};
  }
`;
