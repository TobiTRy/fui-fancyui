import { TRawCheckbox } from '@/components/atoms/RawCheckbox/TRawCheckbox.model';
import { TTextAlignLRC } from '@/types/TTextAlignLRC';
import { TTextAlignLR } from '@/types/TTextAlignLR';

export type TFancyCheckbox = {
  label?: string;
  align?: TTextAlignLRC;
  alignCheckbox?: TTextAlignLR;
  description?: string;
} & TRawCheckbox;
