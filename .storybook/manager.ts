import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';
import myLightThemeStorybook from './theme';

addons.setConfig({
  theme: myLightThemeStorybook,
});
