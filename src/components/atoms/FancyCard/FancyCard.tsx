import { InnerCard, StyledCard } from './FancyCard.style';
import { IFancyBox } from '@/components/atoms/FancyBox/';
import { StyledCardProps } from '@/components/atoms/FancyCard/Card.model';
import CardDescription from '@/components/templates/FancyMiniContentCard/Components/CardDescription';
import CardImage from '@/components/templates/FancyMiniContentCard/Components/CardImage';
import CardSubTitle from '@/components/templates/FancyMiniContentCard/Components/CardSubTitle';
import CardTitle from '@/components/templates/FancyMiniContentCard/Components/CardTitle';
import { FancyFlexBox } from '@/components/templates/FancyFlexBox';

// --------------------------------------------------------------------------- //
// ---------- The card is there to wrapp some content or components ---------- //
// --------------------------------------------------------------------------- //
export type IFancyCard = StyledCardProps & IFancyBox;
export default function FancyCard(props: IFancyCard) {
  const {
    children,
    size,
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
    <StyledCard
      $size={size}
      $layer={layer}
      $padding={padding}
      $roundedEdges={roundedEdges}
      $shadow={shadow}
      {...fancyBox}
    >
      <InnerCard>{children}</InnerCard>
    </StyledCard>
  );
}

const defaultProps: IFancyCard = {
  shadow: true,
  roundedEdges: ['xl'],
};

FancyCard.Image = CardImage;
FancyCard.Title = CardTitle;
FancyCard.FlexBox = FancyFlexBox;
FancyCard.SubTitle = CardSubTitle;
FancyCard.Descritpion = CardDescription;
