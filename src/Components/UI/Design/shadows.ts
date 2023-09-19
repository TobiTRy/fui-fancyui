import { css } from 'styled-components';
import themeStore from './color/themeStore';
import colorTransparencyCalculator from './color/colorTransparencyCalculator';

//global text-shadow
export const textShadow = {
  sm: css`
    text-shadow: 1px 1px 1px black;
  `,
  md: css`
    text-shadow: 0 0 15px #19191980;
  `,
  lg: css`
    text-shadow: 0 0 20px black;
  `,
};

//global box-shadow
export const boxShadow = {
  get sm() {
    const themeColor = colorTransparencyCalculator(themeStore.getState().theme.secondary[0], 0.05);
    return css`
      box-shadow: 0 0 1px 1px ${themeColor}, 0 0 0.5px ${themeColor};
    `;
  },
  get md() {
    const themeColor = colorTransparencyCalculator(themeStore.getState().theme.secondary[0], 0.10);
    return css`
      box-shadow: 0 0 2px 1px ${themeColor}, 0 0 1px ${themeColor};
    `;
  },
  lg: css`
    box-shadow: 1px 0px 23px #000000e3;
  `,
};
