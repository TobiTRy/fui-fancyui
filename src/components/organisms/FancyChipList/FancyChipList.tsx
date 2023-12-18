import React, { KeyboardEvent, useState } from 'react';

import { TLayer } from '@/interface/TLayer';
import { ChipList } from '@/components/molecules/ChipList';
import { Fieldset } from '@/components/molecules/Fieldset';

import useChip from '@/components/organisms/FancyChipList/useChip.hook';

import FancyChip from '@/components/templates/FancyChip/FancyChip';
import { InputLi } from './FancyChipList.style';
import { ChipListProps } from './FancyChipListProps.model';

// The FancyChipList component definition
export default function FancyChipList(props: ChipListProps) {
  // Destructure props and provide default values from defaultProps
  const { themeType, layer, chips, inputPlaceholder, outlined, label, size, editable, systemInformation } = {
    ...defaultProps,
    ...props,
  };

  // State to hold chips with unique identifiers and input values
  const [inputValue, setInputValue] = useState('');
  const {
    chipsWithKeys,
    addChip,
    handleChipEdit,
    deleteChip,
    handleChipFocus,
    handleClick,
    editabledChip,
    removeLastChip,
  } = useChip(chips);

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

  return (
    <Fieldset label={label} fontVariantLegend="button">
      <ChipList themeType={themeType} layer={layer} outlined={true} size={size} systemMessage={systemInformation}>
        {/* // Mapping through each chip in the state to render a FancyChip */}
        {chipsWithKeys.map((chip, index) => (
          <li key={index}>
            <FancyChip
              role="textbox"
              aria-readonly={!editable}
              contentEditable={editabledChip === chip.id}
              tabIndex={0}
              layer={Math.min((layer ?? 1) + 2, 10) as TLayer}
              outlined={outlined}
              onFocus={handleChipFocus(chip.id)}
              onDoubleClick={(e) => handleClick(e, chip.id)}
              onKeyDown={(e) => handleChipEdit(chip.id, e)}
              label={chip.label}
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
            style={{ flexGrow: inputValue ? '' : '1' }}
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
