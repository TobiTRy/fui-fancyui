import React, { useEffect, useState } from 'react';
import { IEditBarIconButton } from '../../Atoms/EditBarIcon/IEditBarIcon';
import EditBar from '../../Molecules/EditBar/EditBar';
import { mainSectionCreator } from './EditBarSettings';
import { useEditBarStore } from '../../Molecules/EditBar/EditBar.state';

import { loopJSXMapper } from './EditBarSettings';
import { ISection } from './settings/EditBarItemsStructure/IEditbarObjectSturcture.model';
import { ISectionItem } from './settings/EditBarItemsStructure/IEditbarObjectSturcture.model';
import { useEditBarModuleStore } from './EditBarModule.state';

// Get settings based on activeEditbarCategory and activeSubSectionItem
const getObjectMapper = (activeEditbarCategory: ISectionItem | null, activeSubSectionItem: string | null): React.ReactNode[] | null => {
  if (!activeEditbarCategory || !activeSubSectionItem) return null;
  const JSXElements = loopJSXMapper(activeEditbarCategory.subsectionSettingItems[activeSubSectionItem].settings);
  return JSXElements;
};

// Get the current sub-section items from the activeEditbarCategory
const getSubSectionItems = (activeEditbarCategory: ISectionItem | null): IEditBarIconButton[] | null => {
  if (!activeEditbarCategory) return null;
  return Object.values(activeEditbarCategory.subsectionSettingItems).map((item) => item.subsectionItem);
};

export default function EditBarModule({ active, sectionType }: { active: boolean; sectionType: 'header' | 'sectionBox' | 'background' }) {
  // Hooks to get and set state values from the edit bar store
  const currentEditBarItems = useEditBarModuleStore((state) => state.currentItems);
  const setCurrentEditBarItems = useEditBarModuleStore((state) => state.setCurrentItems);

  const activeEditbarItem = useEditBarStore((state) => state.activeEditbarItem);
  const setActiveEditbarItem = useEditBarStore((state) => state.setActiveEditbarItem);
  const activeSecondEditbarItem = useEditBarStore((state) => state.activeSecondEditbarItem);

  const activeEditbarCategory = useEditBarModuleStore((state) => state.activeEditbarCategory);
  const setActiveEditbarCategory = useEditBarModuleStore((state) => state.setActiveEditbarCategory);

  const [editBar, setEditBar] = useState<ISection>();

  // Get sub-section items and settings
  const currentSubSectionItems = getSubSectionItems(activeEditbarCategory);
  const currentSettings = getObjectMapper(activeEditbarCategory, activeSecondEditbarItem);

  // Update activeEditbarCategory based on activeEditbarItem
  useEffect(() => {
    const getEditBarSetting = editBar?.find((item) => item.id === activeEditbarItem);

    setActiveEditbarCategory(getEditBarSetting || null);
  }, [activeEditbarItem]);

  // Reset activeEditbarItem when the active prop changes to false
  useEffect(() => {
    if (!active) {
      setActiveEditbarItem(null);
    }
  }, [active]);

  // Update currentEditBarItems when the editBar state changes (when the sectionType changes)
  useEffect(() => {
    const currentEditBarItems = editBar?.map((item) => item.sectionItem);
    setCurrentEditBarItems(currentEditBarItems!);
  }, [editBar]);

  // Initialize editBar and currentEditBarItems based on sectionType
  useEffect(() => {
    // Generate the edit bar based on the sectionType Image / Section / Background
    const createDynamicSection = mainSectionCreator(sectionType);
    setEditBar(createDynamicSection);
  }, [sectionType]);

  // Render the EditBar component if active
  return (
    <div>
      {active && <EditBar sectionItems={currentEditBarItems} subSectionItems={currentSubSectionItems} settings={currentSettings} />}
    </div>
  );
}
