import { css } from 'styled-components';

import { generateButtonSizeAndPadding } from '@/components/molecules/Button/utils/generateButtonSizeAndPadding';
import { TLeftRightCenterToFlexJustify } from '@/design/designFunctions/leftRightCenterToFlexJustify';
import { TComponentSizes } from '@/types/TComponentSizes';
import { sizeSettings } from './sizeSettings';
import { arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';
import { globalElementsizes } from '@/design/theme/globalSizes';

interface IGenerateFancyButton {
  $sizeC: TComponentSizes;
  $oneToOne?: boolean;
  $justifyContent?: TLeftRightCenterToFlexJustify;
  $iconAlign?: 'left' | 'right';
  $icon?: boolean;
}
export const generateFancyButton = (props: IGenerateFancyButton) => {
  const { $sizeC, $oneToOne, $justifyContent, $iconAlign, $icon } = props;

  return css`
    justify-content: ${$justifyContent ?? 'center'};
    ${$oneToOne && generate1To1Button($sizeC)};
    ${!$oneToOne && generateSize($sizeC, $icon, $iconAlign)};
  `;
};

const generate1To1Button = ($sizeC: TComponentSizes) => {
  //this makes the button a square (1/1) if there is no $label and a $icon
  const padding = generateButtonSizeAndPadding($sizeC, false);

  return css`
    aspect-ratio: 1/1;
    justify-content: center;
    ${padding}
  `;
};

const generateSize = ($sizeC: TComponentSizes, $icon?: boolean, $iconAlign?: IGenerateFancyButton['$iconAlign']) => {
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

  return css`
    height: ${globalElementsizes[sizeSettings[$sizeC].height]};
    padding: ${arrayToCssValues(padding, 'spacing')};
  `;
};
