import { TActionItemButton, TActionItemSetting } from '@/components/molecules/ActionItem/TActionItem.model';

export type TFancySpeedDailButton = {
  items?: TActionItemButton[];
} & Omit<TActionItemSetting, 'labelAlign' | 'onClick'> & { labelAlign?: 'left' | 'right' };
