import generateColorSteps from './generateColorSteps';
import isColorValid from './isColorValid';

const themeColors = {
  primary: '#131825',
  accent: '#F17C12',
  accentDarken: '',
  secondary: '#f0f0ef',
  info: '#287fd7',
  transparent: 'transparent',
};
//info: '#16487a',
themeColors.accentDarken = themeColors.accent;

export type IUiColorsTypes = keyof typeof themeColors | 'transparent';

export type TthemeColorGroup = { [key: string]: string };
export type TUiColorsType = { [key in IUiColorsTypes]: TthemeColorGroup };
export let uiColors: TUiColorsType = {} as TUiColorsType;

export function initialGenerateUiColors() {
  // generate for each theme color the color steps
  for (const color in themeColors) {
    // generate the color steps for the color
    const generatedColor = generateColorSteps({
      colorType: color as IUiColorsTypes,
      color: themeColors[color as IUiColorsTypes],
      pimaryColor: themeColors.primary,
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
      colorType: color as IUiColorsTypes,
      color: uiColors[color as IUiColorsTypes]['0'],
      pimaryColor: isDarkTheme ? themeColors.primary : themeColors.secondary // if the theme is dark, the primary color is the secondary color
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
  [key in IUiColorsTypes]?: string;
};
// this function updates the theme colors with a incomming object and generates the new colors
export const updateThemeColors = (colorObject: IUiColorPops) => {
  let error: undefined | string;
  // check if the color is valid
  for (const key in colorObject) {
    const typedkey = key as IUiColorsTypes;
    if (!isColorValid(themeColors[typedkey])) {
      error = 'The color ' + typedkey + ' is not valid';
      break;
    }
    // accentDarken should not provided by the user
    if (key !== 'accentDarken' && colorObject[typedkey] !== undefined) {
      themeColors[typedkey] = colorObject[typedkey]!;
    }
  }
  // if a not valid color is provided throw an error
  if (error) throw new Error(error);

  // generate the new colors
  initialGenerateUiColors();
};
