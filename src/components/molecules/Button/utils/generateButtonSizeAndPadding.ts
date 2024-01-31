import { css } from 'styled-components';

import { arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';
import { TComponentSizes } from '@/types/TComponentSizes';
import { globalElementsizes } from '@/design/theme/globalSizes';
import { sizeSettings } from '../sizeSettings';

export const generateButtonSizeAndPadding = (size: TComponentSizes, spacingLeftRightx2?: boolean) => {
  return css`
    height: ${globalElementsizes[sizeSettings[size].height]};
    padding: ${arrayToCssValues(spacingLeftRightx2 ? sizeSettings[size].padding : sizeSettings[size].padding[0])};
  `;
};
