import React from "react";
import FancyInput from "../FancyInput/FancyInput";

import EditBarIconButton from "../../Atoms/EditBarIcon/EditBarIcon";
import { IEditBarIconButton } from "../../Atoms/EditBarIcon/IEditBarIcon";
import { useEditBarStore } from "./EditBar.state";

import editBarIcons from "./EditBarIcons";
import { languagesEditBarEN } from "./languagesEditBar";
const language = languagesEditBarEN;




const sectionSetting = {
  color: {
    id: 'color',
    label: language.sectionSectionBox.color.label,
    icon: editBarIcons.color
  },
  distanceVertical: {
    id: 'distanceVertical',
    label: language.settings.distanceVertical.label,
    icon: editBarIcons.distanceVertical,
  },
  distanceHorizontal: {
    id: 'distanceHorizontal',
    label: language.settings.distanceHorizontal.label,
    icon: editBarIcons.distanceHorizontal,
  },
  distanceLeft: {
    id: 'distanceLeft',
    label: language.settings.distanceLeft.label,
    icon: editBarIcons.distanceLeft,
  },
  distanceRight: {
    id: 'distanceRight',
    label: language.settings.distanceRight.label,
    icon: editBarIcons.distanceRight,
  },
  distanceTop: {
    id: 'distanceTop',
    label: language.settings.distanceTop.label,
    icon: editBarIcons.distanceTop,
  },
  distanceBottom: {
    id: 'distanceBottom',
    label: language.settings.distanceBottom.label,
    icon: editBarIcons.distanceBottom,
  },
  thikness: {
    id: 'thikness',
    label: language.settings.thikness.label,
    icon: editBarIcons.thikness,
  },
  radius: {
    id: 'radius',
    label: language.settings.radius.label,
    icon: editBarIcons.radius,
  },
  strength: {
    id: 'strength',
    label: language.settings.strength.label,
    icon: editBarIcons.thikness,
  }
}

const sectionItems = {
  distance: {
    id: 'distance',
    label: language.sectionSectionBox.distance.label,
    icon: editBarIcons.distance,
  },
  border: {
    id: 'border',
    label: language.sectionSectionBox.border.label,
    icon: editBarIcons.border,
  },
  shadow: {
    id: 'shadow',
    label: language.sectionSectionBox.shadow.label,
    icon: editBarIcons.shadow,
  },
}


type SectionSettingKey = keyof typeof sectionSetting;
export function createButtonList(itemsArray: SectionSettingKey[]) {
  const buttonList = [];
  for (const item of itemsArray) {
    buttonList.push(sectionSetting[item]);
  }
  return buttonList;
}

// const sectionSectionBox:IEditBarIconButton[] = [
//   {
//     label: language.sectionSectionBox.distance.label,
//     icon: editBarIcons.distance,
//     handler: () => createButtonList(['distanceVertical', 'distanceHorizontal', 'distanceLeft', 'distanceRight', 'distanceTop', 'distanceBottom']),
//   },
//   {
//     label: language.sectionSectionBox.shadow.label,
//     icon: editBarIcons.shadow,
//   },
//   {
//     label: language.sectionSectionBox.border.label,
//     icon: editBarIcons.border,
//   },
// ]


// Define the Settings interface
interface Settings {
  [key: string]: any;
}

// Define the SubsectionSettingItem interface
interface SubsectionSettingItem {
  subsectionItem: IEditBarIconButton;
  settings: React.ReactNode[] | null;
}

// Define the SubsectionSettingItems interface
interface SubsectionSettingItems {
  [key: string]: SubsectionSettingItem;
}


// Define the SectionBoxItem interface
export interface ISectionBoxItem {
  id: string;
  sctionItem: IEditBarIconButton;
  subsectionSettingItems: SubsectionSettingItems;
}

// Finally, define the SectionSectionBox type as an array of SectionBoxItem
export type ISectionSectionBox = ISectionBoxItem[];





const sectionSectionBox: ISectionSectionBox = [
  {
    id: 'distance',
    sctionItem: sectionItems.distance,
    subsectionSettingItems: {
      distanceVertical: {
        subsectionItem: sectionSetting.distanceVertical,
        settings: [
          <FancyInput/>,
          <FancyInput/>,
        ],
      }, 
      distanceHorizontal: {
        subsectionItem: sectionSetting.distanceHorizontal,
        settings: [
          <FancyInput/>,
          <FancyInput/>,
        ]
      },
      distanceLeft: {
        subsectionItem: sectionSetting.distanceLeft,
        settings: [
          <FancyInput/>,
          <FancyInput/>,
        ]
      },
      distanceRight: {
        subsectionItem: sectionSetting.distanceRight,
        settings: [
          <FancyInput/>,
          <FancyInput/>,
        ]
      },

    },
  },
  { 
    id: 'shadow',
    sctionItem: sectionItems.shadow,
    subsectionSettingItems: {
      shadowPosition: {
        subsectionItem: sectionItems.shadow,
        settings: [
          <FancyInput/>,
          <FancyInput/>,
        ]
      }, 
      shadowStrength: {
        subsectionItem: sectionSetting.strength,
        settings: [
          <FancyInput/>,
          <FancyInput/>,
        ]
      },
      shadowColor: {
        subsectionItem: sectionSetting.color,
        settings: [
          <FancyInput/>,
          <FancyInput/>,
        ]
      },
    },
  },
]


// const sectionHeader = [
//   {
//     label: 'items2',
//     icon: svg2,
//     active: false,
//     handler: () => {},
//   },
//   {
//     label: 'items1',
//     icon: svg2,
//     active: false,
//     handler: () => {},
//   },
//   {
//     label: 'Test3',
//     icon: svg2,
//     active: false,
//     handler: () => {},
//   },
//   {
//     label: 'Test4',
//     icon: svg2,
//     active: false,
//     handler: () => {},
//   },
// ]




// const sectionBackground = [
//   {
//     label: 'items2',
//     icon: svg2,
//     active: false,
//     handler: () => {},
//   },
//   {
//     label: 'items1',
//     icon: svg2,
//     active: false,
//     handler: () => {},
//   },
//   {
//     label: 'Test3',
//     icon: svg2,
//     active: false,
//     handler: () => {},
//   },
//   {
//     label: 'Test4',
//     icon: svg2,
//     active: false,
//     handler: () => {},
//   },
// ]


function createSectionHeader() {}

function createSectionSectionBox() {}

function createSectionBackground() {}


export const subSectionCreator = (sectionFor: 'header' | 'sectionBox' | 'background') => {

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


