import { css } from 'styled-components';

import Card, { TCard } from '@/components/atoms/Card/Card';

import { FancyAlignBox } from '@/components/templates/FancyAlignBox';
import { FancyFlexBox } from '@/components/templates/FancyFlexBox';
import CardDescription from '@/components/atoms/Card/Components/CardDescription';
import CardSpacing from '@/components/atoms/Card/Components/CardSpacing';
import CardSubTitle from '@/components/atoms/Card/Components/CardSubTitle';
import CardTitle from '@/components/atoms/Card/Components/CardTitle';
import CardIcon from '@/components/atoms/Card/Components/CardIcon';
import { FancyImageWrapper } from '@/components/atoms/FancyImageWrapper';

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

FancyCard.Image = FancyImageWrapper;
FancyCard.Icon = CardIcon;
FancyCard.Title = CardTitle;
FancyCard.SubTitle = CardSubTitle;
FancyCard.Descritpion = CardDescription;

FancyCard.FlexBox = FancyFlexBox;
FancyCard.SpacingBox = CardSpacing;
FancyCard.Box = FancyAlignBox;

export default FancyCard;
