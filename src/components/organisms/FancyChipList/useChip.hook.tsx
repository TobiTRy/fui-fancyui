import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TChip } from '@/components/organisms/FancyChipList/FancyChipListProps.model';

const useChip = (chips?: string[]) => {
  const [chipsWithKeys, setChipsWithKeys] = useState<TChip[]>([]);
  const [focusedChip, setFocusedChip] = useState('');
  const [editabledChip, setEditabledChip] = useState('');

  // Effect to initialize chipsWithKeys state when the chips prop changes
  useEffect(() => {
    setChipsWithKeys(chips!.map((label) => ({ id: uuidv4(), label })));
  }, [chips]);

  // Function to add a new chip
  const addChip = (label: string) => {
    setChipsWithKeys((prev) => [...prev, { id: uuidv4(), label }]);
  };

  // Function to delete a chip, curried to provide the chip id
  const deleteChip = (chipToDelete: string) => () => {
    setChipsWithKeys(chipsWithKeys.filter((chip) => chip.id !== chipToDelete));
  };

  const removeLastChip = () => {
    setChipsWithKeys((prev) => prev.slice(0, -1));
  }

  // Function to set the focused chip
  const hanleChipFocus = (chipId: string) => () => {
    setFocusedChip(chipId);
  };

  // Function to update the label of a chip
  const updateChipLabel = (chipId: string, newLabel: string) => {
    setChipsWithKeys((prev) => prev.map((chip) => (chip.id === chipId ? { ...chip, label: newLabel } : chip)));
  };

  // Function to handle editing of a chip label through keyboard events
  const handleChipEdit = (chipId: string) => (e: React.KeyboardEvent<HTMLDivElement>) => {
    // If the user pressed the enter key, confirm the edit and remove focus
    if (e.key === 'Enter' && focusedChip) {
      setEditabledChip(focusedChip);
    } else if ((e.key === 'Enter' || e.key === ',') && chipId === focusedChip) {
      e.preventDefault();
      updateChipLabel(chipId, (e.target as HTMLDivElement).innerText);
      setFocusedChip('');
      (e.target as HTMLDivElement).blur();
    }
  };

  return {
    addChip,
    handleChipEdit,
    deleteChip,
    hanleChipFocus,
    focusedChip,
    editabledChip,
    chipsWithKeys,
    removeLastChip,
  };
};

export default useChip;
