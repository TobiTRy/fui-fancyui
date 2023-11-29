import React from 'react';

import { IFancyBottomBarIcon } from '../../../Templates/FancyBottomBarIcon/FancyBottomBarIcon';
import FancyDropDownSelect from '../../FancyDropDownSelect/FancyDropDownSelect';
import FancyTextInput from '../../FancyTextInput/FancyTextInput';
import IFancyRangeSlider from '../../FancyRangeSlider/FancyRangeSlider.model';
import { ITabSwitchProps } from '../../../Molecules/TabSwitch/TabSwitch.model';

// --------------------------------------------------------------------------- //
// ---------- thes interfaces map the strings and JSX Item together ---------- //
// --------------------------------------------------------------------------- //

//the input types wich the editbar can have
interface ISettingsItem {
  settingsType: 'textInput' | 'select' | 'slider' | 'dropDown' | 'tab';
}

//---------- The mapped interfaces ----------//
export interface IDropDown extends ISettingsItem, React.ComponentProps<typeof FancyDropDownSelect> {
  settingsType: 'dropDown';
}

export interface ITextInput extends ISettingsItem, React.ComponentProps<typeof FancyTextInput> {
  settingsType: 'textInput';
}

export interface IRangeSlider extends ISettingsItem, IFancyRangeSlider {
  settingsType: 'slider';
}

export interface ITab extends ISettingsItem, ITabSwitchProps {
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
