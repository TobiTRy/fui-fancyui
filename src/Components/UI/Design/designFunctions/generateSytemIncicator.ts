import { css } from 'styled-components';
import { TUiColors } from '@/Components/UI/Interface/TUiColors';
import themeStore from '../color/themeStore';

type TUiColorsSystemMessageIndicator = Exclude<TUiColors, 'primary' | 'secondary' | 'accent' | 'accentDarken' | 'transparent'>;

export function sytemMessageIndicatorStyle(systemMessage?: TUiColorsSystemMessageIndicator) {
  const theme = themeStore.getState().theme;

  if (systemMessage)
    return css`
      border: ${`1.5px solid ${theme.colors[systemMessage][0]}`};
      transition: border 0.3s ease-in-out;
    `;
}
