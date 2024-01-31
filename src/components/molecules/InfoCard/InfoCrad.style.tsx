import { css } from 'styled-components';

import { TComponentSizes } from '@/types/TComponentSizes';
import { TTheme } from '@/types/TTheme';
import { arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';
import { sizesSettings } from './sizeSettings';

export const generateInfoCardStyle = (size: TComponentSizes) => {
  return css<{ theme?: TTheme }>`
    width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius[sizesSettings[size].borderRadius]};
    padding: ${arrayToCssValues(sizesSettings[size].padding)};
  `;
};
