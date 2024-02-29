// Import the necessary function and variables from @storybook/theming
import { create } from '@storybook/theming';

import { rawTheme } from '../src/design/theme/rawTheme';

// Create a custom theme

const storyBookThemeLight = create({
  base: 'light',

  brandTitle: 'FUI-FancyUI',
  brandUrl: 'http://FUI.cool',
  brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
  brandTarget: '_blank',

  textColor: rawTheme.colors.primary[0],
  appBg: rawTheme.colors.secondary[1],
  colorPrimary: rawTheme.colors.accent[0],
  colorSecondary: rawTheme.colors.accent[1],
  appContentBg: rawTheme.colors.secondary[0],
  barBg: rawTheme.colors.secondary[1],
});

export default storyBookThemeLight;
