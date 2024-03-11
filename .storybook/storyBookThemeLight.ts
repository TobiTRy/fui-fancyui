// Import the necessary function and variables from @storybook/theming
import { create } from '@storybook/theming';

import { rawTheme } from '../src/design/theme/rawTheme';

// Create a custom theme

const storyBookThemeLight = create({
  base: 'light',

  brandTitle: 'FUI-FancyUI',
  brandUrl: 'http://FUI.cool',
  brandImage: 'https://tobitry.de/bilder/fui/FancyUI%20-01FITStorybookWide.png',
  brandTarget: '_blank',

  textColor: rawTheme.colors.primary[0],
  appBg: rawTheme.colors.secondary[1],
  colorPrimary: rawTheme.colors.accent[0],
  colorSecondary: rawTheme.colors.accent[1],
  appContentBg: rawTheme.colors.secondary[0],
  barBg: rawTheme.colors.secondary[1],

  inputBg: rawTheme.colors.secondary[1],
  buttonBg: rawTheme.colors.secondary[6],
  booleanBg: rawTheme.colors.secondary[1],
  booleanSelectedBg: rawTheme.colors.accent[1],
  appBorderColor: rawTheme.colors.secondary[4],
  appBorderRadius: 18,
  inputTextColor: rawTheme.colors.primary[0],
  barHoverColor: rawTheme.colors.accent[0],
});

export default storyBookThemeLight;
