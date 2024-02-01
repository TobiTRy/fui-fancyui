import { css } from 'styled-components';

import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { TComponentSizes } from '@/types/TComponentSizes';
import { TTheme } from '@/types/TTheme';

type TBorderRadius = {
  rounded?: TBorderRadiusSizes | false;
  sizeC?: TComponentSizes;
  theme: TTheme;
};

export const generateBorderRadiusForComponent = (props: TBorderRadius) => {
  const { theme, rounded, sizeC } = props;
  const borderRadius = theme.borderRadius;
  if (rounded === false) return;

  if (rounded) {
    return css`
      border-radius: ${borderRadius[rounded]};
    `;
  }

  switch (sizeC) {
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
