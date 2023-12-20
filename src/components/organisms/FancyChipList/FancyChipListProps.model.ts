import { TLayer } from '@/interface/TLayer';
import { TThemeTypesNotTransparent } from '@/interface/TThemeTypesNotTransparent';
import { TUiColorsSystemMessage } from '@/interface/TUiColorsSystemMessage';

// Defining the interface for the component's props
export interface ChipListProps {
  themeType?: TThemeTypesNotTransparent;
  systemInformation?: TUiColorsSystemMessage;
  layer?: TLayer;
  outlined?: boolean;
  chips?: TChip[];
  inputPlaceholder?: string;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  editable?: boolean;
  handler?: (chips: TChip[]) => void;
}

// Define the type for the chips with an id and label
export type TChip = {
  id: string;
  label: string;
};
