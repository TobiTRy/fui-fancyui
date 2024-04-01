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

  // if padding is a single value
  const cssValue = getThemeOrValueAsCSS(padding, 'spacing');
  return calcBorderMinusBox(parseInt(cssValue), borderSize);
}

const calcBorderMinusBox = (padding: number, borderSize: number) => {
  return padding - borderSize + 'px';
};
