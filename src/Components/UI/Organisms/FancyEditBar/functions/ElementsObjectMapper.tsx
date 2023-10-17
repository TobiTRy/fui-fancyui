import { IFancyBottomBarIcon } from '../../../Atoms/FancyBottomBarIcon/FancyBottomBarIcon.model';
import { ICategoryItem, InputSettings } from '../EditBarItemsStructure/IEditbarObjectSturcture.model';

import { FancyTextInput } from '../../FancyTextInput';
import FancyDropDownSelect from '../../FancyDropDownSelect/FancyDropDownSelect';
import FancyRangeSlider from '../../FancyRangeSlider/FancyRangeSlider';
import FancyTabSwitch from '../../../Molecules/FancyTabSwitch/FancyTabSwitch';

// --------------------------------------------------------------------------- //
// --------- Give back a Element of the the specified item string ------------ //
// --------------------------------------------------------------------------- //
const settingsToJSXMapper = (itemObject: InputSettings) => {
  const { settingsType, ...inputProps } = itemObject;
  console.log(inputProps);
  switch (settingsType) {
    case 'textInput':
      return <FancyTextInput {...inputProps} />;
    case 'dropDown':
      return <FancyDropDownSelect {...inputProps} />;
    case 'slider':
      return <FancyRangeSlider {...inputProps} />;
    case 'tab':
      return <FancyTabSwitch {...inputProps} />;
  }
};

// --------------------------------------------------------------------------- //
// ------ get the items of SubSection based on the active category item ------ //
// --------------------------------------------------------------------------- //
interface IObjectMapper {
  activeEditbarCategory: ICategoryItem | null;
  activeSubSectionItem: string | null;
}

// Get settings based on active category of and the activeSubSectionItem
export const getObjectMapper = ({ activeEditbarCategory, activeSubSectionItem }: IObjectMapper): React.ReactElement[] | null => {
  //get the values and check if they there
  if (!activeEditbarCategory || !activeSubSectionItem) return null;

  //get the JSX SETTINGS from the currently ACTIVE CATEGORY ---> ACTIVE SUBSECTION  ---> and get the SETTINGS
  const currentActiveSettings = activeEditbarCategory.subsectionSettingItems[activeSubSectionItem].settings;

  //map the settings to JSX
  const JSXElements = currentActiveSettings ? currentActiveSettings.map((item) => settingsToJSXMapper(item)) : null;

  return JSXElements;
};

// --------------------------------------------------------------------------- //
// ------ get the items of SubSection based on the active Section item ------- //
// --------------------------------------------------------------------------- //
interface ICategoryItems {
  activeEditbarCategory: ICategoryItem | null;
}

// Get the current sub-section items from the activeEditbarCategory
export const getSubSectionItems = ({ activeEditbarCategory }: ICategoryItems): IFancyBottomBarIcon[] | null => {
  if (!activeEditbarCategory) return null;
  const getSubsetionItems = activeEditbarCategory.subsectionSettingItems;

  //return the SubSectionItems of the values form the object
  return Object.values(getSubsetionItems).map((item) => item.subsectionItem);
};
