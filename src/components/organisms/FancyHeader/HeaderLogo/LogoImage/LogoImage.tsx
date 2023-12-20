import React from 'react';
import { FancyImage } from '@/components/atoms/FancyImage';

type ILogoImage = React.ComponentProps<typeof FancyImage>;

export default function LogoImage(props: ILogoImage) {
  return <FancyImage {...props} externalStyle={{ height: '100%' }} />;
}
