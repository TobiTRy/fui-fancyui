import React from 'react'
import styled from 'styled-components'

import { uiColors, spacingPx,  IBorderRadiusNames } from '../Design/design'
import edgeCalculation, { IRoundedEdges } from '../HelperFunctions/edgeCaluculation';

type IScaling = '100%' | 'auto';
interface IStyledCard {
  height?: IScaling;
  width?: IScaling;
  radius?: IBorderRadiusNames;
  rounedEdges?: IRoundedEdges;
}

const StyledCard = styled.div<IStyledCard>`
  width: ${({width}) => width};
  height: ${({height}) => height};
  box-sizing: border-box;
  background-color: ${uiColors.primary.light};
  padding: ${spacingPx.xl};
  border-radius:  ${({rounedEdges, radius}) => edgeCalculation(rounedEdges!, radius)};
`


// --------------------------------------------------------------------------- //
// ---------- The card is there to wrapp some content or components ---------- //
// --------------------------------------------------------------------------- //
interface ICard extends IStyledCard {
  children?: React.ReactNode;
}
export default function Card(props: ICard) {
  const { children, height, width, radius, rounedEdges } = props;

  return (
    <StyledCard height={height} width={width} radius={radius} rounedEdges={rounedEdges}>
      {children}
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