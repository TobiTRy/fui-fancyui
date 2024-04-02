import { TThemeObject } from './TgenerateThemeToCssVars.model';

// this function generates css variables from a theme object
export default function generateCssVariables(theme: TThemeObject, prefix = '') {
  let cssVars = '';

  // iterate over the theme object
  Object.entries(theme).forEach(([key, value]) => {
    if (typeof value === 'object' && value !== null) {
      // Recursive case: value is an object
      cssVars += generateCssVariables(value, `${prefix}${key}-`);
    } else if (typeof value === 'string') {
      // Base case: value is a string
      cssVars += `--${prefix}${key}: ${value};`;
    }
  });

  return cssVars;
}
