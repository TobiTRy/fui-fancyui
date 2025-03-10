import { styled } from 'styled-components';

import { TFancySpacingBox } from '@/components/atoms/FancySpacingBox/TFancySpacingBox.model';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';
import arrayToCssValues from '@/design/designFunctions/arrayToCssValues/arrayToCssValues';
import { globalElementSizesWithFit } from '@/design/theme/globalSizes';

export const StyledSpacingsBox = styled.div<TStyledPrefixAndPicker<TFancySpacingBox>>`
  display: block;
  padding: ${({ $padding }) => $padding && arrayToCssValues($padding, 'spacing')};
  margin: ${({ $margin }) => $margin && arrayToCssValues($margin, 'spacing')};
  width: ${({ $width = 'fit' }) => globalElementSizesWithFit[$width]};
  height: ${({ $height }) => $height && globalElementSizesWithFit[$height]};
  box-sizing: border-box;
  ${({ $externalStyle }) => $externalStyle};
`;
