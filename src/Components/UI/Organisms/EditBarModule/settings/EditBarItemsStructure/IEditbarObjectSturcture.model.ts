import { IEditBarIconButton } from "../../../../Atoms/EditBarIcon/IEditBarIcon";
import IFancyDropDownSelect from "../../../../Molecules/FancyDropDownSelect/IFancyDropDownSelect.model";
import IFancyInput from "../../../../Molecules/FancyInput/FancyInput.model";
import IFancyRangeSlider from "../../../../Molecules/FancyRangeSlider/FancyRangeSlider.model";
import IFancyTab from "../../../../Molecules/FancyTabSwitch/IFancyTab.model";


interface ISettingsItem {
  settingsType: 'textInput' | 'select' | 'slider' | 'dropDown' | 'tab';
};

interface IDropDown extends ISettingsItem, IFancyDropDownSelect {
  settingsType: 'dropDown';
}

interface ITextInput extends ISettingsItem, IFancyInput {
  settingsType: 'textInput';
};

interface IRangeSlider extends ISettingsItem, IFancyRangeSlider {
  settingsType: 'slider';
}

interface ITab extends ISettingsItem, IFancyTab {
  settingsType: 'tab';
}

export type InputSettings = ITextInput | IDropDown | IRangeSlider | ITab;



// SubsectionSettingItem interface
interface SubsectionSettingItem {
  subsectionItem: IEditBarIconButton;
  settings: Array<InputSettings> | null;
}

// SubsectionSettingItems interface
interface SubsectionSettingItems {
  [key: string]: SubsectionSettingItem;
}

// ISectionItem interface
export interface ISectionItem {
  id: string;
  sectionItem: IEditBarIconButton;
  subsectionSettingItems: SubsectionSettingItems;
}

// ISection type
export type ISection = ISectionItem[];




