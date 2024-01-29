import { css } from 'styled-components';

import { generateButtonSizeAndPadding } from '@/components/molecules/Button/utils/generateButtonSizeAndPadding';
import { TLeftRightCenterToFlexJustify } from '@/design/designFunctions/leftRightCenterToFlexJustify';
import { TComponentSizes } from '@/types/TComponentSizes';

const generate1To1Button = ($size: 'sm' | 'md' | 'lg') => {
  //this makes the button a square (1/1) if there is no $label and a $icon
  const padding = generateButtonSizeAndPadding($size, false);

  return css`
    aspect-ratio: 1/1;
    justify-content: center;
    ${padding}
  `;
};

interface IGenerateFancyButton {
  $size: TComponentSizes;
  $oneToOne?: boolean;
  $justifyContent?: TLeftRightCenterToFlexJustify;
}

export const generateFancyButton = (props: IGenerateFancyButton) => {
  const { $size, $oneToOne, $justifyContent } = props;

  return css`
    justify-content: ${$justifyContent ?? 'center'};
    ${$oneToOne && generate1To1Button($size)};
  `;
};
