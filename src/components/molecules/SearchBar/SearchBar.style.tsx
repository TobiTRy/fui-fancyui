import { TTheme } from '@/types/TTheme';
import { styled } from 'styled-components';
import { TComponentSizes } from '@/types/TComponentSizes';
import { sizeSettings } from './sizeSettings';

// ------------------------------------------- //
// ------- The style for the component ------- //
// ------------------------------------------- //

// Styled component for the search bar
export const StyledSearchBar = styled.div<{ $isActive?: boolean; theme: TTheme; $sizeC: TComponentSizes }>`
  display: flex;
  align-items: center;
  border-radius: ${({ $isActive, theme, $sizeC }) =>
    $isActive
      ? `${theme.borderRadius.lg} ${theme.borderRadius.lg} 0px 0px`
      : sizeSettings[$sizeC].borderRadius}; // Set the border radius based on whether the search bar list is active
  z-index: 1;

  height: ${({ $sizeC }) => sizeSettings[$sizeC].height};
  padding: ${({ $sizeC }) => sizeSettings[$sizeC].padding};
  gap: 4px;
`;

export const SizeWrapper = styled.div`
  width: auto;
`;

export const InputWrapper = styled.div<{ $sizeC: TComponentSizes }>`
  width: 100%;

  div {
    padding: 0;
    div {
      input {
        font-size: ${({ $sizeC }) => ($sizeC === 'sm' ? '16px' : '')} !important;
      }
      gap: ${({ $sizeC }) => sizeSettings[$sizeC].gap};
    }
  }
`;

export const IconWrapper = styled.span<{ $sizeC: TComponentSizes }>`
  width: ${({ $sizeC }) => sizeSettings[$sizeC].iconSize};
`;
