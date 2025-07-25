import { css, styled } from 'styled-components';

import { TFancyImageWrapper } from '@/components/atoms/FancyImageWrapper/FancyImageWrapper.model';
import { TTheme } from '@/types/TTheme';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';

import { globalSizes } from '@/design/theme/globalSizes';
import { TComponentSizesExtended } from '@/types/TComponentSizes';
import { createCssFilterString } from '@/design/designFunctions/createCssFilterString';
import { arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';

type TStyledImage = TStyledPrefixAndPicker<
  TFancyImageWrapper,
  'aspectRatio' | 'externalStyle' | 'borderRadius' | 'sizeH' | 'sizeW' | 'objectFit' | 'filter'
>;
// --------------------------------------------------------------------------- //
// ------------------------- Helper Functions -------------------------------- //
// --------------------------------------------------------------------------- //
// Generate the sizes for the image based on the provided sizeC
const generateSize = (sizeC: TComponentSizesExtended | 'fit' | string, direction: 'height' | 'width') => {
  if (sizeC === 'fit') {
    return css`
      ${direction}: 100%;
    `;
  }

  // Check if the sizeC is a theme sizeC
  if (globalSizes[sizeC as TComponentSizesExtended]) {
    return css`
      ${direction + ': ' + globalSizes[sizeC as TComponentSizesExtended].elementSize};
    `;
  }

  // check sizeC is a custom css value
  if (typeof sizeC === 'string') {
    return css`
      ${direction + ': ' + sizeC};
    `;
  }
};

export const ImageWrapper = styled.div<TStyledImage & { theme: TTheme }>`
  ${({ $sizeW }) => $sizeW && generateSize($sizeW, 'width')};
  ${({ $sizeH }) => $sizeH && generateSize($sizeH, 'height')};
  transition: filter 0.3s;
  filter: ${({ $filter }) => $filter && createCssFilterString($filter)};
  aspect-ratio: ${({ $aspectRatio }) => ($aspectRatio ? `${$aspectRatio};` : '')};
  line-height: 0;
  position: relative; // is needed for NextImage to work properly with fill

  img {
    width: 100%;
    height: 100%;
    object-fit: ${({ $objectFit }) => ($objectFit ? $objectFit : 'cover')};
    border-radius: ${({ $borderRadius }) => arrayToCssValues($borderRadius, 'borderRadius')};
  }

  ${({ $externalStyle }) => $externalStyle};
`;
