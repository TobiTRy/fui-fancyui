import { TLayer } from '@/interface/TLayer';
import { TThemeTypes } from '@/interface/TThemeTypes';

// Define the props for the SimpleDialog component
type TSimpleDialog = {
  isOpen: boolean;
  children: React.ReactNode;
  themeType?: TThemeTypes;
  layer?: TLayer;
} & React.HTMLAttributes<HTMLDivElement>;

export default TSimpleDialog;
