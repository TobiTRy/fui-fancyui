import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { TGlobalElementSizes } from '@/types/TGlobalElementSizes';
import { TSizeSettings } from '@/types/TSizeSettings';
import { TTypographyVariants } from '@/types/TTypographyVariants';

type TSizeObj = {
  height: TGlobalElementSizes;
  borderRadius: TBorderRadiusSizes;
  fontSize: TTypographyVariants;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    height: 'xs',
    borderRadius: 'sm',
    fontSize: 'subTextFootnote',
  },
  md: {
    height: 'sm',
    borderRadius: 'md',
    fontSize: 'interactiveSm',
  },
  lg: {
    height: 'md',
    borderRadius: 'lg',
    fontSize: 'interactiveSm',
  },
};
