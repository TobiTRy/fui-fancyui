import { create } from '@storybook/theming';
import { theme } from '../src/design/theme/theme';

const storyBookThemeDark = create({
  base: 'dark',

  brandTitle: 'FUI-FancyUI',
  brandUrl: 'http://FUI.cool',
  brandImage: 'https://tobitry.de/bilder/fui/FancyUI%20-02FITStorybookWide.png',
  brandTarget: '_blank',

  textColor: theme.color.secondary[0],
  appBg: theme.color.primary[1],
  colorPrimary: theme.color.accent[0],
  colorSecondary: theme.color.accent[0],
  appContentBg: theme.color.primary[0],
  barBg: theme.color.primary[1],

  inputBg: theme.color.primary[1],
  buttonBg: theme.color.primary[2],
  booleanBg: theme.color.primary[1],
  booleanSelectedBg: theme.color.accent[1],
  appBorderColor: theme.color.primary[2],
  appBorderRadius: 18,
  inputTextColor: theme.color.secondary[0],
  barHoverColor: theme.color.accent[0],
});

export default storyBookThemeDark;
