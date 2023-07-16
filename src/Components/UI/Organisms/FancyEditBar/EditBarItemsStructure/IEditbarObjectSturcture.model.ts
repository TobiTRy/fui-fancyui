import { IFancyBottomBarIcon } from '../../../Atoms/FancyBottomBarIcon/FancyBottomBarIcon.model';
import IFancyDropDownSelect from '../../FancyDropDownSelect/FancyDropDownSelect.model';
import IFancyInput from '../../../Molecules/FancyInput/FancyInput.model';
import IFancyRangeSlider from '../../FancyRangeSlider/FancyRangeSlider.model';
import IFancyTab from '../../../Molecules/FancyTabSwitch/IFancyTab.model';

// --------------------------------------------------------------------------- //
// ---------- thes interfaces map the strings and JSX Item together ---------- //
// --------------------------------------------------------------------------- //

//the input types wich the editbar can have
interface ISettingsItem {
  settingsType: 'textInput' | 'select' | 'slider' | 'dropDown' | 'tab';
}

//---------- The mapped interfaces ----------//
interface IDropDown extends ISettingsItem, IFancyDropDownSelect {
  settingsType: 'dropDown';
}

interface ITextInput extends ISettingsItem, IFancyInput {
  settingsType: 'textInput';
}

interface IRangeSlider extends ISettingsItem, IFancyRangeSlider {
  settingsType: 'slider';
}

interface ITab extends ISettingsItem, IFancyTab {
  settingsType: 'tab';
}

// types which the settings array can have
export type InputSettings = ITextInput | IDropDown | IRangeSlider | ITab;

// SubsectionSettingItem interface
//One Item has a subsectionItem(title, icon etc.) and settings (input, select, slider etc.) array
interface SubsectionSettingItem {
  subsectionItem: IFancyBottomBarIcon;
  settings: Array<InputSettings> | null;
}

// SubsectionSettingItems interface
interface SubsectionSettingItems {
  [key: string]: SubsectionSettingItem;
}

// ISectionItem interface
export interface ICategoryItem {
  id: string;
  sectionItem: IFancyBottomBarIcon;
  subsectionSettingItems: SubsectionSettingItems;
}

// ISection type
export type ICategory = ICategoryItem[];
