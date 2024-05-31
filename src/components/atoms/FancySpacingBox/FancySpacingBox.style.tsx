import { styled } from 'styled-components';

import { TFancySpacingBox } from '@/components/atoms/FancySpacingBox/TFancySpacingBox.model';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';
import arrayToCssValues from '@/design/designFunctions/arrayToCssValues/arrayToCssValues';

export const StyledSpacingsBox = styled.div<TStyledPrefixAndPicker<TFancySpacingBox>>`
  display: block;
  padding: ${({ $padding }) => $padding && arrayToCssValues($padding, 'spacing')};
  margin: ${({ $margin }) => $margin && arrayToCssValues($margin, 'spacing')};
  box-sizing: border-box;
  width: 100%;
  ${({ $externalStyle }) => $externalStyle};
`;
