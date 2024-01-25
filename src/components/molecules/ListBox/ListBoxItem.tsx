import { styled, CSSProp } from 'styled-components';

import { RawLI } from '@/components/atoms/RawLI';
import { TTheme } from '@/types/TTheme';

interface ListBoxItemProps {
  children?: React.ReactNode;
  externalStyle?: CSSProp;
}
// --------------------------------------------------------------------------- //
// ------- The List Item for The ListBox to handle the distances -------- //
// --------------------------------------------------------------------------- //
function ListBoxItem({ children }: ListBoxItemProps) {
  return <StyledLi>{children}</StyledLi>;
}

// This convention is used to allow the Storybook to render the component
ListBoxItem.displayName = 'ListBox.Item';
export { ListBoxItem };

// ------------------------------------------- //
// ------- The style for the component ------- //
// ------------------------------------------- //
// handle the distances between the items and the edeges of the list
const StyledLi = styled(RawLI)<{ $externalStyle?: CSSProp; theme: TTheme }>`
  ${({ $externalStyle }) => ($externalStyle ? $externalStyle : '')}

  padding: 0 ${({ theme }) => theme.spacing.lg};

  &:first-child {
    padding-top: ${({ theme }) => theme.spacing.lg};
  }

  &:last-child {
    padding-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;
