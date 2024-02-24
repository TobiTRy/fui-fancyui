import { TUiColorTypes } from '../../types/TUiColorTypes';
import { TUiColorsSystemMessage } from '../../types/TUiColorsSystemMessage';
import { TUiColorsNotTransparent } from '../../types/TUiColorsNotTransparent';

const layer = {
  description: 'The layer of the component',
  control: { type: 'range', min: 0, max: 9 },
};

type ThemeTypeCategory = 'allThemeTypes' | 'notTransparent' | 'systemMessage';

type ThemeOptionsMap = {
  allThemeTypes: TUiColorTypes;
  notTransparent: TUiColorsNotTransparent;
  systemMessage: TUiColorsSystemMessage;
};

const allThemeTypes: TUiColorTypes[] = ['primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'];
const systemMessage: TUiColorsSystemMessage[] = ['error', 'warning', 'info', 'success'];
const notTransparent: TUiColorsNotTransparent[] = [
  'primary',
  'secondary',
  'accent',
  'info',
  'success',
  'warning',
  'error',
];

function templateThemeType<Cat extends ThemeTypeCategory, Default extends ThemeOptionsMap[Cat]>(
  themeTypeCat: Cat,
  defaultValue?: Default
) {
  let options: TUiColorTypes[] | TUiColorsSystemMessage[] | TUiColorsNotTransparent[];

  switch (themeTypeCat) {
    case 'allThemeTypes':
      options = allThemeTypes;
      break;
    case 'systemMessage':
      options = systemMessage;
      break;
    case 'notTransparent':
      options = notTransparent;
      break;
    default:
      // This should never happen, but it's here as a fallback
      options = [];
      break;
  }

  // Ensure the defaultValue is part of the options, if not, use the first option as a fallback.
  const effectiveDefaultValue = defaultValue && options.includes(defaultValue) ? defaultValue : options[0];

  return {
    themeType: {
      description: 'The theme type of the component',
      control: { type: 'select' },
      options: options,
      defaultValue: {
        summary: effectiveDefaultValue,
      },
    },
    layer,
  };
}

export default templateThemeType;
