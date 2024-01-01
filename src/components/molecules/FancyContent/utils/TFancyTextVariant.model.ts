import { CSSProp } from 'styled-components';

import { TTypography } from '@/types/TTypography';
import { TThemeTypesNotTransparent } from '@/types/TThemeTypesNotTransparent';
import { TLayer } from '@/types/TLayer';

type IFancyContentTextProps = {
  children?: React.ReactNode;
  bold?: boolean;
  className?: string;
  externalStyle?: CSSProp;
  themeType?: TThemeTypesNotTransparent;
  layer?: TLayer;
};

type IFancyContentTextWithSizeProps = IFancyContentTextProps & {
  size?: 'sm' | 'md' | 'lg';
  fontVariant?: never;
};

type IFancyContentTextWithFontVariantProps = IFancyContentTextProps & {
  fontVariant?: TTypography;
  size?: never;
};

/**
 * Represents the type definition for the `TTextProps` type.
 * This type is a combination of `IFancyContentTextProps` and either `IFancyContentTextWithFontVariantProps` or `IFancyContentTextWithSizeProps`.
 */
export type TTextProps = IFancyContentTextProps &
  (IFancyContentTextWithFontVariantProps | IFancyContentTextWithSizeProps);
