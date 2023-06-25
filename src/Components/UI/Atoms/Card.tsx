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

//the main design of the card
const StyledCard = styled.div<IStyledCard>`
  width: ${({width}) => width};
  height: ${({height}) => height};
  box-sizing: border-box;
  background-color: ${uiColors.primary.light};
  padding: ${spacingPx.xl};
  border-radius:  ${({rounedEdges, radius}) => edgeCalculation(rounedEdges!, radius)};
`
//the innercard makes it better to align the content with absolute position
const InnerCard = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
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