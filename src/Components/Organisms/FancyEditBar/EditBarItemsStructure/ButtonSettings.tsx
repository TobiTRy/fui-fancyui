import editBarIcons from './EditBarIcons';
import { languagesEditBarEN } from '../languagesEditBar';
const language = languagesEditBarEN;
import { IFancyBottomBarIcon } from '../../../templates/FancyBottomBarIcon/FancyBottomBarIcon';
import { useEditBarStore } from '../../../molecules/EditBar/EditBar.state';

const setActiveBarItem = useEditBarStore.getState().setActiveEditbarItem;
const setActiveSecondBarItem = useEditBarStore.getState().setActiveSecondEditbarItem;

type TButtonSettings = {
  [key: string]: IFancyBottomBarIcon;
};

const groupButtons: TButtonSettings = {
  color: {
    id: 'color',
    label: language.sectionSectionBox.color.label,
    icon: editBarIcons.color,
    onClick: () => setActiveBarItem('color'),
  },
  distance: {
    id: 'distance',
    label: language.sectionSectionBox.distance.label,
    icon: editBarIcons.distance,
    onClick: () => setActiveBarItem('distance'),
  },
  border: {
    id: 'border',
    label: language.sectionSectionBox.border.label,
    icon: editBarIcons.border,
    onClick: () => setActiveBarItem('border'),
  },
  shadow: {
    id: 'shadow',
    label: language.sectionSectionBox.shadow.label,
    icon: editBarIcons.shadow,
    onClick: () => setActiveBarItem('shadow'),
  },
};

const buttonSettings: TButtonSettings = {
  color: {
    id: 'color',
    label: language.sectionSectionBox.color.label,
    icon: editBarIcons.color,
    onClick: () => setActiveSecondBarItem('color'),
  },
  distanceVertical: {
    id: 'distanceVertical',
    label: language.settings.distanceVertical.label,
    icon: editBarIcons.distanceVertical,
    onClick: () => setActiveSecondBarItem('distanceVertical'),
  },
  distanceHorizontal: {
    id: 'distanceHorizontal',
    label: language.settings.distanceHorizontal.label,
    icon: editBarIcons.distanceHorizontal,
    onClick: () => setActiveSecondBarItem('distanceHorizontal'),
  },
  distanceLeft: {
    id: 'distanceLeft',
    label: language.settings.distanceLeft.label,
    icon: editBarIcons.distanceLeft,
    onClick: () => setActiveSecondBarItem('distanceLeft'),
  },
  distanceRight: {
    id: 'distanceRight',
    label: language.settings.distanceRight.label,
    icon: editBarIcons.distanceRight,
    onClick: () => setActiveSecondBarItem('distanceRight'),
  },
  distanceTop: {
    id: 'distanceTop',
    label: language.settings.distanceTop.label,
    icon: editBarIcons.distanceTop,
    onClick: () => setActiveSecondBarItem('distanceTop'),
  },
  distanceBottom: {
    id: 'distanceBottom',
    label: language.settings.distanceBottom.label,
    icon: editBarIcons.distanceBottom,
    onClick: () => setActiveSecondBarItem('distanceBottom'),
  },
  thikness: {
    id: 'thikness',
    label: language.settings.thikness.label,
    icon: editBarIcons.thikness,
    onClick: () => setActiveSecondBarItem('thikness'),
  },
  radius: {
    id: 'radius',
    label: language.settings.radius.label,
    icon: editBarIcons.radius,
    onClick: () => setActiveSecondBarItem('radius'),
  },
  strength: {
    id: 'strength',
    label: language.settings.strength.label,
    icon: editBarIcons.thikness,
    onClick: () => setActiveSecondBarItem('strength'),
  },
};

export default buttonSettings;
export { groupButtons };
