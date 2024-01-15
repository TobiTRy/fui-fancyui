import { css } from 'styled-components';

import Card, { TCard } from '@/components/atoms/Card/Card';

import { FancyAlignBox } from '@/components/templates/FancyAlignBox';
import { FancyFlexBox } from '@/components/templates/FancyFlexBox';
import CardDescription from '@/components/templates/FancyCard/Components/CardDescription';
import CardSpacing from '@/components/templates/FancyCard/Components/CardSpacing';
import CardSubTitle from '@/components/templates/FancyCard/Components/CardSubTitle';
import CardTitle from '@/components/templates/FancyCard/Components/CardTitle';
import CardIcon from '@/components/templates/FancyCard/Components/CardIcon';
import CardImage from '@/components/templates/FancyCard/Components/CardImage';

function FancyCard(props: TCard) {
  const { externalStyle, ...cardProps } = props;

  return (
    <Card
      externalStyle={css`
        flex: 1;
        border: none;
        ${externalStyle};
      `}
      {...cardProps}
    />
  );
}

FancyCard.Image = CardImage;
FancyCard.Icon = CardIcon;
FancyCard.Title = CardTitle;
FancyCard.SubTitle = CardSubTitle;
FancyCard.Descritpion = CardDescription;

FancyCard.FlexBox = FancyFlexBox;
FancyCard.SpacingBox = CardSpacing;
FancyCard.Box = FancyAlignBox;

export default FancyCard;
