'use client';

import React, { KeyboardEvent, useEffect, useState } from 'react';

import { TLayer } from '@/types/TLayer';
import { ChipList } from '@/components/molecules/ChipList';
import { Fieldset } from '@/components/molecules/Fieldset';

import { useChip } from '@/components/organisms/FancyChipList/utils/useChip.hook';

import { FancyChip } from '@/components/templates/FancyChip';
import { InputLi } from './FancyChipList.style';
import { TFancyChipList } from './FancyChipList.model';

// The FancyChipList component definition
export default function FancyChipList(props: TFancyChipList) {
  // Destructure props and provide default values from defaultProps
  const {
    themeType = 'primary',
    layer = 1,
    chips = [],
    inputPlaceholder,
    outlined,
    legend,
    sizeC = 'md',
    editable,
    systemInformation,
    onChange,
  } = props;

  // State to hold chips with unique identifiers and input values
  const [inputValue, setInputValue] = useState('');
  const {
    addChip,
    handleChipEdit,
    deleteChip,
    handleChipFocus,
    focusedChip,
    handleClick,
    editabledChip,
    removeLastChip,
  } = useChip(chips, onChange);

  // Function to handle input keydown events for adding and removing chips
  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const val = event.currentTarget.value.trim();
    if ((event.key === 'Enter' || event.key === ',') && val) {
      event.preventDefault();
      addChip(val);
      setInputValue('');
    } else if (event.key === 'Backspace' && !val && chips.length) {
      // On backspace, if input is empty, remove the last chip and add its label to the input
      const lastChip = chips[chips.length - 1];
      setInputValue(lastChip.label + ' '); // Add a space to prevent cursor from immediately jumping back into the chip input
      removeLastChip();
    }
  };

  // Function to handle changes in the input field
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <Fieldset legend={legend} typographySettings={{ variant: 'interactiveLg' }}>
      <ChipList themeType={themeType} layer={layer} outlined={outlined} sizeC={sizeC} systemMessage={systemInformation}>
        {/* // Mapping through each chip in the state to render a FancyChip */}
        {chips.map((chip, index) => (
          <li key={index}>
            <FancyChip
              isHoverable
              tabIndex={0}
              isActive={focusedChip === chip.id}
              role="textbox"
              label={chip.label}
              aria-readonly={!editable}
              contentEditable={editabledChip === chip.id}
              layer={Math.min((layer ?? 1) + 2, 10) as TLayer}
              outlined={outlined}
              onBlur={() => handleChipFocus(chip.id)}
              onFocus={() => handleChipFocus(chip.id)}
              onClick={(e) => handleClick(e, chip.id)}
              onKeyDown={(e) => handleChipEdit(chip.id, e)}
              onDelete={deleteChip(chip.id)}
            />
          </li>
        ))}
        <InputLi>
          <input
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            placeholder={inputPlaceholder}
          />
        </InputLi>
      </ChipList>
    </Fieldset>
  );
}
