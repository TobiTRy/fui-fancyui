import { styled, css } from 'styled-components';
import { spacingPx } from '../../Design/designSizes';

// The Paginator Wrapper that wraps the hole components
export const StyledPaginator = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: ${spacingPx.xs};
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
export const IconWrapper = styled.div<{ $align: 'left' | 'right' }>`
  display: flex;
  flex-shrink: 0;
  aspect-ratio: 1/1;

  ${({ $align }) =>
    $align === 'right'
      ? css`
          margin-left: ${parseFloat(spacingPx.xs) - 1 + 'px'};
        `
      : css`
          margin-right: ${parseFloat(spacingPx.xs) - 1 + 'px'};
        `}
`;
