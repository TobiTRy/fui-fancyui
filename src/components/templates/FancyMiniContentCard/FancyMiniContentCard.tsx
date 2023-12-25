import React from 'react';

import { TComponentSizes } from '@/interface/TComponentSizes';
import FancyCard, { IFancyCard } from '@/components/atoms/FancyCard/FancyCard';




export type TFancyMiniContentCardProps = {
  symbol?: React.ReactNode;
  title?: string;
  subTitle?: string;
  description?: string;
  size?: TComponentSizes;
} & IFancyCard;

function FancyMiniContentCard(props: TFancyMiniContentCardProps) {
  const { size, padding=['xl', 'lg'], ...cardProps } = props;

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
