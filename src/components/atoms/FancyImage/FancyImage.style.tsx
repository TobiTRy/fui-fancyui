import { css, styled } from 'styled-components';

import { TFancyImage } from '@/components/atoms/FancyImage/FancyImage.model';
import { TTheme } from '@/types/TTheme';
import IStyledPrefixAndPicker from '@/types/IStyledPrefixAndPicker';

import { globalSizes } from '@/design/theme/globalSizes';
import { TComponentSizesExtended } from '@/types/TComponentSizes';

type TStyledImage = IStyledPrefixAndPicker<
  TFancyImage,
  'darken' | 'aspectRatio' | 'externalStyle' | 'borderRadius' | 'sizeH' | 'sizeW' | 'objectFit'
>;
export const StyledImage = styled.img<TStyledImage & { theme: TTheme }>`
  ${({ $sizeW }) => ($sizeW ? generateSize($sizeW, 'width') : '')};
  ${({ $sizeH }) => ($sizeH ? generateSize($sizeH, 'height') : '')};
  object-fit: ${({ $objectFit }) => ($objectFit ? $objectFit : 'cover')};
  transition: filter 0.3s;
  border-radius: ${({ $borderRadius, theme }) => ($borderRadius ? theme.borderRadius[$borderRadius] : '')};
  filter: ${({ $darken }) => ($darken ? `brightness(${$darken === true ? '0.5' : $darken})` : 'none')};
  aspect-ratio: ${({ $aspectRatio }) => ($aspectRatio ? `${$aspectRatio};` : '')};
  ${({ $externalStyle }) => $externalStyle};
`;

// --------------------------------------------------------------------------- //
// ------------------------- Helper Functions -------------------------------- //
// --------------------------------------------------------------------------- //
// Generate the sizes for the image based on the provided size

const generateSize = (size: TComponentSizesExtended | 'fit', direction: 'height' | 'width') => {
  if (size === 'fit') {
    return css`
      ${direction}: 100%;
    `;
  }

  return css`
    ${direction + ': ' + globalSizes[size].elementSize};
  `;
};
