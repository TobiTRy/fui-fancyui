import { IFancyBox } from '@/components/atoms/FancyBox/';
import { StyledCardProps } from '@/components/atoms/Card/Card.model';
import { StyledCard } from './Card.style';
import { FancyImageWrapper } from '@/components/atoms/FancyImageWrapper';
import CardIcon from '@/components/atoms/Card/Components/CardIcon';
import CardTitle from '@/components/atoms/Card/Components/CardTitle';
import CardSubTitle from '@/components/atoms/Card/Components/CardSubTitle';
import CardDescription from '@/components/atoms/Card/Components/CardDescription';
import { FancyFlexBox } from '@/components/templates/FancyFlexBox';
import CardSpacing from '@/components/atoms/Card/Components/CardSpacing';
import { FancyAlignBox } from '@/components/templates/FancyAlignBox';

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

Card.Image = FancyImageWrapper;
Card.Icon = CardIcon;
Card.Title = CardTitle;
Card.SubTitle = CardSubTitle;
Card.Descritpion = CardDescription;

Card.FlexBox = FancyFlexBox;
Card.SpacingBox = CardSpacing;
Card.Box = FancyAlignBox;
