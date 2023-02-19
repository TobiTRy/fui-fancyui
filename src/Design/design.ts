
export const colorPalet = {
  white: '#E8E7E4',
  white_light: '#F2F1EE',
  withe_dark: '#D7D6D2',

  lightgreen: '#0A7273',
  lightgreen_light: '#3C9E9E',
  lightgreen_dark: '#005858',

  orange: '#F17C12',
  orange_light: '#FFA42A',
  orange_dark: '#CC6C0A',

  darkblue: '#002436',
  darkblue_light: '#4C5C6E',
  darkblue_dark: '#001929',

  get primary() { return this.darkblue},
  get secondary() { return this.lightgreen},
  get accent() { return this.orange},

  transparent: 'transparent',
  light: '#f1f1f1',
  dark: '#252525',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
};

export const spacingPx = {
  xs: spacing.xs + 'px',
  sm: spacing.sm + 'px',
  md: spacing.md + 'px',
  lg: spacing.lg + 'px',
  xl: spacing.xl + 'px',
  xxl: spacing.xxl + 'px',
};



export const fontSize = {
	small: '0.875rem',
	medium: '1rem',
	large: '1.125rem',
}

export const borderRadius = {
	small: '4px',
	medium: '8px',
	large: '12px',
	extraLarge: '18px'
}

export const uiColors = {
	accent: {
		main: colorPalet.orange,
		contrast: colorPalet.white_light,
		hover: colorPalet.orange_dark
	},
	secondary : {
		main: colorPalet.lightgreen,
		contrast: colorPalet.white_light,
		hover: colorPalet.lightgreen_dark,
	},
	primary: {
		main: colorPalet.darkblue,
		contrast: colorPalet.white_light,
		hover: colorPalet.darkblue_dark
	},
	transparent: {
		main: colorPalet.transparent,
		contrast: colorPalet.dark,
		hover: colorPalet.transparent
	}
};
