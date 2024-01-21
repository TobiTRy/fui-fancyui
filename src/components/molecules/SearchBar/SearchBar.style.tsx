import { TTheme } from '@/types/TTheme';
import { styled } from 'styled-components';
import { TComponentSizes } from '@/types/TComponentSizes';
import { sizeSettings } from './sizeSettings';

// ------------------------------------------- //
// ------- The style for the component ------- //
// ------------------------------------------- //

// Styled component for the search bar
export const StyledSearchBar = styled.div<{ $isActive?: boolean; theme: TTheme; size: TComponentSizes }>`
  display: flex;
  align-items: center;
  border-radius: ${({ $isActive, theme, size }) =>
    $isActive
      ? `${theme.borderRadius.lg} ${theme.borderRadius.lg} 0px 0px`
      : sizeSettings[size].borderRadius}; // Set the border radius based on whether the search bar list is active
  z-index: 1;

  height: ${({ size }) => sizeSettings[size].height};
  padding: ${({ size }) => sizeSettings[size].padding};
  gap: 4px;
`;

export const SizeWrapper = styled.div`
  width: auto;
`;

export const InputWrapper = styled.div`
  width: 100%;

  div {
    padding: 0;
  }
`;
