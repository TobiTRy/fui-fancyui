import { borderRadius } from "../../Design/design";
import { spacingPx } from "../../Design/design";

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
  handler: (value: string) => void;
}

//this interface hold the complete style propertys  
export interface IFancyTabStyle  {
  disabled?: boolean;
  icon?: JSX.Element;
  iconAlign?: 'left' | 'right';
  rounded?: keyof typeof borderRadius; 
  roundedTabs?: boolean;
  tabSpacing?: keyof typeof spacingPx;
  selected?: boolean;
  handler: (position: string) => void;
  itemObject: IinputValues;
  textColor?: 'bright' | 'dark';
  wide?: boolean;
  transparent?: boolean;
}

//----------this are some specified types from the interfaces above----------//
//the props for the list component
export type IFancyTabSwitchStyle = Pick<IFancyTabStyle, 'wide' | 'rounded' | 'transparent' | 'disabled' | 'roundedTabs' | 'tabSpacing'>
//only props for the TabStyle
export type IFancyTabButtonStyle = Omit<IFancyTabStyle, 'itemObject' | 'handler'>;
//for all incomming props from the component
type IFancyTab = IFancyTabSwitchComponent & IFancyTabButtonStyle;

export default IFancyTab;