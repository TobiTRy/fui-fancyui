import styled from 'styled-components';

import { TTheme } from '@/interface/TTheme';
import { sizes } from '@/components/organisms/FancyChip/sizeSettings';

// Define the type for the spacing position
export type TSpacingPosition = 'left' | 'right' | 'booth';

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
