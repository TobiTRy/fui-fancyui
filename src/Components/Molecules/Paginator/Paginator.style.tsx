import { styled, css } from 'styled-components';

import { TTheme } from '@/Components/Interface/TTheme';

// The Paginator Wrapper that wraps the hole components
export const StyledPaginator = styled.div<{ theme: TTheme }>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  margin: 0 12px;
`;

// The Number Wrapper that wraps the buttons for the page numbers
export const NumberList = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

// A Icon Wraper that press thes spacing more to the outside (Look more centerd)
interface IIconWrapper {
  $align: 'left' | 'right';
  theme: TTheme;
}

export const IconWrapper = styled.div<IIconWrapper>`
  display: flex;
  flex-shrink: 0;
  aspect-ratio: 1/1;

  ${({ $align, theme }) =>
    $align === 'right'
      ? css`
          margin-left: ${parseFloat(theme.spacing.xs) - 1 + 'px'};
        `
      : css`
          margin-right: ${parseFloat(theme.spacing.xs) - 1 + 'px'};
        `}
`;
