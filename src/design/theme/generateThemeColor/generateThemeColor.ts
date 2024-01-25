import { TUiColorsTypeObject } from '@/types/TUiColorsTypeObject';
import generateColorSteps from './utils/generateColorSteps';
import { isColorValid } from '@/utils//validations/isColorValid';
import { TUiColorTypes } from '@/types/TUiColorTypes';
import validateColorSteps from '@/design/theme/generateThemeColor/utils/validateColorSteps';
import { TThemeTypesNotTransparent } from '@/types/TThemeTypesNotTransparent';

const themeColors = {
  primary: '#131825',
  accent: '#F17C12',
  accentDarken: '',
  secondary: '#f0f0ef',
  info: '#287fd7',
  success: '#009688',
  warning: '#EB8800',
  error: '#D21414',
};
// success: '#22C390',
themeColors.accentDarken = themeColors.accent;

export { themeColors };

export type TthemeColorGroup = { [key: string]: string };

export let uiColors: TUiColorsTypeObject = {} as TUiColorsTypeObject;

export function initialGenerateUiColors() {
  // generate for each theme color the color steps
  for (const color in themeColors) {
    // generate the color steps for the color
    const generatedColor = generateColorSteps({
      themeType: color as TUiColorTypes,
      color: themeColors[color as TThemeTypesNotTransparent],
      pimaryColor: themeColors.secondary,
    });
    uiColors = {
      ...uiColors,
      [color]: generatedColor,
    };
  }
  // add the color steps to the generatedColors object
}

initialGenerateUiColors();

export const regenerateUiColors = (isDarkTheme: boolean) => {
  for (const color in uiColors) {
    // generate the color steps for the color
    const generatedColor = generateColorSteps({
      themeType: color as TUiColorTypes,
      color: uiColors[color as TThemeTypesNotTransparent]['0'],
      pimaryColor: isDarkTheme ? themeColors.primary : themeColors.secondary, // if the theme is dark, the primary color is the secondary color
    });

    uiColors = {
      ...uiColors,
      [color]: generatedColor,
    };
  }
};

// this function updates the theme colors with a incomming object
// { 'primary': '#131825', 'accent': '#F17C12', 'secondary': '#f0f0ef' }
export type IUiColorPops = {
  [key in TThemeTypesNotTransparent]?: string | object;
};
// this function updates the theme colors with a incomming object and generates the new colors
export const updateThemeColors = (colorObject: IUiColorPops) => {
  let error: undefined | string;

  // check if the color is valid
  for (const colorType in colorObject) {
    const colorTypedkey = colorType as TThemeTypesNotTransparent;

    //  when the user only provides a color string and not a object
    // like { 'primary': '#131825' } instead of complete theme { 'primary': { '0': '#131825' } }
    // than we need to convert the string to a object (auto generate the color steps)
    if (typeof colorObject[colorTypedkey] === 'string') {
      // check the provided color is valid
      if (!isColorValid(themeColors[colorTypedkey])) {
        error = 'The color ' + colorTypedkey + ' is not valid';
        break;
      }

      // accentDarken should not provided by the user%
      if (colorType !== 'accentDarken' && colorObject[colorTypedkey] !== undefined) {
        // update the theme color with the new color
        const generatedColorSteps = generateColorSteps({
          themeType: colorTypedkey,
          color: colorObject[colorTypedkey]! as string,
          pimaryColor: themeColors.secondary,
        });
        // update the themeColors with the new color
        uiColors[colorTypedkey] = generatedColorSteps;
      }
    } else if (typeof colorObject[colorTypedkey] === 'object') {
      // if the user provides a object with the color steps
      // than we need to update the themeColors with the new color steps
      // and generate the new uiColors
      const colorSteps = colorObject[colorTypedkey]! as object;

      //Validate ColorSteps object (check if the object has the correct keys)
      // and then update the themeColor with the new color steps
      if (validateColorSteps(colorSteps)) {
        uiColors[colorTypedkey] = colorSteps as TthemeColorGroup;
      }
    }
  }
  // if a not valid color is provided throw an error
  if (error) throw new Error(error);

  return uiColors;
};
