import { create } from '@storybook/theming';
import { rawTheme } from '../src/design/theme/rawTheme';

const storyBookThemeDark = create({
  base: 'dark',

  brandTitle: 'FUI-FancyUI',
  brandUrl: 'http://FUI.cool',
  brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
  brandTarget: '_blank',

  textColor: rawTheme.colors.secondary[0],
  appBg: rawTheme.colors.primary[1],
  colorPrimary: rawTheme.colors.accent[0],
  colorSecondary: rawTheme.colors.accent[1],
  appContentBg: rawTheme.colors.primary[0],
  barBg: rawTheme.colors.primary[1],
});

export default storyBookThemeDark;
