import React, { KeyboardEvent, useState } from 'react';
import { Chip, ChipContainer, ChipInput } from './ChipList.style';

export default function ChipList() {
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
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <ChipContainer>
      {chips.map((chip, index) => (
        <Chip key={index}>{chip}</Chip>
      ))}
      <li>
        <ChipInput value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown} placeholder="Enter a chip..." />
      </li>
    </ChipContainer>
  );
}
