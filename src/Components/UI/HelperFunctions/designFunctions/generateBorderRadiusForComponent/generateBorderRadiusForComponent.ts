import { css } from 'styled-components';
import { borderRadius } from '../../../Design/design';

export const generateBorderRadiusForComponent = (size?: 'sm' | 'md' | 'lg', rounded?: keyof typeof borderRadius) => {
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
        border-radius: ${borderRadius.lg};
      `;
    default:
      return css`
      `;
  }
};
