import { TLayer } from '@/types/TLayer';
import { TThemeTypesNotTransparent } from '@/types/TThemeTypesNotTransparent';

// Define the props for the SimpleDialog component
type TSimpleDialog = {
  isOpen: boolean;
  children: React.ReactNode;
  themeType?: TThemeTypesNotTransparent;
  layer?: TLayer;
} & React.HTMLAttributes<HTMLDivElement>;

export default TSimpleDialog;
