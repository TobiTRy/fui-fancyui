// Import the necessary function and variables from @storybook/theming
import { create } from '@storybook/theming';

import { theme } from '../src/design/theme/theme';

// Create a custom theme

const storyBookThemeLight = create({
  base: 'light',

  brandTitle: 'FUI-FancyUI',
  brandUrl: 'http://FUI.cool',
  brandImage: 'https://tobitry.de/bilder/fui/FancyUI%20-01FITStorybookWide.png',
  brandTarget: '_blank',

  textColor: theme.color.primary[0],
  appBg: theme.color.secondary[1],
  colorPrimary: theme.color.accent[0],
  colorSecondary: theme.color.accent[1],
  appContentBg: theme.color.secondary[0],
  barBg: theme.color.secondary[1],

  inputBg: theme.color.secondary[1],
  buttonBg: theme.color.secondary[6],
  booleanBg: theme.color.secondary[1],
  booleanSelectedBg: theme.color.accent[1],
  appBorderColor: theme.color.secondary[4],
  appBorderRadius: 18,
  inputTextColor: theme.color.primary[0],
  barHoverColor: theme.color.accent[0],
});

export default storyBookThemeLight;
