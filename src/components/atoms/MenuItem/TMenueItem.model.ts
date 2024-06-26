import { CSSProp } from 'styled-components';
import { TComponentSizes } from '@/types/TComponentSizes';
import { TLayer } from '@/types/TLayer';
import { TTextAlignLC } from '@/types/TTextAlignLC';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TGenerateThemeForCardProps } from '@/design/designFunctions/generateThemeForCard';

type HTMLButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' };
type HTMLAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' };

export type TMenueItem = {
  children?: React.ReactNode;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  sizeC?: TComponentSizes;
  align?: TTextAlignLC;
  externalStyle?: CSSProp;
} & Omit<TGenerateThemeForCardProps, 'outlinedRemoveBorder'>;

export type TMenueItemNativeAttrs = HTMLButtonProps | HTMLAnchorProps;

export type TMenueItemWithHTMLAttrs = TMenueItem & TMenueItemNativeAttrs;
