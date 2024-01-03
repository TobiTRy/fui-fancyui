import { IFancyBox } from '@/components/atoms/FancyBox/';
import { StyledCardProps } from '@/components/atoms/Card/Card.model';
import { StyledCard } from './Card.style';

// --------------------------------------------------------------------------- //
// ---------- The card is there to wrapp some content or components ---------- //
// --------------------------------------------------------------------------- //
export type TCard = StyledCardProps & IFancyBox;
export default function Card(props: TCard) {
  const {
    children,
    padding,
    borderRadius,
    shadow,
    layer = 0,
    ...fancyBox
  } = {
    ...defaultProps,
    ...props,
  };

  return (
    <StyledCard $layer={layer} $padding={padding} $borderRadius={borderRadius} $shadow={shadow} {...fancyBox}>
      {children}
    </StyledCard>
  );
}

const defaultProps: TCard = {
  shadow: true,
  borderRadius: ['lg'],
};
