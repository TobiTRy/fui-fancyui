import Color from 'color';

import generateColorSteps from './color/generateColorSteps';
import isColorValid from './color/isColorValid';

export type TColorTypes = 'primary' | 'accent' | 'accentDarken' | 'secondary' | 'info';



export const colorPalet = {
  green_background: '#161c22f2',
  green_dark: '#17815f',
  green_light: '#1ea97c',

  red_backGround: '#170c0cf2',
  red_dark: '#8b1c1c',
  red_light: '#ce2222',

  yellow_background: '#131312f2',
  yellow_dark: '#c96512',
  yellow_light: '#f67911',

  blue_background: '#162a3bf2',
  blue_dark: '#16487a',
  blue_light: '#1681c2',
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
  extrasm: '0.7rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  xxl: '1.5rem',
};

export const fontSizes = {
  desktop: {
    headings: {
      h1: '40px',
      h2: '32px',
      h3: '24px',
      h4: '20px',
      h5: '18px',
      h6: '16px',
    },
    textElements: {
      label: '16px',
      caption: '16px',
      smText: '12px',
      verysmText: '12px',
      input: '16px',
      button: '16px',
    },
  },
  mobile: {
    headings: {
      h1: '32px',
      h2: '24px',
      h3: '20px',
      h4: '18px',
      h5: '16px',
      h6: '14px',
    },
    textElements: {
      label: '16px',
      caption: '14px',
      smText: '12px',
      verysmText: '12px',
      input: '16px',
      button: '16px',
    },
  },
};

export const borderRadius = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '18px',
  xxl: '24px',
  xxxl: '48px',
  complete: '50px',
};
export type IBorderRadiusNames = keyof typeof borderRadius;
export type IBorderRadius = typeof borderRadius;

export type IUiColorsTypes = 'primary' | 'secondary' | 'accent' | 'transparent';




export type IUiColorsSystemMessageTypes = keyof typeof systemMessages;
// colors for different types of (success, warning, error)
export const systemMessages = {
  success: {
    backGround: colorPalet.green_background,
    dark: colorPalet.green_dark,
    light: colorPalet.green_light,
  },
  warning: {
    backGround: colorPalet.yellow_background,
    dark: colorPalet.yellow_dark,
    light: colorPalet.yellow_light,
  },
  error: {
    backGround: colorPalet.red_backGround,
    dark: colorPalet.red_dark,
    light: colorPalet.red_light,
  },
  info: {
    backGround: colorPalet.blue_background,
    dark: colorPalet.blue_dark,
    light: colorPalet.blue_light,
  },
};
