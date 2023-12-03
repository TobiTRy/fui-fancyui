import { styled } from 'styled-components';

import { TThemeTypes } from '@/interface/TUiColors';
import { TLayer } from '@/interface/TLayer';
import { TTheme } from '@/interface/TTheme';
import { TBorderRadius, TSize, getBorderRadius, getSize } from './sizeSettings';

// Styled img component
export const StyledImage = styled.img<{ $rounded: TBorderRadius; $size: TSize | string }>`
  border-radius: ${({ $rounded }) => getBorderRadius($rounded)};
  width: ${({ $size }) => getSize($size)};
  height: ${({ $size }) => getSize($size)};
  object-fit: cover;
  aspect-ratio: 1/1;
`;

// Styled placeholder component for the profile picture
interface IPlaceholderProps {
  $rounded: TBorderRadius;
  $size: TSize | string;
  $color?: string;
  $backgroundColor?: string;
  theme?: TTheme;
  $themeType?: TThemeTypes;
  $layer?: TLayer;
}
export const Placeholder = styled.div<IPlaceholderProps>`
  border-radius: ${({ $rounded }) => getBorderRadius($rounded)};
  width: ${({ $size }) => getSize($size)};
  height: ${({ $size }) => getSize($size)};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $backgroundColor, theme, $layer }) => ($backgroundColor ? $backgroundColor : theme.colors.primary[$layer ?? 2])};
  color: ${({ $color, theme, $layer }) => ($color ? $color : theme.colors.secondary[$layer ?? 1])};
  font-size: 1.5em;
  aspect-ratio: 1/1;
`;
