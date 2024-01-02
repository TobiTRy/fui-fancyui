import { IFancyBox } from '@/components/atoms/FancyBox/';
import { StyledCardProps } from '@/components/atoms/FancyCard/Card.model';
import { StyledCard } from './Card.style';

// --------------------------------------------------------------------------- //
// ---------- The card is there to wrapp some content or components ---------- //
// --------------------------------------------------------------------------- //
export type IFancyCard = StyledCardProps & IFancyBox;
export default function FancyCard(props: IFancyCard) {
  const {
    children,
    padding = true,
    roundedEdges,
    shadow,
    layer = 0,
    ...fancyBox
  } = {
    ...defaultProps,
    ...props,
  };

  return (
    <StyledCard $layer={layer} $padding={padding} $roundedEdges={roundedEdges} $shadow={shadow} {...fancyBox}>
      {children}
    </StyledCard>
  );
}

const defaultProps: IFancyCard = {
  shadow: true,
  roundedEdges: ['xl'],
};
