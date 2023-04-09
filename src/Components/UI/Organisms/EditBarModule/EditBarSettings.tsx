import React from "react";
import FancyInput from "../../Molecules/FancyInput/FancyInput";

import EditBarIconButton from "../../Atoms/EditBarIcon/EditBarIcon";
import { IEditBarIconButton } from "../../Atoms/EditBarIcon/IEditBarIcon";
import { useEditBarStore } from "../../Molecules/EditBar/EditBar.state";

import IFancyInput from "../../Molecules/FancyInput/FancyInput.model";
import IFancyDropDownSelect  from "../../Molecules/FancyDropDownSelect/IFancyDropDownSelect.model";
import IFancyRangeSlider from "../../Molecules/FancyRangeSlider/FancyRangeSlider.model";
import IFancyTab from "../../Molecules/FancyTabSwitch/IFancyTab.model";

import FancyDropDownSelect from "../../Molecules/FancyDropDownSelect/FancyDropDownSelect";
import FancyRangeSlider from "../../Molecules/FancyRangeSlider/FancyRangeSlider";
import FancyTabSwitch from "../../Molecules/FancyTabSwitch/FancyTabSwitch";

import buttonSettings from "./settings/ButtonSettings";
import { InputSettings } from "./settings/EditBarItemsStructure/IEditbarObjectSturcture.model";

import sectionSectionBox from './settings/EditBarItemsStructure/objectSettingsSection'



// --------------------------------------------------------------------------- //
// ---------- Here are the design variants for sizing and alignment ---------- //
// --------------------------------------------------------------------------- //
//TODO: I THINK THIS COULD BE DELETED
type SectionSettingKey = keyof typeof buttonSettings;
//this transforms a Stringarrray to Objects with the keys from the IEditBarIconButton interface
export function createButtonList(itemsArray: SectionSettingKey[]) {
  const buttonList = [];
  for (const item of itemsArray) {
    buttonList.push(buttonSettings[item]);
  }
  return buttonList;
}







const settingsToJSXMapper = (itemObject: InputSettings) => {
  const { settingsType } = itemObject;
  switch(settingsType) {
    case 'textInput':
      return <FancyInput {...itemObject}/>
    case 'dropDown':
      return <FancyDropDownSelect {...itemObject}/>
    case 'slider':
      return <FancyRangeSlider {...itemObject}/>
    case 'tab':
      return <FancyTabSwitch {...itemObject}/>
  };
}

export const loopJSXMapper = (itemObject: InputSettings[] | null)  => {
  if(!itemObject) return null;
  return itemObject.map(item => settingsToJSXMapper(item));
}


export const mainSectionCreator = (sectionFor: 'header' | 'sectionBox' | 'background') => {
  switch (sectionFor) {
    case 'header':
      //return sectionHeader;
      break;
    case 'sectionBox':
      return sectionSectionBox;
    case 'background':

      //return sectionBackground;
  }
}


