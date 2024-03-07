import { css } from 'styled-components';

import { TComponentSizes } from '@/types/TComponentSizes';
import { TTheme } from '@/types/TTheme';
import { arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';
import { sizesSettings } from './sizeSettings';

export const generateInfoCardStyle = (sizeC: TComponentSizes) => {
  return css<{ theme?: TTheme }>`
    width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius[sizesSettings[sizeC].borderRadius]};
    padding: ${arrayToCssValues(sizesSettings[sizeC].padding, 'spacing')};
  `;
};
