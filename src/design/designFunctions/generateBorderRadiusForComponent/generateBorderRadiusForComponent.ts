import { css } from 'styled-components';

import { TComponentSizes } from '@/types/TComponentSizes';
import { TThemeArrayOrValueCSS, arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';
import { sizeSettings } from './sizeSettings';

type TBorderRadius = {
  borderRadius?: TThemeArrayOrValueCSS | false;
  sizeC?: TComponentSizes;
};

export const generateBorderRadiusForComponent = (props: TBorderRadius) => {
  const { borderRadius, sizeC } = props;
  if (borderRadius === false) return 0;

  if (borderRadius) {
    return css`
      border-radius: ${arrayToCssValues(borderRadius, 'borderRadius')};
    `;
  }

  if (sizeC) {
    return css`
      border-radius: ${arrayToCssValues(sizeSettings[sizeC].borderRadius, 'borderRadius')};
    `;
  }
};

export const generateBorderRadiusForComponentOnlyValue = (props: TBorderRadius) => {
  const { borderRadius, sizeC } = props;
  if (borderRadius === false) return 0;

  if (borderRadius) {
    return arrayToCssValues(borderRadius, 'borderRadius');
  }

  if (sizeC) {
    return arrayToCssValues(sizeSettings[sizeC].borderRadius, 'borderRadius');
  }
};

export default generateBorderRadiusForComponent;
