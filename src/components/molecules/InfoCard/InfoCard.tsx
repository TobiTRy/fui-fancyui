import { FancyBox } from '@/components/atoms/FancyBox';
import { generateInfoCardStyle } from './InfoCrad.style';
import { TInfoCardProps } from '@/components/molecules/InfoCard/TInfoCard.model';
import { css } from 'styled-components';

// --------------------------------------------------------------------------- //
// ---------- A simple Infocard that can displayed on the page --------------- //
// --------------------------------------------------------------------------- //
export default function InfoCard(props: TInfoCardProps) {
  const { sizeC, children, externalStyle, ...fancyBoxProps } = props;

  const BoxStyle = generateInfoCardStyle(sizeC || 'md');

  return (
    <FancyBox
      {...fancyBoxProps}
      externalStyle={css`
        ${BoxStyle}
        ${externalStyle}
      `}
    >
      {children}
    </FancyBox>
  );
}
