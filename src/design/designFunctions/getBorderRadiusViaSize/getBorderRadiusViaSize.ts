import { TComponentSizes } from '@/types/TComponentSizes';

export type TgetBorderRadiusViaSize = TComponentSizes | 'complete' | 'none';
export const getBorderRadiusViaSize = (borderRadius: TgetBorderRadiusViaSize) => {
  switch (borderRadius) {
    case 'sm':
      return '10%';
    case 'md':
      return '20%';
    case 'lg':
      return '30%';
    case 'complete':
      return '50%';
    default:
      return '';
  }
};
