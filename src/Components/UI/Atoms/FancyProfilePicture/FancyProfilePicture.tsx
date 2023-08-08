import React from 'react';

import { ProfilePicture } from './FancyProfilePicture.style';

export interface IFancyProfilePicture {
  src: string;
  rounded?: 'sm' | 'md' | 'lg' | 'complete';
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}
// --------------------------------------------------------------------------- //
//  ProfilePicture component to render with  different sizes and border radius //
// --------------------------------------------------------------------------- //
export default function FancyProfilePicture(props: IFancyProfilePicture) {
  const { src, rounded, size } = props;

  return <ProfilePicture src={src} alt="Profile" $rounded={rounded} $size={size} />;
}
