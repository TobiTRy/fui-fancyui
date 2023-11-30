import styled, { css } from 'styled-components';

import { TTheme } from '@/components/Interface/TTheme';
import themeStore from '@/components/design/theme/themeStore/themeStore';

// Define the type for the spacing position
export type TSpacingPosition = 'left' | 'right' | 'booth';

const getSpacingFromTheme = themeStore.getState().theme.spacing;
const spacings = {
  xs: parseFloat(getSpacingFromTheme.xs),
  sm: parseFloat(getSpacingFromTheme.sm),
  md: parseFloat(getSpacingFromTheme.md),
};

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
interface IXButton {
  $size?: keyof typeof sizes;
  theme: TTheme;
}
export const StyledXButton = styled.button<IXButton>`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: inherit;
  background-color: transparent;
  padding: 0;
  line-height: 1;
  display: flex;
  align-items: center;
  margin-left: ${({ theme }) => parseFloat(theme.spacing.xs) + 2 + 'px'};

  svg {
    width: ${({ $size }) => ($size ? sizes[$size].deleteButtonSize : sizes.md.deleteButtonSize)};
    height: ${({ $size }) => ($size ? sizes[$size].deleteButtonSize : sizes.md.deleteButtonSize)};
  }
`;

// Define the styled component for the wrapper image
export const WrapperImage = styled.div<{ theme: TTheme }>`
  height: 100%;
  aspect-ratio: 1/1;
  line-height: 0;
  margin-right: ${({ theme }) => theme.spacing.xs};
  display: flex;
  align-items: center;

  img {
    width: 95%;
    height: 95%;
    object-fit: cover;
    border-radius: 50%;
  }
`;
