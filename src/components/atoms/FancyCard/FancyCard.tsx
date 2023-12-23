import { InnerCard, StyledCard } from './FancyCard.style';
import { IFancyBox } from '@/components/atoms/FancyBox/';
import { StyledCardProps } from '@/components/atoms/FancyCard/Card.model';

// --------------------------------------------------------------------------- //
// ---------- The card is there to wrapp some content or components ---------- //
// --------------------------------------------------------------------------- //
type ICard = StyledCardProps & IFancyBox;
export default function FancyCard(props: ICard) {
  const {
    children,
    size,
    padding = true,
    roundedEdges,
    shadow,
    ...fancyBox
  } = {
    ...defaultProps,
    ...props,
  };

  return (
    <StyledCard $size={size} $padding={padding} $roundedEdges={roundedEdges} $shadow={shadow} {...fancyBox}>
      <InnerCard>{children}</InnerCard>
    </StyledCard>
  );
}

const defaultProps: ICard = {
  padding: true,
  shadow: true,
  roundedEdges: ['xl'],
};
