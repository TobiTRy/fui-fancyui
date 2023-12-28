import React from 'react';
import { css } from 'styled-components';

import { IFancyCard } from '@/components/atoms/FancyCard/FancyCard';
import { TComponentSizes } from '@/interface/TComponentSizes';

import { FancyBox } from '@/components/atoms/FancyBox';
import { FancyFlexBox } from '@/components/templates/FancyFlexBox';
import { generateFancyMiniContentCardStyle } from '@/components/templates/FancyMiniContentCard/FancyMiniContentCard.style';

import CardImage from '@/components/templates/FancyMiniContentCard/Components/CardImage';
import CardTitle from '@/components/templates/FancyMiniContentCard/Components/CardTitle';
import CardSubTitle from '@/components/templates/FancyMiniContentCard/Components/CardSubTitle';
import CardSpacing from '@/components/templates/FancyMiniContentCard/Components/CardSpacing';
import CardDescription from '@/components/templates/FancyMiniContentCard/Components/CardDescription';

export type TFancyMiniContentCardProps = {
  symbol?: React.ReactNode;
  title?: string;
  subTitle?: string;
  description?: string;
  size?: TComponentSizes;
  src?: string;
} & IFancyCard;

function FancyContentCard(props: TFancyMiniContentCardProps) {
  const { size, externalStyle, children, ...cardProps } = props;

  const generateCardStyle = generateFancyMiniContentCardStyle({ $size: size });

  return (
    <FancyBox
      externalStyle={css`
        ${generateCardStyle};
        ${externalStyle};
      `}
      {...cardProps}
    >
      {children}
    </FancyBox>
  );
}

FancyContentCard.Image = CardImage;
FancyContentCard.Title = CardTitle;
FancyContentCard.FlexBox = FancyFlexBox;
FancyContentCard.SubTitle = CardSubTitle;
FancyContentCard.Descritpion = CardDescription;
FancyContentCard.SpacingCard = CardSpacing;

export default FancyContentCard;
