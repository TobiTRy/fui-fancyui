import { styled } from 'styled-components';
import { TTheme } from '@/types/TTheme';
import { TComponentSizes } from '@/types/TComponentSizes';

import { sizeSettings } from './sizeSettings';
import { TUiColorsMain } from '@/types/TUiColorsMain';
import { TLayer } from '@/types/TLayer';

type TStyledInput = {
  theme: TTheme;
  $sizeC: TComponentSizes;
  $themeType?: TUiColorsMain;
  $layer?: TLayer;
};

export const StyledInput = styled.div<TStyledInput>`
  input {
    ${({ theme, $sizeC }) => theme.fontSizes[sizeSettings[$sizeC].fontSize]};
    color: ${({ theme, $themeType = 'primary', $layer }) => theme.colors[$themeType][$layer || 0]};
    width: 4.1ch;
  }
`;
