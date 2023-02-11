export const color = {
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

	transparent: 'transparent',
  dark: '#252525',
};

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '18px',
  xl: '24px',
  xxl: '48px',
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

export const uiColorCompilation = {
	accent: {
		main: color.orange,
		contrast: color.white,
		hover: color.orange_dark
	},
	secondary : {
		main: color.lightgreen,
		contrast: color.white,
		hover: color.lightgreen_light,
	},
	primary: {
		main: color.darkblue,
		contrast: color.white,
		hover: color.darkblue_dark
	},
	transparent: {
		main: color.transparent,
		contrast: color.white,
		hover: color.transparent
	}
};
