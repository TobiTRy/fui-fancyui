import styled from "styled-components";
import { IFancyProfilePicture } from "./FancyProfilePicture";

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
type TSize = IFancyProfilePicture['size'];
const getSize = (size: TSize) => {
  switch (size) {
    case 'xxs':
      return '24px';
    case 'xs':
      return '32px';
    case 'sm':
      return '48px';
    case 'md':
      return '96px';
    case 'lg':
      return '128px';
    case 'xl':
      return '192px';
    case 'xxl':
      return '256px';
    default:
      return '100px';
  }
};

interface ProfilePictureProps {
  $rounded: TBorderRadius;
  $size: TSize;
}

// the main ProfilePicture Component renderd on specific props
export const ProfilePicture = styled.img<ProfilePictureProps>`
  border-radius: ${({$rounded}) => getBorderRadius($rounded)};
  width: ${({$size}) => getSize($size)};
  height: ${({$size}) => getSize($size)};
  object-fit: cover;
  aspect-ratio: 1/1;
`;