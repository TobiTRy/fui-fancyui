import React, { KeyboardEvent, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { TLayer } from '@/interface/TLayer';

import { Fieldset } from '@/components/molecules/Fieldset';
import { ChipList } from '@/components/molecules/ChipList';
import { FancyChip } from '@/components/organisms/FancyChip';
import useChip from '@/components/organisms/FancyChipList/useChip.hook';

import { InputLi } from './FancyChipList.style';
import { ChipListProps, TChip } from './FancyChipListProps.model';

// The FancyChipList component definition
export default function FancyChipList(props: ChipListProps) {
  // Destructure props and provide default values from defaultProps
  const { themeType, layer, outlined, chips, inputPlaceholder, label, size, systemInformation } = {
    ...defaultProps,
    ...props,
  };

  // State to hold chips with unique identifiers and input values
  const [inputValue, setInputValue] = useState('');
  const { chipsWithKeys, addChip, handleChipEdit, deleteChip, hanleChipFocus, editabledChip, removeLastChip } =
    useChip(chips);

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
      setInputValue(lastChip.label);
      removeLastChip();
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
            contentEditable={editabledChip === chip.id}
            tabIndex={0}
            layer={Math.min((layer ?? 1) + 2, 10) as TLayer}
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
