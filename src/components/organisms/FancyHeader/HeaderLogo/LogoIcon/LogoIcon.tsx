import React from 'react';

import { FancySVGAtom } from '@/components/atoms/FancySVGAtom';

type ILogoIcon = React.ComponentProps<typeof FancySVGAtom>;
export default function LogoIcon(props: ILogoIcon) {
  const { size = 'full', ...restProps } = props;

  return <FancySVGAtom externalStyle={{ height: '100%' }} size={size} {...restProps} />;
}
