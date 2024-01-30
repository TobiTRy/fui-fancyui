import { CSSProp } from 'styled-components';

import { TTypographyElList } from '@/types/TTypographyElList';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TLayer } from '@/types/TLayer';
import { TTypographyVariants } from '@/types/TTypographyVariants';

type IFancyContentTextProps = {
  children?: React.ReactNode;
  fontWeight?: number | string;
  className?: string;
  externalStyle?: CSSProp;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
};

type IFancyContentTextWithSizeProps = IFancyContentTextProps & {
  size?: 'sm' | 'md' | 'lg';
  fontVariant?: never;
  type?: never;
};

type IFancyContentTextWithFontVariantProps = IFancyContentTextProps & {
  type?: TTypographyElList;
  fontVariant?: TTypographyVariants;
  size?: never;
};

/**
 * Represents the type definition for the `TTextProps` type.
 * This type is a combination of `IFancyContentTextProps` and either `IFancyContentTextWithFontVariantProps` or `IFancyContentTextWithSizeProps`.
 */
export type TTextProps = IFancyContentTextProps &
  (IFancyContentTextWithFontVariantProps | IFancyContentTextWithSizeProps);
