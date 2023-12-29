import { css, styled } from 'styled-components';

import { TFancyImage } from '@/components/atoms/FancyImage/FancyImage.model';
import { TTheme } from '@/interface/TTheme';
import IStyledPrefixAndPicker from '@/interface/IStyledPrefixAndPicker';

import { globalSizes } from '@/design/theme/globalSizes';
import { TComponentSizesExtended } from '@/interface/TComponentSizes';

type TStyledImage = IStyledPrefixAndPicker<
  TFancyImage,
  'darken' | 'aspectRatio' | 'externalStyle' | 'borderRadius' | 'size'
>;
export const StyledImage = styled.img<TStyledImage & { theme: TTheme }>`
  ${({ $size = 'fit' }) => generateSizes($size)};
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
const generateSizes = (size: TComponentSizesExtended | 'fit') => {
  if (size !== 'fit') {
    return css`
      width: ${globalSizes[size].elementSize};
      height: ${globalSizes[size].elementSize};
    `;
  } else {
    return css`
      width: 100%;
      object-fit: cover;
    `;
  }
};
