import { IEditBarIconButton } from "../../../Atoms/EditBarIcon/IEditBarIcon";
import { ICategoryItem, InputSettings } from "../EditBarItemsStructure/IEditbarObjectSturcture.model";

import FancyInput from "../../../Molecules/FancyInput/FancyInputOld";
import FancyDropDownSelect from "../../../Molecules/FancyDropDownSelect/FancyDropDownSelect";
import FancyRangeSlider from "../../../Templates/Inputs/FancyRangeSlider/FancyRangeSlider";
import FancyTabSwitch from "../../../Molecules/FancyTabSwitch/FancyTabSwitch";


// --------------------------------------------------------------------------- //
// --------- Give back a Element of the the specified item string ------------ //
// --------------------------------------------------------------------------- //
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
};

// --------------------------------------------------------------------------- //
// ------ get the items of SubSection based on the active category item ------ //
// --------------------------------------------------------------------------- //
interface IObjectMapper {
  activeEditbarCategory: ICategoryItem | null;
  activeSubSectionItem: string | null;
};

// Get settings based on active category of and the activeSubSectionItem
export const getObjectMapper = ({ activeEditbarCategory, activeSubSectionItem }: IObjectMapper): React.ReactElement[] | null => {
  //get the values and check if they there
  if (!activeEditbarCategory || !activeSubSectionItem) return null;

  //get the JSX SETTINGS from the currently ACTIVE CATEGORY ---> ACTIVE SUBSECTION  ---> and get the SETTINGS 
  const currentActiveSettings = activeEditbarCategory.subsectionSettingItems[activeSubSectionItem].settings

  //map the settings to JSX
  const JSXElements = currentActiveSettings ? currentActiveSettings.map(item => settingsToJSXMapper(item)) : null;

  return JSXElements;
};

// --------------------------------------------------------------------------- //
// ------ get the items of SubSection based on the active Section item ------- //
// --------------------------------------------------------------------------- //
interface ICategoryItems {
  activeEditbarCategory: ICategoryItem | null;
}

// Get the current sub-section items from the activeEditbarCategory
export const getSubSectionItems = ({activeEditbarCategory}: ICategoryItems): IEditBarIconButton[] | null => {
  if (!activeEditbarCategory) return null;
  const getSubsetionItems = activeEditbarCategory.subsectionSettingItems;

  //return the SubSectionItems of the values form the object 
  return Object.values(getSubsetionItems).map((item) => item.subsectionItem);
};
