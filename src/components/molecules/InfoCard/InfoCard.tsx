import { FancyBox } from '@/components/atoms/FancyBox';
import { generateInfoCardStyle } from './InfoCrad.style';
import { TInfoCardProps } from '@/components/molecules/InfoCard/TInfoCard.model';

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
