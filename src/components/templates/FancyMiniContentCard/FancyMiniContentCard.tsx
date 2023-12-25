import React from 'react';

import { TComponentSizes } from '@/interface/TComponentSizes';
import { StyledCard } from './FancyMiniContentCard.style';
import FancyCard, { IFancyCard } from '@/components/atoms/FancyCard/FancyCard';

import CardSubTitle from '@/components/atoms/FancyCard/Components/CardSubTitle';
import CardTitle from '@/components/atoms/FancyCard/Components/CardTitle';
import CardDescription from '@/components/atoms/FancyCard/Components/CardDescription';
import { FancyFlexBox } from '@/components/templates/FancyFlexBox';


export type TFancyMiniContentCardProps = {
  symbol?: React.ReactNode;
  title?: string;
  subTitle?: string;
  description?: string;
  size?: TComponentSizes;
} & IFancyCard;

function FancyMiniContentCard(props: TFancyMiniContentCardProps) {
  const { size, children, padding=['xl', 'lg'], ...cardProps } = props;

  return (
    <FancyCard size={size} padding={padding} {...cardProps}>
      <FancyCard.FlexBox flexDirection='column'>
        <FancyCard.Title>{props.title}</FancyCard.Title>
        <FancyCard.SubTitle>{props.subTitle}</FancyCard.SubTitle>
        <FancyCard.Descritpion>{props.description}</FancyCard.Descritpion>
      </FancyCard.FlexBox>
    </FancyCard>
  );
}



export default FancyMiniContentCard;
