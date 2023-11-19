import React, { KeyboardEvent, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Fieldset } from '../../Atoms/Fieldset';
import { TLayer } from '../../Design/color/generateColorSteps';
import ChipList from '../../Molecules/ChipList/ChipList';
import { FancyChip } from '../FancyChip';
import { InputLi } from './FancyChipList.style';
import { TUiColors, TUiColorsSystemMessage } from '@/Components/UI/Interface/TUiColors';

// Defining the interface for the component's props
export interface ChipListProps {
  themeType?: Exclude<TUiColors, 'transparent'>;
  systemInformation?: TUiColorsSystemMessage;
  layer?: TLayer;
  outlined?: boolean;
  chips?: string[];
  inputPlaceholder?: string;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
}

// Define the type for the chips with an id and label
type TChip = {
  id: string;
  label: string;
};

// The FancyChipList component definition
export default function FancyChipList(props: ChipListProps) {
  // Destructure props and provide default values from defaultProps
  const { themeType, layer, outlined, chips, inputPlaceholder, label, size, systemInformation } = { ...defaultProps, ...props };

  // State to hold chips with unique identifiers and input values
  const [chipsWithKeys, setChipsWithKeys] = useState<TChip[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [focusedChip, setFocusedChip] = useState('');

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
    if ((e.key === 'Enter' || e.key === ',') && chipId === focusedChip) {
      e.preventDefault();
      updateChipLabel(chipId, (e.target as HTMLDivElement).innerText);
      setFocusedChip('');
      (e.target as HTMLDivElement).blur();
    }
  };

  // Function to handle input keydown events for adding and removing chips
  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const val = event.currentTarget.value.trim();
    if ((event.key === 'Enter' || event.key === ',') && val) {
      event.preventDefault();
      addChip(val);
      setInputValue('');
    } else if (event.key === 'Backspace' && !val && chipsWithKeys.length) {
      // On backspace, if input is empty, remove the last chip and add its label to the input
      const lastChip = chipsWithKeys[chipsWithKeys.length - 1];
      setChipsWithKeys((prev) => prev.slice(0, -1));
      setInputValue(lastChip.label);
    }
  };

  // Function to handle changes in the input field
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // The component's JSX structure for rendering
  return (
    <Fieldset label={label} fontVariantLegend="button">
      <ChipList themeType={themeType} layer={layer} outlined={true} size={size} systemMessage={systemInformation}>
        {/* // Mapping through each chip in the state to render a FancyChip */}
        {chipsWithKeys.map((chip, index) => (
          <FancyChip
            key={index}
            size={size}
            label={chip.label}
            textColor="secondary"
            contentEditable={focusedChip === chip.id}
            tabIndex={0}
            layer={Math.min(layer! + 2, 10) as TLayer}
            onDelete={deleteChip(chip.id)}
            outlined={outlined}
            onFocus={hanleChipFocus(chip.id)}
            onKeyDown={handleChipEdit(chip.id)}
          ></FancyChip>
        ))}
        <InputLi>
          <input
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            placeholder={inputPlaceholder}
            style={{ width: inputValue ? inputValue.length + 'ch' : '', flexGrow: inputValue ? '' : '1' }}
          />
        </InputLi>
      </ChipList>
    </Fieldset>
  );
}
// Default properties for the FancyChipList component
const defaultProps: ChipListProps = {
  themeType: 'primary',
  layer: 1,
  chips: [],
  size: 'md',
};
