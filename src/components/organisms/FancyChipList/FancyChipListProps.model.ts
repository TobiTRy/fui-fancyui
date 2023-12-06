import { TLayer } from '@/interface/TLayer';
import { TThemeTypes } from '@/interface/TThemeTypes';
import { TUiColorsSystemMessage } from '@/interface/TUiColorsSystemMessage';

// Defining the interface for the component's props
export interface ChipListProps {
  themeType?: Exclude<TThemeTypes, 'transparent'>;
  systemInformation?: TUiColorsSystemMessage;
  layer?: TLayer;
  outlined?: boolean;
  chips?: string[];
  inputPlaceholder?: string;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
}

// Define the type for the chips with an id and label
export type TChip = {
  id: string;
  label: string;
};
