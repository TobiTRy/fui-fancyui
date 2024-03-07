import { css } from 'styled-components';

import { arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';
import { TComponentSizes } from '@/types/TComponentSizes';
import { globalElementsizes } from '@/design/theme/globalSizes';
import { sizeSettings } from '../sizeSettings';

export const generateButtonSizeAndPadding = (sizeC: TComponentSizes, spacingLeftRightx2?: boolean) => {
  return css`
    height: ${globalElementsizes[sizeSettings[sizeC].height]};
    padding: ${arrayToCssValues(
      spacingLeftRightx2 ? sizeSettings[sizeC].padding : sizeSettings[sizeC].padding[0],
      'spacing'
    )};
  `;
};
