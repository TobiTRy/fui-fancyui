import { TSVGAtomSizes } from '@/components/atoms/FancySVGAtom/FancySVGAtom.model';
import { TComponentSizes } from '@/types/TComponentSizes';
import { TTypography } from '@/types/TTypography';

type TSizeObj = {
  iconSize: TSVGAtomSizes;
  title: TTypography;
  descriptionSize: TTypography;
};

type TSizesObject = {
  [K in TComponentSizes]: TSizeObj;
};

// the template for the sizes
export const sizes: TSizesObject = {
  sm: {
    iconSize: 'xs',
    title: 'h6',
    descriptionSize: 'smText',
  },
  md: {
    iconSize: 'sm',
    title: 'h5',
    descriptionSize: 'content',
  },
  lg: {
    iconSize: 'sm',
    title: 'h4',
    descriptionSize: 'content',
  },
};
