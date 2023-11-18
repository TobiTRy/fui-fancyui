import { css } from 'styled-components';

import { borderRadius } from '../../Design/designSizes';
import themeStore from '@/Components/UI/Design/color/themeStore';
export interface IAlignments {
  $alignHorizontal?: 'left' | 'center' | 'right';
  $alignVertical?: 'top' | 'center' | 'bottom';
  $rouned?: keyof typeof borderRadius;
}

//this sets the Border on a element depending on the alignment
const CalculateBorderRadiusOnAlignment = ({ $alignHorizontal, $alignVertical, $rouned }: IAlignments) => {
  const borderRadius = themeStore.getState().theme.borderRadius;

  if ($alignHorizontal === 'left' && $alignVertical === 'top') {
    return css`
      top: 0;
      left: 0;
      border-radius: 0 0 ${borderRadius[$rouned || 'md']} 0;
    `;
  } else if ($alignHorizontal === 'left' && $alignVertical === 'bottom') {
    return css`
      bottom: 0;
      left: 0;
      border-radius: 0 ${borderRadius[$rouned || 'md']} 0 0;
    `;
  } else if ($alignHorizontal === 'right' && $alignVertical === 'top') {
    return css`
      top: 0;
      right: 0;
      border-radius: 0 0 0 ${borderRadius[$rouned || 'md']};
    `;
  } else if ($alignHorizontal === 'right' && $alignVertical === 'bottom') {
    return css`
      bottom: 0;
      right: 0;
      border-radius: ${borderRadius[$rouned || 'md']} 0 0 0;
    `;
  } else if ($alignHorizontal === 'center' && $alignVertical === 'top') {
    return css`
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 0 0 ${borderRadius[$rouned || 'md']} ${borderRadius[$rouned || 'md']};
    `;
  } else if ($alignHorizontal === 'center' && $alignVertical === 'bottom') {
    return css`
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      border-radius: ${borderRadius.md} ${borderRadius.md} 0 0;
    `;
  } else {
    return css`
      border-radius: ${borderRadius.md};
    `;
  }
};


export default CalculateBorderRadiusOnAlignment;