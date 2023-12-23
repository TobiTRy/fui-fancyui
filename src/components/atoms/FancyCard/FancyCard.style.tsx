import { styled } from 'styled-components';

import { StyledCardProps } from './Card.model';
import IStyledPrefixAndOmiter from '@/interface/IStyledPrefixAndOmiter';
import { edgeCalculation } from '@/design/designFunctions/edgeCalculation';

import { boxShadow } from '@/design/designFunctions/shadows/shadows';
import { TTheme } from '@/interface/TTheme';
import { FancyBox } from '@/components/atoms/FancyBox';
import { sizeSettings } from './sizeSettings';

// the converted $ styling props for the card
type IStyledCard = IStyledPrefixAndOmiter<StyledCardProps>;
//the main design of the card
export const StyledCard = styled(FancyBox)<IStyledCard & { theme: TTheme }>`
  display: inline-block;
  overflow: hidden;
  box-sizing: border-box;
  padding: ${({ $padding, $size = 'md', theme }) => ($padding ? theme.spacing[sizeSettings[$size].padding] : '')};
  border-radius: ${({ $roundedEdges }) => ($roundedEdges ? edgeCalculation($roundedEdges) : '')};
  ${({ $shadow }) => $shadow && boxShadow.sm};
`;
