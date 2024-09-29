import { TTypographyVariants } from '@/types/TTypographyVariants';
import { TglobalElementSizesWithFit } from '@/design/theme/globalSizes';

// generate the text sizeC based on the sizeC prop
export const getTextSize = (sizeC: TglobalElementSizesWithFit | (string & {})): TTypographyVariants => {
  switch (sizeC) {
    case 'xxs':
    case 'xs':
      return 'subTextFootnote';
    case 'sm':
      return 'subTextCaption';
    case 'md':
      return 'bodytextSm';
    case 'lg':
      return 'bodytextMd';
    case 'xl':
    case 'xxl':
      return 'bodytextLg';
    default:
      return 'sectionSubsectionTitle';
  }
};
