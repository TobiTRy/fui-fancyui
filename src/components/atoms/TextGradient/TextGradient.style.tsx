import styled from 'styled-components';

import { TTextGradientProps } from './TTextGradient.model';
import { generateGradient } from './utils/generateGradient';
import { TStyledPrefixAndOmiter } from '@/types/TStyledPrefixAndOmiter';

type TGradientText = TStyledPrefixAndOmiter<TTextGradientProps, 'children'>;
export const GradientText = styled.span<TGradientText>`
  background: ${({ $degree, $colors, $orientation, $position }) =>
    generateGradient({ degree: $degree, colors: $colors, orientation: $orientation, position: $position })};
  background-clip: text;
  width: fit-content;
  height: fit-content;
  -webkit-background-clip: text;
  color: transparent;
  display: inline-block;
`;
