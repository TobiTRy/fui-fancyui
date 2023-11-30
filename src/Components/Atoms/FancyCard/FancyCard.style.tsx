import { styled } from 'styled-components';

import { StyledCardProps } from './Card.model';
import IStyledPrefixAndOmiter from '../../../interface/IStyledPrefixAndOmiter.model';
import { spacingPx } from '../../../design/theme/designSizes';
import edgeCalculation from '../../../design/designFunctions/edgeCaluculation';

import { boxShadow } from '../../../design/designFunctions/shadows/shadows';
import getColorsForComponent from '../../../design/color/colorCalculatorForComponent/colorCalculatorForComponet';
import { TTheme } from '@/interface/TTheme';

// the converted $ styling props for the card
type IStyledCard = IStyledPrefixAndOmiter<StyledCardProps>;
//the main design of the card
export const StyledCard = styled.div<IStyledCard & { theme: TTheme }>`
  ${({ theme, $themeType = 'primary', $layer, $textLayer }) => getColorsForComponent({ theme, $themeType, $layer, $textLayer })}
  overflow: hidden;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  box-sizing: border-box;
  padding: ${({ $padding }) => ($padding ? spacingPx[$padding] : '')};
  border-radius: ${({ $roundedEdges }) => edgeCalculation($roundedEdges)};
  ${({ $shadow }) => $shadow && boxShadow.sm};
`;

//the innercard makes it better to align the content with absolute position
export const InnerCard = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
`;
