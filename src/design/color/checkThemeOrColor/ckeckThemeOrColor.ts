import { TthemeColorGroup } from '../../theme/designColor';
import isColorValid from '../isColorValid/isColorValid';

//this check if a incomming color is a theme or a color and returns the color
function isTthemeColorGroup(color: string | TthemeColorGroup): color is TthemeColorGroup {
  return typeof color === 'object' && !Array.isArray(color);
}

//this check if a incomming color is a theme or a color and returns the color
export default function checkThemeOrColor(color?: string | TthemeColorGroup): string {
  if (!color) return '';

  //if profied color is a color is a custom color
  if (typeof color === 'string') {
    if (isColorValid(color)) {
      return color;
    }
  }
  //if color is a theme color
  if (isTthemeColorGroup(color)) {
    //check if themecolor is valid
    if (isColorValid(color['0'])) {
      return color[0];
    }
    console.error('themecolor is not valid');
  }

  console.error('color is not valid');
  return '';
}
