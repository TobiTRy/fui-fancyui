import { css } from 'styled-components';
import { TUiColorsType } from '../../Design/color/designColor';
import themeStore from '../../Design/color/themeStore';

type TSytemMessageIndicator = Exclude<keyof TUiColorsType, 'primary' | 'secondary' | 'accent' | 'accentDarken' | 'transparent'>;

export function sytemMessageIndicatorStyle(systemMessage?: TSytemMessageIndicator) {
  const theme = themeStore.getState().theme;

  if (systemMessage)
    return css`
      border: ${`1.5px solid ${theme[systemMessage][0]}`};
      transition: border 0.3s ease-in-out;
    `;
}
