import { css } from 'styled-components';

import themeStore from '@/design/theme/themeStore/themeStore';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
export interface IAlignments {
  $alignHorizontal?: 'left' | 'center' | 'right';
  $alignVertical?: 'top' | 'center' | 'bottom';
  $borderRadius?: TBorderRadiusSizes;
}

//this sets the Border on a element depending on the alignment
const calcBorderRadiusOnAlignment = ({ $alignHorizontal, $alignVertical, $borderRadius }: IAlignments) => {
  const borderRadius = themeStore.getState().theme.borderRadius;

  if ($alignHorizontal === 'left' && $alignVertical === 'top') {
    return css`
      top: 0;
      left: 0;
      border-radius: 0 0 ${borderRadius[$borderRadius || 'md']} 0;
    `;
  } else if ($alignHorizontal === 'left' && $alignVertical === 'bottom') {
    return css`
      bottom: 0;
      left: 0;
      border-radius: 0 ${borderRadius[$borderRadius || 'md']} 0 0;
    `;
  } else if ($alignHorizontal === 'right' && $alignVertical === 'top') {
    return css`
      top: 0;
      right: 0;
      border-radius: 0 0 0 ${borderRadius[$borderRadius || 'md']};
    `;
  } else if ($alignHorizontal === 'right' && $alignVertical === 'bottom') {
    return css`
      bottom: 0;
      right: 0;
      border-radius: ${borderRadius[$borderRadius || 'md']} 0 0 0;
    `;
  } else if ($alignHorizontal === 'center' && $alignVertical === 'top') {
    return css`
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 0 0 ${borderRadius[$borderRadius || 'md']} ${borderRadius[$borderRadius || 'md']};
    `;
  } else if ($alignHorizontal === 'center' && $alignVertical === 'bottom') {
    return css`
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      border-radius: ${borderRadius[$borderRadius || 'md']} ${borderRadius[$borderRadius || 'md']} 0 0;
    `;
  } else {
    return css`
      border-radius: ${borderRadius.md};
    `;
  }
};

export default calcBorderRadiusOnAlignment;
