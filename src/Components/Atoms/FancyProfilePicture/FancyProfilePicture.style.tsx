import { styled } from 'styled-components';

import { IFancyProfilePicture } from './FancyProfilePicture';
import { TThemeTypes } from '@/Components/Interface/TUiColors';
import { TLayer } from '@/Components/Interface/TLayer';
import { TTheme } from '@/Components/Interface/TTheme';

// Set the border based on the prop
type TBorderRadius = IFancyProfilePicture['rounded'];
const getBorderRadius = (borderRadius: TBorderRadius) => {
  switch (borderRadius) {
    case 'sm':
      return '10%';
    case 'md':
      return '20%';
    case 'lg':
      return '30%';
    case 'complete':
      return '50%';
    default:
      return '';
  }
};

// Set size based on prop
export type TSize = 'sm' | 'md' | 'lg' | 'xxs' | 'xs' | 'xl' | 'xxl';
const sizeConfig: Record<TSize | string, string> = {
  xxs: '24px',
  xs: '32px',
  sm: '48px',
  md: '96px',
  lg: '128px',
  xl: '192px',
  xxl: '256px',
  default: '100px',
};

const getSize = (size: TSize | string) => {
  // Check if the size is a percentage value
  if (typeof size === 'string' && size.endsWith('%')) return size;

  // Return the size from the config or default if not found
  return sizeConfig[size] || sizeConfig['default'];
};

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
