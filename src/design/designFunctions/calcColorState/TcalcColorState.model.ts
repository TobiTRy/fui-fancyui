import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';

export type TColorState = {
  type: 'item' | 'text';
  isActive?: boolean;
  systemMessage?: TUiColorsSystemMessage;
  value?: string | number | readonly string[] | undefined;
  placeholder?: string;
};

export type TColorStateOutput = 'default' | 'active' | TUiColorsSystemMessage;
