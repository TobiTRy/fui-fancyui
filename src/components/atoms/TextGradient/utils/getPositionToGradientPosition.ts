import { GradientPosition } from '@/components/atoms/TextGradient/TTextGradient.model';

// Helper function to get position for linear gradients
export const getLinearGradientPosition = (position: GradientPosition | undefined) => {
  switch (position) {
    case 'left':
      return 'to right';
    case 'right':
      return 'to left';
    case 'top':
      return 'to bottom';
    case 'bottom':
      return 'to top';
    case 'top-left':
      return 'to bottom right';
    case 'top-right':
      return 'to bottom left';
    case 'bottom-left':
      return 'to top right';
    case 'bottom-right':
      return 'to top left';
    default:
      return 'to bottom';
  }
};
