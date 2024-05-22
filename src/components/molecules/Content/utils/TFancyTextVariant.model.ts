import { CSSProp } from 'styled-components';

import { TTypographyElList } from '@/types/TTypographyElList';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TLayer } from '@/types/TLayer';
import { TTypographyVariants } from '@/types/TTypographyVariants';

type IFancyContentTextProps = {
  children?: React.ReactNode;
  fontWeight?: number | string;
  lineHeight?: number | string;
  className?: string;
  externalStyle?: CSSProp;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
};

type IFancyContentTextWithSizeProps = IFancyContentTextProps & {
  sizeC?: 'sm' | 'md' | 'lg';
  fontVariant?: never;
  type?: never;
};

type IFancyContentTextWithFontVariantProps = IFancyContentTextProps & {
  type?: TTypographyElList;
  fontVariant?: TTypographyVariants;
  sizeC?: never;
};

/**
 * Represents the type definition for the `TTextProps` type.
 * This type is a combination of `IFancyContentTextProps` and either `IFancyContentTextWithFontVariantProps` or `IFancyContentTextWithSizeProps`.
 */
export type TTextProps = IFancyContentTextProps &
  (IFancyContentTextWithFontVariantProps | IFancyContentTextWithSizeProps);
