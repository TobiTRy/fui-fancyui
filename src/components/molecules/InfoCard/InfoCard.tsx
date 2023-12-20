import { ComponentProps } from 'react';

import { TComponentSizes } from '@/interface/TComponentSizes';
import { FancyBox } from '@/components/atoms/FancyBox';
import { generateInfoCardStyle } from './InfoCrad.style';

type TInfoCardProps = ComponentProps<typeof FancyBox> & {
  size?: TComponentSizes;
};
// --------------------------------------------------------------------------- //
// ---------- A simple Infocard that can displayed on the page --------------- //
// --------------------------------------------------------------------------- //
export default function InfoCard(props: TInfoCardProps) {
  const { size, children, ...fancyBoxProps } = props;

  const BoxStyle = generateInfoCardStyle(size || 'md');

  return (
    <FancyBox {...fancyBoxProps} externalStyle={BoxStyle}>
      {children}
    </FancyBox>
  );
}
