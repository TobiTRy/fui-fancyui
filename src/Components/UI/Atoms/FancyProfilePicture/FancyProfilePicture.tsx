import React from 'react';

import { ProfilePicture, TSize } from './FancyProfilePicture.style';

export interface IFancyProfilePicture {
  src: string;
  rounded?: 'sm' | 'md' | 'lg' | 'complete';
  size?: TSize | string;
}
// --------------------------------------------------------------------------- //
//  ProfilePicture component to render with  different sizes and border radius //
// --------------------------------------------------------------------------- //
export default function FancyProfilePicture(props: IFancyProfilePicture) {
  const { src, rounded, size } = {...defaultProps, ...props};

  return <ProfilePicture src={src} alt="Profile" $rounded={rounded} $size={size} />;
}

const defaultProps = {
  size: 'md',
};