
export const colorPalet = {
  white: '#E8E7E4',
  white_light: '#F2F1EE',
  white_dark: '#D7D6D2',

  white_high: 'rgba(255 255 255 / 87%)',
  white_medium: 'rgba(255 255 255 / 60%)',
  white_disabled: 'rgba(255 255 255 / 38%)',

  //#e75400
  orange: '#F17C12',
  orange_light: '#FFA42A',
  orange_dark: '#CC6C0A',

  darkblue: '#111626',
  darkblue_light: '#161c2c',
  darkblue_dark: '#131525f0',
  //darkblue_dark: '#14131e',

  // darkblue: '#083448',
  // darkblue_light: '#1a3947',
  // darkblue_dark: '#17131e',
  // #110E18 // #17131e // #00050d

  green_dark: '#161c22f2',
  green_light: '#1ea97c',//'#e4f8f0',

  red_dark: '#170c0cf2',
  red_light:'#ce2222',

  yellow_dark: '#131312f2',
  yellow_light: '#f67911',

  
  get primary() { return this.darkblue_dark },
  get secondary() { return this.white },
  get accent() { return this.orange },

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
}

export const borderRadius = {
	small: '4px',
	medium: '8px',
	large: '12px',
	extraLarge: '18px',
  xxl: '24px',
  xxxl: '48px',
  complete: '50px'
}


export type IUiColorsTypes = 'primary' | 'secondary' | 'accent' | 'transparent';

export const uiColors = {
	accent: {
		main: colorPalet.orange,
    main_light: colorPalet.orange_light,
		contrast: colorPalet.white_light,
		hover: colorPalet.orange_dark
	},
	secondary : {
    main: colorPalet.white,
    main_light: colorPalet.white_light,
		contrast: colorPalet.darkblue_dark,
		hover: colorPalet.white_dark,
	},
	primary: {
		main: colorPalet.darkblue,
    main_light: colorPalet.darkblue_light,
		contrast: colorPalet.white_light,
		hover: colorPalet.darkblue_light
	},
	transparent: {
    main_light: colorPalet.transparent,
		main: colorPalet.transparent,
		contrast: colorPalet.light,
		hover: colorPalet.transparent
	}
};


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
