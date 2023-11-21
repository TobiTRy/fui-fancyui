export const leftRightToFlex = (align?: 'left' | 'right') => {
  if (align === 'left') return 'row';
  if (align === 'right') return 'row-reverse';
  return 'row';
};
