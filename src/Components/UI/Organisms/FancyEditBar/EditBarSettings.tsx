

import sectionSectionBox from './EditBarItemsStructure/objectSettingsSection'


// --------------------------------------------------------------------------- //
// ---------- Here are the design variants for sizing and alignment ---------- //
// --------------------------------------------------------------------------- //
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


