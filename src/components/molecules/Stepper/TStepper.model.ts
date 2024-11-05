import { TSpacings } from '@/types/TSpacings';
import { TFlexDirection } from '@/types/TFlexDirection';
import { TActionItem, TActionItemButton } from '@/components/molecules/ActionItem';
import { TDirection } from '@/components/atoms/FancyLine/TFancyLine.model';

export type TActionItemModified = Omit<
  TActionItem,
  'items' | 'icon' | 'label' | 'isClickable' | 'isActive' | 'onClick' | 'disabled'
>;

export type TSteperItem = Omit<TActionItemButton, 'isClickable' | 'isActive'>;

export type TStepper = {
  steps: TSteperItem[];
  activeStep?: number;
  flexDirection?: TFlexDirection;
  lineLength?: string;
  gap?: TSpacings;
  thinkness?: string;
} & TActionItemModified;

export type TFlexToDirectionMapper = Record<TFlexDirection, TDirection>;

export const FlexToDirectionMapper: TFlexToDirectionMapper = {
  row: 'horizontal',
  column: 'vertical',
  'column-reverse': 'vertical',
  'row-reverse': 'horizontal',
};
