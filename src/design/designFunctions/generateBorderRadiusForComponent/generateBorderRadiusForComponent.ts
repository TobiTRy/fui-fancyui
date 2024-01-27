import { css } from 'styled-components';

import themeStore from '@/design/theme/themeStore/themeStore';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';

export const generateBorderRadiusForComponent = (size?: 'sm' | 'md' | 'lg', rounded?: TBorderRadiusSizes) => {
  const borderRadius = themeStore.getState().theme.borderRadius;

  if (rounded) {
    return css`
      border-radius: ${borderRadius[rounded]};
    `;
  }

  switch (size) {
    case 'sm':
      return css`
        border-radius: ${borderRadius.sm};
      `;
    case 'md':
      return css`
        border-radius: ${borderRadius.md};
      `;
    case 'lg':
      return css`
        border-radius: ${borderRadius.xl};
      `;
    default:
      return css``;
  }
};

export default generateBorderRadiusForComponent;
