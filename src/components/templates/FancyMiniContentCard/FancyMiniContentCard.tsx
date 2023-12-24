import React from 'react';

import { FancyFlexBox } from '@/components/templates/FancyFlexBox';
import { Typography } from '@/components/atoms/Typography';
import { FancySVGAtom } from '@/components/atoms/FancySVGAtom';
import { TComponentSizes } from '@/interface/TComponentSizes';
import { StyledCard } from './FancyMiniContentCard.style';
import { IFancyCard } from '@/components/atoms/FancyCard/FancyCard';

export type TFancyMiniContentCardProps = {
  symbol?: React.ReactNode;
  title: string;
  description?: string;
  size?: TComponentSizes;
} & IFancyCard;

export default function FancyMiniContentCard(props: TFancyMiniContentCardProps) {
  const { size, title, description, ...cardProps } = props;
  return (
    <StyledCard $size={size} {...cardProps}>
      <FancyFlexBox flexDirection="column" flexAlign="center" flexJustify="center" fitBox>
        <FancySVGAtom size="full">{props.symbol}</FancySVGAtom>
        <div>
          <Typography type="h4">{title}</Typography>
          <Typography type="content">{description}</Typography>
        </div>
      </FancyFlexBox>
    </StyledCard>
  );
}
