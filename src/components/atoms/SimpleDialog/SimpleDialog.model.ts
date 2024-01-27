import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

// Define the props for the SimpleDialog component
type TSimpleDialog = {
  isOpen: boolean;
  children: React.ReactNode;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
} & React.HTMLAttributes<HTMLDivElement>;

export default TSimpleDialog;
