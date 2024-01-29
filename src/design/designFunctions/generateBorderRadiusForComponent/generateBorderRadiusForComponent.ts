import { css } from 'styled-components';

import themeStore from '@/design/theme/themeStore/themeStore';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';

export const generateBorderRadiusForComponent = (rounded?: TBorderRadiusSizes | false, size?: 'sm' | 'md' | 'lg') => {
  const borderRadius = themeStore.getState().theme.borderRadius;
  if (rounded === false) return;

  if (rounded) {
    return css`
      border-radius: ${borderRadius[rounded]};
    `;
  }

  switch (size) {
    case 'sm':
      return css`
        border-radius: ${borderRadius.xs};
      `;
    case 'md':
      return css`
        border-radius: ${borderRadius.sm};
      `;
    case 'lg':
      return css`
        border-radius: ${borderRadius.sm};
      `;
    default:
      return css``;
  }
};

export default generateBorderRadiusForComponent;
