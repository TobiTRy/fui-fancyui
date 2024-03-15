import { CSSProp } from 'styled-components';
import { TLayer } from '@/types/TLayer';
import { TTextAlignLC } from '@/types/TTextAlignLC';
import { TTextAlignLRC } from '@/types/TTextAlignLRC';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TProgressBar } from '@/components/atoms/ProgressBar';

export type TFancyProgressBar = {
  label?: string;
  labelAlign?: TTextAlignLC;
  progressCount?: boolean;
  progressAlign?: TTextAlignLRC;
  themeTypeText?: TUiColorsNotTransparent;
  textLayer?: TLayer;
  layer?: TLayer;
  externalStyle?: CSSProp;
} & TProgressBar;

export type TFancyProgressBarWithHTMLAttrs = TFancyProgressBar & React.HTMLAttributes<HTMLDivElement>;
