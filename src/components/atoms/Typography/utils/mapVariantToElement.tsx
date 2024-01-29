import { TypographyList } from '../Typography.style';
import { TTypographyNewList } from '@/components/atoms/Typography/Typography.model';

export const mapVariantToElement = (variant: TTypographyNewList, type?: keyof typeof TypographyList) => {
  // when type is set, return the element from the TypographyList
  if (type) return TypographyList[type];

  // when type is not set, return the element based on the variant
  switch (variant) {
    case 'displayHero':
      return TypographyList.h1;
    case 'displayHeadline':
      return TypographyList.h1;
    case 'displayTitle':
      return TypographyList.h2;
    case 'sectionTitle':
      return TypographyList.h2;
    case 'sectionSubtitle':
      return TypographyList.h3;
    case 'sectionSubsectionTitle':
      return TypographyList.h4;
    case 'bodytextLg':
    case 'bodytextMd':
    case 'bodytextSm':
      return TypographyList.p;
    case 'subTextLegal':
      return TypographyList.small;
    case 'subTextCaption':
    case 'subTextFootnote':
    case 'interactiveLg':
    case 'interactiveMd':
    case 'interactiveSm':
      return TypographyList.span;
  }
};
