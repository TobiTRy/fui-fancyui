import React, { KeyboardEvent, useState } from 'react';
import { Chip, ChipContainer, ChipInput } from './ChipList.style';
import { TUiColorsType } from '../../Design/color/designColor';



export interface ChipListProps {
  themeType?: Exclude<keyof TUiColorsType, 'transparent'>
}

export default function ChipList(props: ChipListProps) {
  const { themeType = 'primary' } = props;
  const [chips, setChips] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const val = event.currentTarget.value.trim();
    if ((event.key === 'Enter' || event.key === ',') && val) {
      event.preventDefault();
      if (!chips.includes(val)) {
        // Prevents duplicate chips
        setChips([...chips, val]);
      }
      setInputValue('');
    } else if (event.key === 'Backspace' && !val) {
      // make the last chip to text again
      const lastChip = chips[chips.length - 1];
      setChips(chips.slice(0, chips.length - 1));
      setInputValue(lastChip || '');
    }

  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <ChipContainer >
      {chips.map((chip, index) => (
        <Chip key={index}>{chip}</Chip>
      ))}
      <li>
        <ChipInput $themeType={themeType} value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown} placeholder="Enter a chip..." />
      </li>
    </ChipContainer>
  );
}
