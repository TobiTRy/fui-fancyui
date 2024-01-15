import { css, styled } from 'styled-components';

import { TFancyImageWrapper } from '@/components/atoms/FancyImageWrapper/FancyImageWrapper.model';
import { TTheme } from '@/types/TTheme';
import IStyledPrefixAndPicker from '@/types/IStyledPrefixAndPicker';

import { globalSizes } from '@/design/theme/globalSizes';
import { TComponentSizesExtended } from '@/types/TComponentSizes';
import { createCssFilterString } from '@/design/designFunctions/createCssFilterString';
import { checkThemeValue } from '@/design/designFunctions/checkThemeValue';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';

type TStyledImage = IStyledPrefixAndPicker<
  TFancyImageWrapper,
  'darken' | 'aspectRatio' | 'externalStyle' | 'borderRadius' | 'sizeH' | 'sizeW' | 'objectFit' | 'filter'
>;
// --------------------------------------------------------------------------- //
// ------------------------- Helper Functions -------------------------------- //
// --------------------------------------------------------------------------- //
// Generate the sizes for the image based on the provided size
const generateSize = (size: TComponentSizesExtended | 'fit' | string, direction: 'height' | 'width') => {
  if (size === 'fit') {
    return css`
      ${direction}: 100%;
    `;
  }

  // Check if the size is a theme size
  if (globalSizes[size as TComponentSizesExtended]) {
    return css`
      ${direction + ': ' + globalSizes[size as TComponentSizesExtended].elementSize};
    `;
  }

  // check size is a custom css value
  if (typeof size === 'string') {
    return css`
      ${direction + ': ' + size};
    `;
  }
};

export const ImageWrapper = styled.div<TStyledImage & { theme: TTheme }>`
  ${({ $sizeW }) => $sizeW && generateSize($sizeW, 'width')};
  ${({ $sizeH }) => $sizeH && generateSize($sizeH, 'height')};
  transition: filter 0.3s;
  filter: ${({ $filter }) => $filter && createCssFilterString($filter)};
  aspect-ratio: ${({ $aspectRatio }) => ($aspectRatio ? `${$aspectRatio};` : '')};

  img {
    width: 100%;
    height: 100%;
    object-fit: ${({ $objectFit }) => ($objectFit ? $objectFit : 'cover')};
    border-radius: ${({ $borderRadius, theme }) =>
      checkThemeValue($borderRadius) ? theme.borderRadius[$borderRadius as TBorderRadiusSizes] : $borderRadius};
  }

  ${({ $externalStyle }) => $externalStyle};
`;
