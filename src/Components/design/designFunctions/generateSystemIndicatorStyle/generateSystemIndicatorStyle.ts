import { css } from 'styled-components';
import themeStore from '../../theme/themeStore/themeStore';
import { TUiColorsSystemMessage } from '@/components/Interface/TUiColors';

export default function generateSystemIndicatorStyle(systemMessage?: TUiColorsSystemMessage) {
  const theme = themeStore.getState().theme;

  if (systemMessage)
    return css`
      border: ${`1.5px solid ${theme.colors[systemMessage][0]}`};
      transition: border 0.3s ease-in-out;
    `;
}
