import React from 'react'

import { IBorderRadiusNames } from '../../Design/design'
import { IRoundedEdges } from '../../HelperFunctions/edgeCaluculation';
import { InnerCard, StyledCard } from './Card.style';

type IScaling = '100%' | 'auto';

// the raw styling props for the card
export interface StyledCardProps {
  height?: IScaling;
  width?: IScaling;
  radius?: IBorderRadiusNames;
  rounedEdges?: IRoundedEdges;
}
// --------------------------------------------------------------------------- //
// ---------- The card is there to wrapp some content or components ---------- //
// --------------------------------------------------------------------------- //
interface ICard extends StyledCardProps {
  children?: React.ReactNode;
}
export default function Card(props: ICard) {
  const { children, height, width, radius, rounedEdges } = props;

  return (
    <StyledCard $height={height} $width={width} $radius={radius} $rounedEdges={rounedEdges}>
      <InnerCard>
        {children}
      </InnerCard>
    </StyledCard>
  )
}

Card.defaultProps = {
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