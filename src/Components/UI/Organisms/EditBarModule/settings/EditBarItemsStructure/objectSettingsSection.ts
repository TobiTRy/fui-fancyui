import buttonSettings from "../ButtonSettings"
import { ISection } from "./IEditbarObjectSturcture.model"

const sectionSectionBox: ISection = [
  {
    id: "distance",
    sectionItem: buttonSettings.distance,
    subsectionSettingItems: {
      distanceVertical: {
        subsectionItem: buttonSettings.distanceVertical,
        settings: [
          {
            settingsType: "textInput",
            type: "text",
            label: "Test1",
            align: "center",
          },
          {
            settingsType: "textInput",
            type: "text",
            label: "Test1",
            align: "center",
          },
        ],
      },
      distanceHorizontal: {
        subsectionItem: buttonSettings.distanceHorizontal,
        settings: [
          {
            settingsType: "textInput",
            type: "text",
            label: "Test",
            align: "center",
          },
          {
            settingsType: "textInput",
            type: "text",
            label: "Test",
            align: "center",
          },
        ],
      },
      distanceLeft: {
        subsectionItem: buttonSettings.distanceLeft,
        settings: [
          {
            settingsType: "textInput",
            type: "text",
            label: "Test",
            align: "center",
          },
          {
            settingsType: "textInput",
            type: "text",
            label: "Test",
            align: "center",
          },
        ],
      },
      distanceRight: {
        subsectionItem: buttonSettings.distanceRight,
        settings: [
          {
            settingsType: "textInput",
            type: "text",
            label: "Test",
            align: "center",
          },
          {
            settingsType: "dropDown",
            label: "Test",
          },
        ],
      },
    },
  },
  {
    id: "shadow",
    sectionItem: buttonSettings.shadow,
    subsectionSettingItems: {
      shadowPosition: {
        subsectionItem: buttonSettings.shadow,
        settings: [
          {
            settingsType: "textInput",
            type: "text",
            label: "Test",
            align: "center",
          },
          {
            settingsType: "textInput",
            type: "text",
            label: "Test",
            align: "center",
          },
        ],
      },
      shadowStrength: {
        subsectionItem: buttonSettings.strength,
        settings: [
          {
            settingsType: "textInput",
            type: "text",
            label: "Test",
            align: "center",
          },
          {
            settingsType: "textInput",
            type: "text",
            label: "Test",
            align: "center",
          },
        ],
      },
      shadowColor: {
        subsectionItem: buttonSettings.color,
        settings: [
          {
            settingsType: "textInput",
            type: "text",
            label: "Test",
            align: "center",
          },
          {
            settingsType: "textInput",
            type: "text",
            label: "Test",
            align: "center",
          },
        ],
      },
    },
  },
];

export default sectionSectionBox;
