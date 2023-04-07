import React, { useEffect, useState } from 'react';
import { IEditBarIconButton } from '../Atoms/EditBarIcon/IEditBarIcon';
import EditBar from '../Molecules/EditBar/EditBar';
import { ISectionBoxItem, mainSectionCreator } from '../Molecules/EditBar/EditBarSettings';
import { useEditBarStore } from '../Molecules/EditBar/EditBar.state';

import { ISectionSectionBox } from '../Molecules/EditBar/EditBarSettings';

interface IEditBarItemsStructure {
  mainBar: {
    mainItems: IEditBarIconButton[];
  };
  secondbar: {
    [key: string]: IEditBarIconButton[];
  };
}

const objectMapper2 = (activeEditbarCategory: ISectionBoxItem | null, activeSubSectionItem: string | null) : React.ReactNode[] | null => {
  if (!activeEditbarCategory) return null;
  if (!activeSubSectionItem) return null;
  const currentSettings = activeEditbarCategory.subsectionSettingItems[activeSubSectionItem].settings;

  return currentSettings;
};

const objectMapper = (activeEditbarCategory: ISectionBoxItem | null): IEditBarIconButton[] | null => {
  if (!activeEditbarCategory) return null;
  const currentSubSectionItems = [];

  for (const key in activeEditbarCategory.subsectionSettingItems) {
    const item = activeEditbarCategory.subsectionSettingItems[key];
    currentSubSectionItems.push(item.subsectionItem);
  }
  return currentSubSectionItems;
};

export default function EditBarModule({ active, sectionType }: { active: boolean; sectionType: 'header' | 'sectionBox' | 'background' }) {
  //TODO: HERE WE NEED A FUNCTION THAT DYNAMICLY SETS THE SECONDBAR WITH THE STATE FROM THE FIRST BAR
  //TDOD: Das Object soll genau so heißen wie das Setting in der main bar

  const currentEditBarItems = useEditBarStore((state) => state.currentItems);
  const setCurrentEditBarItems = useEditBarStore((state) => state.setCurrentItems);

  const activeEditbarItem = useEditBarStore((state) => state.activeEditbarItem);
  const activeSecondEditbarItem = useEditBarStore((state) => state.activeSecondEditbarItem);

  const activeEditbarCategory = useEditBarStore((state) => state.activeEditbarCategory);

  const setActiveEditbarCategory = useEditBarStore((state) => state.setActiveEditbarCategory);

  const [editBar, setEditBar] = useState<ISectionSectionBox>();

  const currentSubSectionItems = objectMapper(activeEditbarCategory);
  const currentSettings = objectMapper2(activeEditbarCategory, activeSecondEditbarItem);

  useEffect(() => {
    const getEditBarSetting = editBar?.find((item) => item.id === activeEditbarItem);

    setActiveEditbarCategory(getEditBarSetting || null);
    //Modfify the state to use the current object item and thena itterate over them
  }, [activeEditbarItem]);

  useEffect(() => {}, [activeSecondEditbarItem]);

  // useEffect(() => {
  //   //if the activeEditbarItem is not null, then set the current secondbar items to the type of the activeEditbarItem which is clicked
  //   if (activeEditbarItem !== null) setCurrentSecondBarItems(editBarItemsStruture.secondbar[activeEditbarItem]);
  // }, [activeEditbarItem]);

  useEffect(() => {
    const createDynamicSection = mainSectionCreator(sectionType);
    //transform this itms to a arry of objects with the IEditBarIconButton structure
    setEditBar(createDynamicSection);
    const currentEditBarItems = createDynamicSection!.map((item) => item.sctionItem);

    setCurrentEditBarItems(currentEditBarItems!);
  }, []);

  return <div>{active && <EditBar sectionItems={currentEditBarItems} subSectionItems={currentSubSectionItems} settings={currentSettings} />}</div>;
}
