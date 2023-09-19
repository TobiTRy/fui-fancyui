import React from 'react';

import { InnerCard, StyledCard } from './FancyCard.style';
import { StyledCardProps } from './Card.model';

// --------------------------------------------------------------------------- //
// ---------- The card is there to wrapp some content or components ---------- //
// --------------------------------------------------------------------------- //
interface ICard extends StyledCardProps {
  children?: React.ReactNode;
  layer?: number;
}
export default function FancyCard(props: ICard) {
  const { children, height, width, radius, padding, roundedEdges, backgroundColor, layer, shadow } = { ...defaultProps, ...props };

  return (
    <StyledCard
      $height={height}
      $width={width}
      $padding={padding}
      $radius={radius}
      $roundedEdges={roundedEdges}
      $backgroundColor={backgroundColor}
      $layer={layer}
      $shadow={shadow}
    >
      <InnerCard>{children}</InnerCard>
    </StyledCard>
  );
}

const defaultProps: ICard = {
  height: 'auto',
  width: '100%',
  radius: 'xxxl',
  padding: 'xl',
  shadow: true,
  roundedEdges: {
    topRight: true,
    topLeft: true,
    bottomRight: true,
    bottomLeft: true,
  },
};
