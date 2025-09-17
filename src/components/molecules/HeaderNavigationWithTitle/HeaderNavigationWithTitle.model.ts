import type { TFancySVGAtomSizes } from '@/components/atoms/FancySVGAtom';
import type { TFancyButtonWithHTMLAttrs } from '@/components/organisms/FancyButton/TFancyButton.model';
import type { TComponentSizes, TComponentSizesExtended } from '@/types/TComponentSizes';
import type { TTypographyVariants } from '@/types/TTypographyVariants';

export type HeaderNavigationWithTitleProps = {
  title: string;
  sizeC?: TComponentSizes;
  backButton?: TFancyButtonWithHTMLAttrs;
  forwardButton?: TFancyButtonWithHTMLAttrs;
  className?: string;
};

export type HeaderNavigationWithTitleNativeAttrs = React.HTMLAttributes<HTMLDivElement>;
