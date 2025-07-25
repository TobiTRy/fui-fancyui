import { css } from 'styled-components';

import { arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';
import { TComponentSizes } from '@/types/TComponentSizes';
import { sizeSettings } from '../sizeSettings';
import { calcCSSValuesWithOffset } from '@/utils/functions/calcCSSValuesWithOffset';

export const generateButtonSizeAndPadding = (
  sizeC: TComponentSizes,
  spacingLeftRightx2?: boolean,
  outlined?: boolean
) => {
  // if the button is outlined, we need to shrink the padding by 2px
  if (outlined) {
    const generatedPadding = arrayToCssValues(
      spacingLeftRightx2 ? sizeSettings[sizeC].padding : sizeSettings[sizeC].padding[0],
      'spacing'
    );

    if (generatedPadding) {
      const shrinkedPaddingWithBorder = calcCSSValuesWithOffset(generatedPadding, -2);
      return css`
        padding: ${shrinkedPaddingWithBorder};
      `;
    }
  }

  return css`
    padding: ${arrayToCssValues(
      spacingLeftRightx2 ? sizeSettings[sizeC].padding : sizeSettings[sizeC].padding[0],
      'spacing'
    )};
  `;
};
