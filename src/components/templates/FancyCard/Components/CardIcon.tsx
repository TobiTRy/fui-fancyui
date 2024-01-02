import React from 'react';

import { FancySVGAtom } from '@/components/atoms/FancySVGAtom';

export default function CardIcon(props: React.ComponentProps<typeof FancySVGAtom>) {
  const { children, ...svgProps } = props;
  return <FancySVGAtom {...svgProps}>{children}</FancySVGAtom>;
}
