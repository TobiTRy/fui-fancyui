import React from 'react';

import { TComponentSizes } from '@/interface/TComponentSizes';
import { StyledCard } from './FancyMiniContentCard.style';
import { IFancyCard } from '@/components/atoms/FancyCard/FancyCard';
import CardTitle from './Components/CardTitle';

export type TFancyMiniContentCardProps = {
  symbol?: React.ReactNode;
  title?: string;
  description?: string;
  size?: TComponentSizes;
} & IFancyCard;

function FancyMiniContentCard(props: TFancyMiniContentCardProps) {
  const { size, children, ...cardProps } = props;

  return (
    <StyledCard $size={size} {...cardProps}>
      {children}
    </StyledCard>
  );
}

FancyMiniContentCard.Title = CardTitle;

export default FancyMiniContentCard;
