import React from 'react';

import { FancyFlexBox } from '@/components/templates/FancyFlexBox';
import { Typography } from '@/components/atoms/Typography';
import { FancySVGAtom } from '@/components/atoms/FancySVGAtom';
import { TComponentSizes } from '@/interface/TComponentSizes';
import { StyledCard } from './FancyMiniContentCard.style';

export type TFancyMiniContentCardProps = {
  symbol?: React.ReactNode;
  title: string;
  description?: string;
  size?: TComponentSizes;
};

export default function FancyMiniContentCard(props: TFancyMiniContentCardProps) {
  const { size, title, description } = props;
  return (
    <StyledCard $size={size}>
      <FancyFlexBox flexDirection="column" flexAlign="center" flexJustify="center" fitBox>
        <FancySVGAtom size="xl">{props.symbol}</FancySVGAtom>

        <Typography type="h4">{title}</Typography>
        <Typography type="content">{description}</Typography>
      </FancyFlexBox>
    </StyledCard>
  );
}
