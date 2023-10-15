import generateColorSteps from './generateColorSteps';
import isColorValid from './isColorValid';

export type TColorTypes = 'primary' | 'accent' | 'accentDarken' | 'secondary';

const themeColors = {
  primary: '#131825',
  accent: '#F17C12',
  accentDarken: '',
  secondary: '#f0f0ef',
  info: '#16487a',
  transparent: 'transparent',
};
themeColors.accentDarken = themeColors.accent;

export type IUiColorsTypes = keyof typeof themeColors | 'transparent';

export type TthemeColorGroup = { [key: string]: string };
export type TUiColorsType = { [key in IUiColorsTypes]: TthemeColorGroup };
export let uiColors: TUiColorsType = {} as TUiColorsType;

function generateUiColors() {
  let generatedColors = {} as TUiColorsType;

  // generate for each theme color the color steps  
  for (const color in themeColors) {
    // generate the color steps for the color
    const generatedColor = generateColorSteps(color as IUiColorsTypes, themeColors[color as IUiColorsTypes]);

    // add the color steps to the generatedColors object
    generatedColors = {
      ...generatedColors,
      [color]: generatedColor,
    };
  }

  uiColors = {
    ...generatedColors,
    transparent: {
      '0': 'transparent',
      '1': 'transparent',
      '2': 'transparent',
      '3': 'transparent',
      '4': 'transparent',
      '5': 'transparent',
      '6': 'transparent',
      '7': 'transparent',
      '8': 'transparent',
      '9': 'transparent',
    },
  };
}

generateUiColors();

// this function updates the theme colors with a incomming object
// { 'primary': '#131825', 'accent': '#F17C12', 'secondary': '#f0f0ef' }
export type IUiColorPops = {
  [key in TColorTypes]?: string;
};
// this function updates the theme colors with a incomming object and generates the new colors
export const updateThemeColors = (colorObject: IUiColorPops) => {
  let error: undefined | string;
  // check if the color is valid
  for (const key in colorObject) {
    const typedkey = key as TColorTypes;
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
  generateUiColors();
};
