import { styled } from 'styled-components';
import { IFancyProfilePicture } from './FancyProfilePicture';

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
export type TSize = "sm" | "md" | "lg" | "xxs" | "xs" | "xl" | "xxl";
const sizeConfig: Record<TSize | string, string> = {
  'xxs': '24px',
  'xs': '32px',
  'sm': '48px',
  'md': '96px',
  'lg': '128px',
  'xl': '192px',
  'xxl': '256px',
  'default': '100px'
};


const getSize = (size: TSize | string) => {
  // Check if the size is a percentage value
  if (typeof size === 'string' && size.endsWith('%')) {
    return size;
  }

  // Return the size from the config or default if not found
  return sizeConfig[size] || sizeConfig['default'];
};


interface ProfilePictureProps {
  $rounded: TBorderRadius;
  $size: TSize | string;
}

// the main ProfilePicture Component renderd on specific props
export const ProfilePicture = styled.img<ProfilePictureProps>`
  border-radius: ${({ $rounded }) => getBorderRadius($rounded)};
  width: ${({ $size }) => getSize($size)};
  height: ${({ $size }) => getSize($size)};
  object-fit: cover;
  aspect-ratio: 1/1;
`;
