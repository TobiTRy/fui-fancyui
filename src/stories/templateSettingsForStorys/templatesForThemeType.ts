import { TUiColorsMain } from '@/types/TUiColorsMain';
import { TUiColorTypes } from '../../types/TUiColorTypes';
import { TUiColorsSystemMessage } from '../../types/TUiColorsSystemMessage';
import { TUiColorsNotTransparent } from '../../types/TUiColorsNotTransparent';
import { TLayer } from '../../types/TLayer';

type ThemeTypeCategory = 'allThemeTypes' | 'notTransparent' | 'systemMessage' | 'mainThemeTypes';

type ThemeOptionsMap = {
  allThemeTypes: TUiColorTypes;
  notTransparent: TUiColorsNotTransparent;
  systemMessage: TUiColorsSystemMessage;
  mainThemeTypes: TUiColorsMain;
};

const mainThemeTypes: TUiColorsMain[] = ['primary', 'secondary'];
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
  defaultValue?: Default,
  layer?: TLayer
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
    case 'mainThemeTypes':
      options = mainThemeTypes;
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
      options: [...options, undefined],
      table: {
        defaultValue: { summary: effectiveDefaultValue },
      },
    },
    layer: {
      description: 'The layer of the component',
      control: { type: 'range', min: 0, max: 9 },
      table: {
        defaultValue: { summary: layer || 0 },
      },
    },
  };
}

export default templateThemeType;
