import { TBorderRadiusSizes } from '@/types';

export type TgetBorderRadiusViaSize = TBorderRadiusSizes | 'complete' | 'none';
export const getBorderRadiusViaSize = (borderRadius: TgetBorderRadiusViaSize) => {
  switch (borderRadius) {
    case 'xxs':
      return '2%';
    case 'xs':
      return '5%';
    case 'sm':
      return '10%';
    case 'md':
      return '20%';
    case 'lg':
      return '30%';
    case 'xl':
      return '35%';
    case 'xxl':
      return '40%';
    case 'complete':
      return '50%';
    case 'none':
      return '0';
    default:
      return '';
  }
};
