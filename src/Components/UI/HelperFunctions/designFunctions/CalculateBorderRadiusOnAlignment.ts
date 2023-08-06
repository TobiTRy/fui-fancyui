import { css } from 'styled-components';
import { borderRadius } from '../../Design/design';

export interface IAlignments {
  $alignHorizontal?: 'left' | 'center' | 'right';
  $alignVertical?: 'top' | 'center' | 'bottom';
}
const CalculateBorderRadiusOnAlignment = ({ $alignHorizontal, $alignVertical }: IAlignments) => {
  if ($alignHorizontal === 'left' && $alignVertical === 'top') {
    return css`
      top: 0;
      left: 0;
      border-radius: 0 0 ${borderRadius.medium} 0;
    `;
  } else if ($alignHorizontal === 'left' && $alignVertical === 'bottom') {
    return css`
      bottom: 0;
      left: 0;
      border-radius: 0 ${borderRadius.medium} 0 0;
    `;
  } else if ($alignHorizontal === 'right' && $alignVertical === 'top') {
    return css`
      top: 0;
      right: 0;
      border-radius: 0 0 0 ${borderRadius.medium};
    `;
  } else if ($alignHorizontal === 'right' && $alignVertical === 'bottom') {
    return css`
      bottom: 0;
      right: 0;
      border-radius: ${borderRadius.medium} 0 0 0;
    `;
  } else if ($alignHorizontal === 'center' && $alignVertical === 'top') {
    return css`
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 0 0 ${borderRadius.medium} ${borderRadius.medium};
    `;
  } else if ($alignHorizontal === 'center' && $alignVertical === 'bottom') {
    return css`
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      border-radius: ${borderRadius.medium} ${borderRadius.medium} 0 0;
    `;
  } else {
    return css`
      border-radius: ${borderRadius.medium};
    `;
  }
};


export default CalculateBorderRadiusOnAlignment;