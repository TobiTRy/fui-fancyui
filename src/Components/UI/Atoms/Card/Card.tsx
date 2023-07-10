import React from 'react'

import { InnerCard, StyledCard } from './Card.style';
import { StyledCardProps } from './Card.model';


// --------------------------------------------------------------------------- //
// ---------- The card is there to wrapp some content or components ---------- //
// --------------------------------------------------------------------------- //
interface ICard extends StyledCardProps {
  children?: React.ReactNode;
}
export default function Card(props: ICard) {
  const { children, height, width, radius, roundedEdges } = {...defaultProps, ...props};

  return (
    <StyledCard $height={height} $width={width} $radius={radius} $roundedEdges={roundedEdges}>
      <InnerCard>
        {children}
      </InnerCard>
    </StyledCard>
  )
}

const defaultProps: ICard = {
  height: 'auto',
  width: '100%',
  radius: 'xxxl',
  roundedEdges: {
    topRight: true,
    topLeft: true,
    bottomRight: true,
    bottomLeft: true,
  },
}