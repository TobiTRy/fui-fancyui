'use client';

import { FancyImageWrapper } from '@/components/atoms/FancyImageWrapper';
import CardDescription from '@/components/molecules/Card/Components/CardDescription';
import CardIcon from '@/components/molecules/Card/Components/CardIcon';
import CardSpacing from '@/components/molecules/Card/Components/CardSpacing';
import CardSubTitle from '@/components/molecules/Card/Components/CardSubTitle';
import CardTitle from '@/components/molecules/Card/Components/CardTitle';
import { FancyAlignBox } from '@/components/templates/FancyAlignBox';
import { FancyFlexBox } from '@/components/templates/FancyFlexBox';
import { StyledCard } from './Card.style';
import { TCardWithFancyBoxAttrs } from './TCard.model';

// --------------------------------------------------------------------------- //
// ---------- The card is there to wrapp some content or components ---------- //
// --------------------------------------------------------------------------- //
function Card(props: TCardWithFancyBoxAttrs) {
  const { children, padding, borderRadius = 'lg', shadow = true, layer = 1, ...fancyBox } = props;

  return (
    <StyledCard $padding={padding} layer={layer} $borderRadius={borderRadius} $shadow={shadow} {...fancyBox}>
      {children}
    </StyledCard>
  );
}

Card.Image = FancyImageWrapper;
Card.Icon = CardIcon;
Card.Title = CardTitle;
Card.SubTitle = CardSubTitle;
Card.Descritpion = CardDescription;

Card.FlexBox = FancyFlexBox;
Card.SpacingBox = CardSpacing;
Card.Box = FancyAlignBox;

// this is needed for storybook to work
export default Card;
