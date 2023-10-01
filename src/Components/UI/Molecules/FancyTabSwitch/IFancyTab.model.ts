import { TUiColorsType } from "../../Design/color/designColor";
import { TLayer } from "../../Design/color/generateColorSteps";
import { borderRadius } from "../../Design/design";
import { spacingPx } from "../../Design/design";
import IStyledPrefixAndPicker from "../../Interface/IStyledPrefixAndPicker.model";

//this type accepts a value or Icon (or booth) and needed a key
export interface IinputValues {
  key: string;
  label?: string;
  icon?: JSX.Element;
}

//this interface is only for the componet
export interface IFancyTabSwitchComponent {
  label?: string;
  switchValues: IinputValues[];
  currentSelect?: string;
  onChange?: (value: string) => void;
  size?: 'sm' | 'md' | 'lg';
  tabSpacing?: keyof typeof spacingPx;
  outlined?: boolean;
  themeType?: keyof TUiColorsType;
  activeColor?: keyof TUiColorsType;
  iconAlign?: 'left' | 'right';
  rounded?: keyof typeof borderRadius; 
  wide?: boolean;
  disabled?: boolean;
  selected?: boolean;
  textColor?: keyof TUiColorsType;
  layer?: TLayer;
  direction?: 'horizontal' | 'vertical';
}

//for all incomming props from the component
type IFancyTab = IFancyTabSwitchComponent ;

export default IFancyTab;