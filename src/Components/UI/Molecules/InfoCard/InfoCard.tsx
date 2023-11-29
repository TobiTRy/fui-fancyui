import React from 'react';

import FancyBox from '../../../Atoms/FancyBox/FancyBox';
import { generateInfoCardStyle } from './InfoCrad.style';

type TInfoCardProps = React.ComponentProps<typeof FancyBox> & {
  size?: 'sm' | 'md' | 'lg';
};

export default function InfoCard(props: TInfoCardProps) {
  const { size, children, ...fancyBoxProps } = props;

  const BoxStyle = generateInfoCardStyle(size || 'md');

  return (
    <FancyBox {...fancyBoxProps} externalStyle={BoxStyle}>
      {children}
    </FancyBox>
  );
}
