import { ElementType, LabelHTMLAttributes } from 'react';

import { TLayer } from '@/types/TLayer';
import { TTextAlignLRC } from '@/types/TTextAlignLRC';
import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TTypography } from '@/components/atoms/Typography/Typography.model';
import { TComponentSizes } from '@/types/TComponentSizes';

export type TAlignedLabelProps = {
  align?: TTextAlignLRC;
  systemMessageType?: TUiColorsSystemMessage;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  size?: TComponentSizes;
  ownTypographyComponent?: boolean;
};

// type for only the typography
type TTypographyOptionalVariant = {
  typography?: Partial<Pick<TTypography, 'variant'>> & Omit<TTypography, 'variant' | 'children' | 'elType'>;
};

// type for the label element
type HTMLAttributes = LabelHTMLAttributes<HTMLLabelElement> & { as?: ElementType };

// type for the whole component
export type TAlignedLabelWithAllProps = TAlignedLabelProps & TTypographyOptionalVariant & HTMLAttributes;
