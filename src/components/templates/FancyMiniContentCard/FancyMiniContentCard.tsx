import { css } from 'styled-components';

import Card, { TCard } from '@/components/atoms/Card/Card';

import { FancyAlignBox } from '@/components/templates/FancyAlignBox';
import { FancyFlexBox } from '@/components/templates/FancyFlexBox';
import CardDescription from '@/components/templates/FancyMiniContentCard/Components/CardDescription';
import CardSpacing from '@/components/templates/FancyMiniContentCard/Components/CardSpacing';
import CardSubTitle from '@/components/templates/FancyMiniContentCard/Components/CardSubTitle';
import CardTitle from '@/components/templates/FancyMiniContentCard/Components/CardTitle';
import { generateFancyMiniContentCardStyle } from '@/components/templates/FancyMiniContentCard/FancyMiniContentCard.style';

import CardImage from '@/components/templates/FancyMiniContentCard/Components/CardImage';

function FancyContentCard(props: TCard) {
  const { externalStyle, ...cardProps } = props;

  const generateCardStyle = generateFancyMiniContentCardStyle();

  return (
    <Card
      externalStyle={css`
        ${generateCardStyle};
        ${externalStyle};
      `}
      {...cardProps}
    />
  );
}

FancyContentCard.Image = CardImage;
FancyContentCard.Title = CardTitle;
FancyContentCard.SubTitle = CardSubTitle;
FancyContentCard.Descritpion = CardDescription;

FancyContentCard.FlexBox = FancyFlexBox;
FancyContentCard.SpacingBox = CardSpacing;
FancyContentCard.Box = FancyAlignBox;

export default FancyContentCard;
