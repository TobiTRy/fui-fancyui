import { styled } from 'styled-components';

import { StyledCardProps } from './Card.model';
import { TStyledPrefixAndOmiter } from '@/types/TStyledPrefixAndOmiter';
import { arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';

import { boxShadow } from '@/design/designFunctions/shadows/shadows';
import { TTheme } from '@/types/TTheme';
import { FancyBox, TFancyBox } from '@/components/atoms/FancyBox';

// the converted $ styling props for the card
type IStyledCard = TStyledPrefixAndOmiter<StyledCardProps> & TFancyBox;
//the main design of the card
export const StyledCard = styled(FancyBox)<IStyledCard & { theme: TTheme }>`
  display: inline-block;
  box-sizing: border-box;
  padding: ${({ $padding }) => ($padding ? arrayToCssValues($padding, 'spacing') : '')};
  border-radius: ${({ $borderRadius }) => ($borderRadius ? arrayToCssValues($borderRadius, 'borderRadius') : '')};
  ${({ $shadow }) => $shadow && boxShadow.sm};
`;
