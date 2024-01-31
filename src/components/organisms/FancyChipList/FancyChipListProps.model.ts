import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';

// Defining the interface for the component's props
export interface ChipListProps {
  themeType?: TUiColorsNotTransparent;
  systemInformation?: TUiColorsSystemMessage;
  layer?: TLayer;
  outlined?: boolean;
  chips?: TChip[];
  inputPlaceholder?: string;
  label?: string;
  sizeC?: 'sm' | 'md' | 'lg';
  editable?: boolean;
  handler?: (chips: TChip[]) => void;
}

// Define the type for the chips with an id and label
export type TChip = {
  id: string;
  label: string;
};
