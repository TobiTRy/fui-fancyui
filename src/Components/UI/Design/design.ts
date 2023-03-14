
export const colorPalet = {
  white: '#E8E7E4',
  white_light: '#F2F1EE',
  white_dark: '#D7D6D2',

  white_high: 'rgba(255 255 255 / 87%)',
  white_medium: 'rgba(255 255 255 / 60%)',
  white_disabled: 'rgba(255 255 255 / 38%)',


  lightgreen: '#0A7273',
  lightgreen_light: '#3C9E9E',
  lightgreen_dark: '#005858',

  orange: '#F17C12',
  orange_light: '#FFA42A',
  orange_dark: '#CC6C0A',

  darkblue: '#083448',
  darkblue_light: '#1a3947',
  darkblue_dark: '#0C2430',

  green_dark: '#007F4F',
  green_light: '#4CAF50',

  red_dark: '#C62828',
  red_light:'#FF5252',

  yellow_dark: '#FFD600',
  yello_light: '#FFEB3B',



  get primary() { return this.darkblue},
  get secondary() { return this.lightgreen},
  get accent() { return this.orange},

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
}


export const borderRadius = {
	small: '4px',
	medium: '8px',
	large: '12px',
	extraLarge: '18px',
  complete: '50px'
}

export const uiColors = {
	accent: {
		main: colorPalet.orange,
    main_light: colorPalet.orange_light,
		contrast: colorPalet.white_light,
		hover: colorPalet.orange_dark
	},
	secondary : {
		main: colorPalet.lightgreen,
    main_light: colorPalet.lightgreen_light,
		contrast: colorPalet.white_light,
		hover: colorPalet.lightgreen_dark,
	},
	primary: {
		main: colorPalet.darkblue,
    main_light: colorPalet.darkblue_light,
		contrast: colorPalet.white_light,
		hover: colorPalet.darkblue_dark
	},
	transparent: {
    main_light: colorPalet.transparent,
		main: colorPalet.transparent,
		contrast: colorPalet.dark,
		hover: colorPalet.transparent
	}
};
