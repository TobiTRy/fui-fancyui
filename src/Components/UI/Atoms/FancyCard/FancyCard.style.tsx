import { styled } from "styled-components";

import { StyledCardProps } from './Card.model';
import IStyledPrefixAndOmiter from "../../Interface/IStyledPrefixAndOmiter.model";
import { spacingPx, uiColors } from "../../Design/design";
import edgeCalculation from "../../HelperFunctions/edgeCaluculation";

// the converted $ styling props for the card
type IStyledCard = IStyledPrefixAndOmiter<StyledCardProps>;
//the main design of the card
export const StyledCard = styled.div<IStyledCard>`
  overflow: hidden;
  width: ${({$width}) => $width};
  height: ${({$height}) => $height};
  box-sizing: border-box;
  background-color: ${({$backgroundColor}) => $backgroundColor ? uiColors.primary[$backgroundColor] : uiColors.primary.light};
  padding: ${({$padding}) => $padding ?  spacingPx[$padding] : ''};
  border-radius:  ${({$roundedEdges, $radius}) => edgeCalculation($roundedEdges, $radius)};
`

//the innercard makes it better to align the content with absolute position
export const InnerCard = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
` 