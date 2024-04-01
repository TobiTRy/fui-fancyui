import { css } from 'styled-components';

import { arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';
import { TComponentSizes } from '@/types/TComponentSizes';
import { sizeSettings } from '../sizeSettings';

export const generateButtonSizeAndPadding = (sizeC: TComponentSizes, spacingLeftRightx2?: boolean) => {
  return css`
    padding: ${arrayToCssValues(
      spacingLeftRightx2 ? sizeSettings[sizeC].padding : sizeSettings[sizeC].padding[0],
      'spacing'
    )};
  `;
};
