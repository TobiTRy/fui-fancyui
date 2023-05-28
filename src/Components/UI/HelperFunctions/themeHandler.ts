import { uiColors } from '../Design/design';
import { css } from 'styled-components';
import { IUiColorsTypes } from '../Design/design';

import Color from 'color';


interface IthemeHandler {
  theme: IUiColorsTypes;
  themeTextColor?: IUiColorsTypes;
  customBackgroundColor?: string;
  customTextColor?: string;
};


export const themeHandler = ({theme, themeTextColor, customTextColor, customBackgroundColor }: IthemeHandler ) => {
  // if customColor is set, use it, else use the theme color
  const useBackgroundColor = customBackgroundColor ? customBackgroundColor : uiColors[theme].main;

  // if customTextColor is set, use it, else use the theme color, if themeTextColor is set, use it, else use the theme color
  const useTextColor = customTextColor ? customTextColor : uiColors[themeTextColor ? themeTextColor : theme].contrast;
  
  // if customColor is set, use it, else use the theme color
  const useHoverColor = customBackgroundColor ? Color(customBackgroundColor).darken(0.3).string() : uiColors[theme].hover;

  return css`
    background-color: ${useBackgroundColor};
    color: ${useTextColor};
    transition: background-color 0.2s ease-in-out;

    &:hover:enabled {
      background-color: ${useHoverColor} !important;
      box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.15);
    }
  `;
};

