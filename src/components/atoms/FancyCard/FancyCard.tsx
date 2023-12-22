import { InnerCard, StyledCard } from './FancyCard.style';
import { IFancyBox } from '@/components/atoms/FancyBox/';
import { StyledCardProps } from '@/components/atoms/FancyCard/Card.model';

// --------------------------------------------------------------------------- //
// ---------- The card is there to wrapp some content or components ---------- //
// --------------------------------------------------------------------------- //
type ICard = StyledCardProps & IFancyBox;
export default function FancyCard(props: ICard) {
  const { children, height, width, radius, padding, roundedEdges, shadow, ...fancyBox } = {
    ...defaultProps,
    ...props,
  };

  return (
    <StyledCard
      $height={height}
      $width={width}
      $padding={padding}
      $radius={radius}
      $roundedEdges={roundedEdges}
      $shadow={shadow}
      {...fancyBox}
    >
      <InnerCard>{children}</InnerCard>
    </StyledCard>
  );
}

const defaultProps: ICard = {
  height: 'auto',
  width: '100%',
  padding: 'xl',
  shadow: true,
  roundedEdges: ['xl'],
};
