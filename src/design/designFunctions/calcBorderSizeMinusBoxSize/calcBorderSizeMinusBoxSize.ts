import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';
import { getThemeOrValueAsCSS } from '@/design/designFunctions/getThemeOrValueAsCss';

export default function calcBorderSizeMinusBoxSize(padding?: TThemeArrayOrValueCSS, borderSize?: number) {
  if (padding === undefined || borderSize === undefined) {
    return '';
  }
  // if padding is a array
  if (Array.isArray(padding)) {
    const cssValues = [''];

    padding.forEach((value) => {
      const cssValue = getThemeOrValueAsCSS(value, 'spacing');
      cssValues.push(calcBorderMinusBox(parseInt(cssValue), borderSize));
    });

    return cssValues.join(' ');
  }

  if (typeof padding === 'object') {
    const { t = 0, r = 0, b = 0, l = 0 } = padding;
    const cssValues = [t, r, b, l].map((value) => {
      const cssValue = getThemeOrValueAsCSS(value, 'spacing');
      return calcBorderMinusBox(parseInt(cssValue), borderSize);
    });

    return cssValues.join(' ');
  }
}

const calcBorderMinusBox = (padding: number, borderSize: number) => {
  return padding - borderSize + 'px';
};
