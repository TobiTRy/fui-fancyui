
// Set size based on prop
export type TSize = 'sm' | 'md' | 'lg' | 'xxs' | 'xs' | 'xl' | 'xxl' | 'complete';
const sizeConfig: Record<TSize | string, string> = {
  xxs: '24px',
  xs: '32px',
  sm: '48px',
  md: '96px',
  lg: '128px',
  xl: '192px',
  xxl: '256px',
  complete: '100%',
  default: '100px',
};

export const getSize = (size: TSize | string) => {
  // Check if the size is a percentage value
  if (typeof size === 'string' && size.endsWith('%')) return size;

  // Return the size from the config or default if not found
  return sizeConfig[size] || sizeConfig['default'];
};

