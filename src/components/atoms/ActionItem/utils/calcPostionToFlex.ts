export type TPosition = 'top' | 'bottom' | 'left' | 'right';

export const calcPostionToFlex = (position: TPosition) => {
  switch (position) {
    case 'top':
      return 'column';
    case 'bottom':
      return 'column-reverse';
    case 'left':
      return 'row';
    case 'right':
      return 'row-reverse';
    default:
      return 'row';
  }
};
