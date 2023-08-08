import React from 'react';

import styled from 'styled-components';

type ProfilePictureProps = {
  borderRadius: string;
  size: string;
};

const ProfilePicture = styled.img<ProfilePictureProps>`
  border-radius: ${(props) => props.borderRadius};
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  object-fit: cover;
  aspect-ratio: 1/1;
`;


type TBorderRadius = IFancyProfilePicture['borderRadius'];
const getBorderRadius = (borderRadius: TBorderRadius) => {
  switch (borderRadius) {
    case 'small':
      return '10%';
    case 'medium':
      return '20%';
    case 'large':
      return '30%';
    case 'complete':
      return '50%';
    default:
      return '10%';
  }
};



  // Set size based on prop
  type TSize = IFancyProfilePicture['size'];
  const getSize = (size: TSize) => {
    switch (size) {
      case 'small':
        return '50px';
      case 'medium':
        return '100px';
      case 'large':
        return '150px';
      case 'extraLarge':
        return '200px';
      default:
        return '100px';
    }
  };



interface IFancyProfilePicture {
  src: string;
  borderRadius?: 'small' | 'medium' | 'large' | 'complete';
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
}

export default function FancyProfilePicture(props: IFancyProfilePicture) {
  const { src, borderRadius, size } = props;
  
  // generate border radius based on prop
  const generatedBorderRadius = getBorderRadius(borderRadius);
  // generate size based on prop
  const generatedSize = getSize(size);

  return <ProfilePicture src={src} alt="Profile" borderRadius={generatedBorderRadius} size={generatedSize} />;
}
