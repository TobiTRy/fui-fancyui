import styled, { css } from 'styled-components';
import { spacingPx } from '../../Design/designSizes';

// Define the type for the spacing position
export type TSpacingPosition = 'left' | 'right' | 'booth';

const spacings = {
  xs: parseFloat(spacingPx.xs),
  sm: parseFloat(spacingPx.sm),
  md: parseFloat(spacingPx.md),
}

export const sizes = {
  sm: {
    height: '24px',
    deleteButtonSize: '14px',
    padding: spacings.xs,
    paddingRight: spacings.xs,
    paddingLeft: spacings.xs,
    icon: '14px',
  },
  md: {
    height: '32px',
    deleteButtonSize: '14px',
    padding: spacings.sm,
    paddingRight: spacings.sm,
    paddingLeft: spacings.sm,
    icon: '18px',
  },
  lg: {
    height: '38px',
    deleteButtonSize: '14px',
    padding: spacings.sm,
    paddingRight: spacings.sm,
    paddingLeft: spacings.md,
    icon: '20px',
  },
};

// Define a function to generate the spacing based on the spacing position
interface IGenerateSpacing {
  spacingPosition?: TSpacingPosition;
  size?: keyof typeof sizes;
}
export const generateSpacing = ({ spacingPosition, size }: IGenerateSpacing) => {
  const pickedSize = size ? size : 'md';

  switch (spacingPosition) {
    case 'left':
      return css`
        padding-left: ${sizes[pickedSize].paddingLeft + 2 + 'px'};
      `;
    case 'right':
      return css`
        padding-right: ${sizes[pickedSize].paddingRight + 2 + 'px'};
      `;
    case 'booth':
      return css`
        padding: 0 ${sizes[pickedSize].padding + 2 + 'px'};
      `;
    default:
      return null;
  }
};



// Define the styled component for the X button
export const StyledXButton = styled.button<{ $size?: keyof typeof sizes }>`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: inherit;
  background-color: transparent;
  padding: 0;
  line-height: 1;
  display: flex;
  align-items: center;
  margin-left: ${parseFloat(spacingPx.xs) + 2 + 'px'};

  svg {
    width: ${({ $size }) => ($size ? sizes[$size].deleteButtonSize : sizes.md.deleteButtonSize)};
    height: ${({ $size }) => ($size ? sizes[$size].deleteButtonSize : sizes.md.deleteButtonSize)};
  }
`;

// Define the styled component for the wrapper image
export const WrapperImage = styled.div`
  height: 100%;
  aspect-ratio: 1/1;
  line-height: 0;
  margin-right: ${spacingPx.xs};
  display: flex;
  align-items: center;

  img {
    width: 95%;
    height: 95%;
    object-fit: cover;
    border-radius: 50%;
  }
`;
