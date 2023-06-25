import Color from 'color';

type ITransparency = 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.8 | 0.9;
export const transparencyCalculator = (color: string, transparency: ITransparency) => {
  return Color(color).alpha(transparency).rgb().string();
};

const mainColors = {
  primary: '#131825',
  accent: '#F17C12',
  secondary: '#E8E7E4',
};

export const colorPalet = {
  //backup
  // white: '#E8E7E4',
  // white_light: '#F2F1EE',
  // white_dark: '#D7D6D2',

  white: mainColors.secondary,
  white_light: Color(mainColors.secondary).lighten(0.15).hex(),
  white_dark: Color(mainColors.secondary).darken(0.05).hex(),

  white_high: 'rgba(255 255 255 / 87%)',
  white_medium: 'rgba(255 255 255 / 60%)',
  white_disabled: 'rgba(255 255 255 / 38%)',

  //backup
  //#e75400
  // orange: '#F17C12',
  // orange_light: '#FFA42A',
  // orange_dark: '#CC6C0A',

  orange: mainColors.accent,
  orange_light: Color(mainColors.accent).lighten(0.15).hex(),
  orange_dark: Color(mainColors.accent).darken(0.1).hex(),

  // darkblue: '#111626',
  // darkblue_light: '#161c2c',
  // darkblue_dark: '#131525f0',
  darkblue: mainColors.primary,
  darkblue_light: Color(mainColors.primary).lighten(0.15).hex(),
  darkblue_dark: Color(mainColors.primary).darken(0.05).hex(),
  //darkblue_dark: Color('#161c2c').darken(0.15).hex(),

  //darkblue_dark: '#14131e',

  // darkblue: '#083448',
  // darkblue_light: '#1a3947',
  // darkblue_dark: '#17131e',
  // #110E18 // #17131e // #00050d

  green_dark: '#161c22f2',
  green_light: '#1ea97c', //'#e4f8f0',

  red_dark: '#170c0cf2',
  red_light: '#ce2222',

  yellow_dark: '#131312f2',
  yellow_light: '#f67911',

  //TODO: REMOVE ME OR REPLACE ME
  // get primary() { return this.darkblue_dark },
  // get secondary() { return this.white },
  // get accent() { return this.orange },

  transparent: 'transparent',
  light: '#f1f1f1',
  dark: '#252525',
};

export const spacing = {
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
};

export const spacingPx = {
  xxs: spacing.xxs + 'px',
  xs: spacing.xs + 'px',
  sm: spacing.sm + 'px',
  md: spacing.md + 'px',
  lg: spacing.lg + 'px',
  xl: spacing.xl + 'px',
  xxl: spacing.xxl + 'px',
};

export const fontSize = {
  extraSmall: '0.7rem',
  small: '0.875rem',
  medium: '1rem',
  large: '1.125rem',
  extraLarge: '1.25rem',
  xxl: '1.5rem',
};


export const borderRadius = {
  small: '4px',
  medium: '8px',
  large: '12px',
  extraLarge: '18px',
  xxl: '24px',
  xxxl: '48px',
  complete: '50px',
};
export type IBorderRadiusNames = keyof typeof borderRadius;
export type IBorderRadius = typeof borderRadius;

export type IUiColorsTypes = 'primary' | 'secondary' | 'accent' | 'transparent';

const colorSteps = {
  primary: {
    70: Color(mainColors.primary).lighten(0.25).hex(),
    60: Color(mainColors.primary).lighten(0.15).hex(),
    50: mainColors.primary,
    40: Color(mainColors.primary).darken(0.05).hex(),
    30: Color(mainColors.primary).darken(0.1).hex(),
  },
  accent: {
    70: Color(mainColors.accent).lighten(0.2).hex(),
    60: Color(mainColors.accent).lighten(0.15).hex(),
    50: mainColors.accent,
    40: Color(mainColors.accent).darken(0.1).hex(),
    30: Color(mainColors.accent).darken(0.15).hex(),
  },
  secondary: {
    70: Color(mainColors.secondary).lighten(0.2).hex(),
    60: Color(mainColors.secondary).lighten(0.15).hex(),
    50: mainColors.secondary,
    40: Color(mainColors.secondary).darken(0.05).hex(),
    30: Color(mainColors.secondary).darken(0.2).hex(),
    20: Color(mainColors.secondary).darken(0.40).hex(),
  },
}




export const uiColors = {
  primary: {
    lighter: colorSteps.primary[70],
    light: colorSteps.primary[60],
    main: mainColors.primary,
    dark: colorSteps.primary[40],
    darker: colorSteps.primary[30],
    contrast: colorSteps.secondary[60],
  },
  accent: {
    lighter: colorSteps.accent[70],
    light: colorSteps.accent[60],
    main: mainColors.accent,
    dark: colorSteps.accent[40],
    darker: colorSteps.accent[30],
    contrast: colorSteps.secondary[60],
  },
  secondary: {
    lighter: colorSteps.secondary[70],
    light:  colorSteps.secondary[60],
    main: mainColors.secondary,
    dark: colorSteps.secondary[40],
    darker: colorSteps.secondary[30],
    darkest: 'gray',  // is used for passiv elements to make them more passive
    contrast: colorSteps.primary[60],
  },
  transparent: {
    lighter: 'tarnsparent',
    light: 'tarnsparent',
    main: 'tarnsparent',
    dark: 'tarnsparent',
    darker: 'tarnsparent',
    contrast: colorSteps.secondary[60],
	}
};

// export const uiColors = {
//   accent: {
//     main: colorPalet.orange,
//     main_light: colorPalet.orange_light,
//     contrast: colorPalet.white_light,
//     hover: colorPalet.orange_dark,
//   },
//   secondary: {
//     main: colorPalet.white,
//     main_light: colorPalet.white_light,
//     contrast: colorPalet.darkblue_dark,
//     hover: colorPalet.white_dark,
//   },
//   primary: {
//     main: colorPalet.darkblue,
//     main_light: colorPalet.darkblue_light,
//     contrast: colorPalet.white_light,
//     hover: colorPalet.darkblue_light,
//   },
//   transparent: {
//     main_light: colorPalet.transparent,
//     main: colorPalet.transparent,
//     contrast: colorPalet.light,
//     hover: colorPalet.transparent,
//   },
// };

export type IUiColorsSystemMessageTypes = 'success' | 'warning' | 'error';
// colors for different types of (success, warning, error)
export const systemMessages = {
  success: {
    dark: colorPalet.green_dark,
    light: colorPalet.green_light,
  },
  warning: {
    dark: colorPalet.yellow_dark,
    light: colorPalet.yellow_light,
  },
  error: {
    dark: colorPalet.red_dark,
    light: colorPalet.red_light,
  },
};
