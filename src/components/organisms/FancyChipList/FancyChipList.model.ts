import { TLayer } from '@/types/TLayer';
import { TUiColorsMain } from '@/types/TUiColorsMain';

import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';

// Defining the interface for the component's props
export type TFancyChipList = {
  themeType?: TUiColorsMain;
  systemInformation?: TUiColorsSystemMessage;
  layer?: TLayer;
  outlined?: boolean;
  chips?: TChip[];
  inputPlaceholder?: string;
  legend?: string;
  sizeC?: 'sm' | 'md' | 'lg';
  editable?: boolean;
  onChange?: (chips: TChip[]) => void;
};

// Define the type for the chips with an id and label
export type TChip = {
  id: string;
  label: string;
};
