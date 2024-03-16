import { HTMLAttributes } from 'react';

import { TTextAlignLC } from '@/types/TTextAlignLC';
import { TTypography } from '@/components/atoms/Typography';

export type TFieldset = {
  label?: string;
  alignLabel?: TTextAlignLC;
  typographySettings?: TTypography;
  disabled?: boolean;
};

export type TFieldsetWithHTMLAttributes = TFieldset & HTMLAttributes<HTMLFieldSetElement>;
