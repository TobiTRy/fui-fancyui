import isColorValid from "./isColorValid";

export default function checkThemeOrColor(color: string | number[]) {
  if(Array.isArray(color) && color.length <= 1) {
    return color[0];
  }
  if(typeof color === 'string') {
    if(isColorValid(color)) {
      return color;
    }
  }
  console.error('color is not valid');
}