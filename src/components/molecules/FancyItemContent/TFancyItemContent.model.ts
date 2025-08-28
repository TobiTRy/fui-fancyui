import { TComponentSizesMid, TComponentSizes } from '@/types/TComponentSizes';
import { TUiColorsMain } from '@/types/TUiColorsMain';

/**
 * Interface for item data used in FancyItemContent
 */
export interface TItemContentData {
  id: string | number;
  title: string;
  description?: string;
  image?: string;
  icon?: React.ReactNode;
}

/**
 * Props for the FancyItemContent component
 */
export type TFancyItemContent = {
  item: TItemContentData;
  layoutMode?: 'normal' | 'stack' | 'row' | 'span' | 'auto';
  gapBetweenIcon?: TComponentSizesMid | '0';
  gapBetweenText?: TComponentSizesMid | '0';
  imageSize?: TComponentSizesMid;
  iconSize?: TComponentSizes;
  imageBorderRadius?: TComponentSizesMid;
  iconNoPadding?: boolean;
  themeType: TUiColorsMain;
};

/**
 * Props for FancyItemContent with HTML attributes
 */
export type TFancyItemContentWithHTMLProps = TFancyItemContent & React.HTMLAttributes<HTMLDivElement>;
