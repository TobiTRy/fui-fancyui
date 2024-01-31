import { TSize } from '@/components/molecules/TextAvatar/utils/getSize';
import { TTypographyVariants } from '@/types/TTypographyVariants';

// generate the text sizeC based on the sizeC prop
export const getTextSize = (sizeC: TSize | string): TTypographyVariants => {
  switch (sizeC) {
    case 'xxs':
    case 'xs':
      return 'subTextFootnote';
    case 'sm':
      return 'subTextCaption';
    case 'md':
      return 'bodytextSm';
    case 'lg':
      return 'bodytextLg';
    case 'xl':
    case 'xxl':
      return 'sectionSubsectionTitle';
    default:
      return 'sectionSubsectionTitle';
  }
};
