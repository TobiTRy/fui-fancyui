import buttonSettings, {groupButtons} from './ButtonSettings';
import { ICategory } from './IEditbarObjectSturcture.model';

//Dummy Category Box for demonstration
//the item is build up with three categories [mainCategoryItems (Arry) ---> SubSectionItems(Object) ---> Settings ---> ]
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dummyItem = [
  {
    //the CategoryItem is build up in SectionItem(displayed for the bar) and the SubsectionSettingItems
    id: 'distance',
    sectionItem: buttonSettings.distance,
    subsectionSettingItems: {
      //here are listed the items for the subsection (not in an array but in an object)

      distanceVertical: {
        // this is like one SubSection Items looks like SectionItem and the settings array
        subsectionItem: buttonSettings.distanceVertical,
        settings: [
          //this is the settings array this sttings are displayed on the modal over the editbar
          {
            settingsType: 'textInput',
            type: 'text',
            label: 'Test1',
            align: 'center',
          },
          {
            settingsType: 'textInput',
            type: 'text',
            label: 'Test1',
            align: 'center',
          },
        ],
      }

    },
  },
];

const sectionSectionBox: ICategory = [
  {
    id: 'distance',
    sectionItem: groupButtons.distance,
    subsectionSettingItems: {
      distanceVertical: {
        subsectionItem: buttonSettings.distanceVertical,
        settings: [
          {
            settingsType: 'textInput',
            label: 'Test1',
            align: 'center',
          },
          {
            settingsType: 'textInput',
            label: 'Test1',
            align: 'center',
          },
        ],
      },
      distanceHorizontal: {
        subsectionItem: buttonSettings.distanceHorizontal,
        settings: [
          {
            settingsType: 'textInput',
            label: 'Test',
            align: 'center',
          },
          {
            settingsType: 'textInput',
            label: 'Test',
            align: 'center',
          },
        ],
      },
      distanceLeft: {
        subsectionItem: buttonSettings.distanceLeft,
        settings: [
          {
            settingsType: 'textInput',
            label: 'Test',
            align: 'center',
          },
          {
            settingsType: 'textInput',
            label: 'Test',
            align: 'center',
          },
        ],
      },
      distanceRight: {
        subsectionItem: buttonSettings.distanceRight,
        settings: [
          {
            settingsType: 'textInput',
            label: 'Test',
            align: 'center',
          },
          {
            settingsType: 'dropDown',
            label: 'Test',
          },
        ],
      },
    },
  },
  {
    id: 'shadow',
    sectionItem: groupButtons.shadow,
    subsectionSettingItems: {
      shadowPosition: {
        subsectionItem: buttonSettings.shadow,
        settings: [
          {
            settingsType: 'textInput',
            label: 'Test',
            align: 'center',
          },
          {
            settingsType: 'textInput',
            label: 'Test',
            align: 'center',
          },
        ],
      },
      shadowStrength: {
        subsectionItem: buttonSettings.strength,
        settings: [
          {
            settingsType: 'textInput',
            label: 'Test',
            align: 'center',
          },
          {
            settingsType: 'textInput',
            label: 'Test',
            align: 'center',
          },
        ],
      },
      shadowColor: {
        subsectionItem: buttonSettings.color,
        settings: [
          {
            settingsType: 'textInput',
            label: 'Test',
            align: 'center',
          },
          {
            settingsType: 'textInput',
            label: 'Test',
            align: 'center',
          },
        ],
      },
    },
  },
];

export default sectionSectionBox;
