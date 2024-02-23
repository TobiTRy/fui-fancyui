// Import the necessary function and variables from @storybook/theming
import { create } from '@storybook/theming';

// Create a custom theme
const myLightThemeStorybook = create({
  base: 'dark',

  brandTitle: 'FUI-FancyUI',
  brandUrl: 'http://FUI.cool',
  brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
  brandTarget: '_blank',

  textColor: '#fff',
});

export default myLightThemeStorybook;
