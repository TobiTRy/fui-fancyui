import { css } from 'styled-components';

import { themeStore } from '@/design/theme/themeStore';
import { TUiColorsSystemMessage } from '@/interface/TUiColorsSystemMessage';

export default function generateSystemIndicatorStyle(systemMessage?: TUiColorsSystemMessage) {
  const theme = themeStore.getState().theme;

  if (systemMessage)
    return css`
      border: ${`1.5px solid ${theme.colors[systemMessage][0]}`};
      transition: border 0.3s ease-in-out;
    `;
}
