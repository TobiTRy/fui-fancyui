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
  switchValues: IinputValues[];
  currentSelect?: string;
  handler?: (value: string) => void;
  size?: 'sm' | 'md' | 'lg';
  tabSpacing?: keyof typeof spacingPx;
  outlined?: boolean;
}

//this interface hold the complete style propertys  
export interface IFancyTabStyle  {
  icon?: JSX.Element;
  iconAlign?: 'left' | 'right';
  rounded?: keyof typeof borderRadius; 
  roundedTabs?: boolean;

  itemObject: IinputValues;
  textColor?: keyof TUiColorsType;
  wide?: boolean;
  disabled?: boolean;
  selected?: boolean;
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
  handler: (position: string) => void;
}

//----------this are some specified types from the interfaces above----------//
//Gernerate the styled types for the component
type FancyTabSwitchStyle = IStyledPrefixAndPicker<IFancyTabStyle, 'wide' | 'rounded'  | 'roundedTabs'>
export type IFancyTabSwitchStyle = FancyTabSwitchStyle & Pick<IFancyTabStyle, 'disabled'>

//only props for the TabStyle
export type IFancyTabButtonStyle = Omit<IFancyTabStyle, 'itemObject' | 'handler'>;
//for all incomming props from the component
type IFancyTab = IFancyTabSwitchComponent & IFancyTabButtonStyle;

export default IFancyTab;