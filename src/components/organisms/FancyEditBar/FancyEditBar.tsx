import React, { useEffect, useState } from 'react';

import EditBar from '@/components/molecules/EditBar/EditBar';
import { mainSectionCreator } from './EditBarSettings';
import { useEditBarStore } from '@/components/molecules/EditBar/EditBar.state';

import { ICategory } from './EditBarItemsStructure/IEditbarObjectSturcture.model';
import { useFancyEditBarStore } from './FancyEditBar.state';
import { getObjectMapper, getSubSectionItems } from './functions/ElementsObjectMapper';

export default function FancyEditBar({ active, sectionType }: { active?: boolean; sectionType: 'header' | 'sectionBox' | 'background' }) {
  // Hooks to get and set state values from the edit bar store
  const currentEditBarItems = useFancyEditBarStore((state) => state.currentItems);
  const setCurrentEditBarItems = useFancyEditBarStore((state) => state.setCurrentItems);

  const activeEditbarItem = useEditBarStore((state) => state.activeEditbarItem);
  const setActiveEditbarItem = useEditBarStore((state) => state.setActiveEditbarItem);
  const activeSubSectionItem = useEditBarStore((state) => state.activeSecondEditbarItem);

  const activeEditbarCategory = useFancyEditBarStore((state) => state.activeEditbarCategory);
  const setActiveEditbarCategory = useFancyEditBarStore((state) => state.setActiveEditbarCategory);

  //thhe state with the current editbar items
  const [editBar, setEditBar] = useState<ICategory>();

  // Get sub-section items and settings
  const currentSubSectionItems = getSubSectionItems({ activeEditbarCategory });
  const currentSettings = getObjectMapper({ activeEditbarCategory, activeSubSectionItem });

  // Update activeEditbarCategory based on activeEditbarItem
  useEffect(() => {
    const getEditBarSetting = editBar?.find((item) => item.id === activeEditbarItem);

    setActiveEditbarCategory(getEditBarSetting || null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeEditbarItem]);

  // Reset activeEditbarItem when the active prop changes to false
  useEffect(() => {
    if (!active) {
      setActiveEditbarItem(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  // Update currentEditBarItems when the editBar state changes (when the sectionType changes)
  useEffect(() => {
    const currentEditBarItems = editBar?.map((item) => item.sectionItem);
    setCurrentEditBarItems(currentEditBarItems!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
