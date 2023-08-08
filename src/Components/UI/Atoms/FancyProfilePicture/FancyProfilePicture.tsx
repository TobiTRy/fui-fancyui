import React from 'react';

import { ProfilePicture } from './FancyProfilePicture.style';

export interface IFancyProfilePicture {
  src: string;
  rounded?: 'sm' | 'md' | 'lg' | 'complete';
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}
export default function FancyProfilePicture(props: IFancyProfilePicture) {
  const { src, rounded, size } = props;

  return <ProfilePicture src={src} alt="Profile" $rounded={rounded} $size={size} />;
}
