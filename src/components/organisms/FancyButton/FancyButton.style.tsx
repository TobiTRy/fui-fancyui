import { css } from 'styled-components';

import { generateButtonSizeAndPadding } from '@/components/molecules/Button/utils/generateButtonSizeAndPadding';
import { TLeftRightCenterToFlexJustify } from '@/design/designFunctions/leftRightCenterToFlexJustify';
import { TComponentSizesMid } from '@/types/TComponentSizes';
import { sizeSettings } from './sizeSettings';
import { arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';
import { calcCSSValuesWithOffset } from '@/utils/functions/calcCSSValuesWithOffset';

interface IGenerateFancyButton {
  $sizeC: TComponentSizesMid;
  $oneToOne?: boolean;
  $justifyContent?: TLeftRightCenterToFlexJustify;
  $iconAlign?: 'left' | 'right';
  $icon?: boolean;
  $outlined?: boolean;
  $noSize?: boolean;
  $removeBorder?: boolean;
}
export const generateFancyButton = (props: IGenerateFancyButton) => {
  const { $sizeC, $oneToOne, $justifyContent, $iconAlign, $icon, $outlined, $noSize = false, $removeBorder } = props;

  return css`
    display: inline-flex;
    justify-content: ${$justifyContent ?? 'center'};
    ${$oneToOne && generate1To1Button($sizeC)};
    ${!$oneToOne && !$noSize && generateSize($sizeC, $icon, $iconAlign, $outlined, $removeBorder)};
  `;
};

const generate1To1Button = ($sizeC: TComponentSizesMid) => {
  //this makes the button a square (1/1) if there is no $label and a $icon
  const padding = generateButtonSizeAndPadding($sizeC, false);

  return css`
    aspect-ratio: 1/1;
    justify-content: center;
    ${padding}
  `;
};

const generateSize = (
  $sizeC: TComponentSizesMid,
  $icon?: boolean,
  $iconAlign?: IGenerateFancyButton['$iconAlign'],
  outlined?: boolean,
  $removeBorder?: boolean
) => {
  let padding = sizeSettings[$sizeC].padding;

  // if there is an icon, we need to adjust the padding
  if ($icon) {
    switch ($iconAlign) {
      case 'left':
        padding = sizeSettings[$sizeC].paddingIconAlignLeft;
        break;
      case 'right':
        padding = sizeSettings[$sizeC].paddingIconAlignRight;
        break;
      default:
        padding = sizeSettings[$sizeC].padding;
    }
  } else {
    padding = sizeSettings[$sizeC].padding;
  }

  const cssValues = arrayToCssValues(padding, 'spacing');

  // clac offset for outlined buttons
  if (!$removeBorder && outlined && cssValues) {
    const shrinkedPaddingWithBorder = calcCSSValuesWithOffset(cssValues, -2);

    return css`
      padding: ${shrinkedPaddingWithBorder};
    `;
  }

  // return the padding
  return css`
    padding: ${cssValues};
  `;
};
