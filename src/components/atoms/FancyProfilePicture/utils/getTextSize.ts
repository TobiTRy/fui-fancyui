import { TSize } from '@/components/molecules/TextAvatar/utils/getSize';
import { TTypographyVariants } from '@/types/TTypographyVariants';

// generate the text size based on the size prop
export const getTextSize = (size: TSize | string): TTypographyVariants => {
  switch (size) {
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
