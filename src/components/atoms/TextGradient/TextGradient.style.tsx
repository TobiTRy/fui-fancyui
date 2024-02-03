import styled from 'styled-components';

import { TTextGradientProps } from './TextGradient.model';
import { generateGradient } from './utils/generateGradient';
import IStyledPrefixAndOmitter from '@/types/IStyledPrefixAndOmiter';

type TGradientText = IStyledPrefixAndOmitter<TTextGradientProps, 'children'>;
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
