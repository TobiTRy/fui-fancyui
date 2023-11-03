import React, { useEffect, useState, KeyboardEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ChipList from '../../Molecules/ChipList/ChipList';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';
import { Fieldset } from '../../Atoms/Fieldset';
import { Typography } from '../../Atoms/Typography';
import { FancyChip } from '../FancyChip';
import { InputLi, LimitText } from './FancyChipList.style';

export interface ChipListProps {
  themeType?: Exclude<keyof TUiColorsType, 'transparent'>;
  layer?: TLayer;
  outlined?: boolean;
  chips?: string[];
  inputPlaceholder?: string;
  label?: string;
  limit?: number;
  size?: 'sm' | 'md' | 'lg';
}

type TChip = {
  id: string;
  label: string;
};

export default function FancyChipList(props: ChipListProps) {
  const { themeType = 'primary', layer = 1, outlined = false, chips = [], inputPlaceholder, label, limit = 50, size } = props;
  const [chipsWithKeys, setChipsWithKeys] = useState<TChip[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [focusedChip, setFocusedChip] = useState('');

  useEffect(() => {
    setChipsWithKeys(chips.map((label) => ({ id: uuidv4(), label })));
  }, [chips]);

  const addChip = (label: string) => {
    setChipsWithKeys((prev) => [...prev, { id: uuidv4(), label }]);
  };

  const deleteChip = (chipToDelete: string) => () => {
    setChipsWithKeys(chipsWithKeys.filter((chip) => chip.id !== chipToDelete));
  };

  const hanleChipFocus = (chipId: string) => () => {
    setFocusedChip(chipId);
  };

  const updateChipLabel = (chipId: string, newLabel: string) => {
    setChipsWithKeys((prev) => prev.map((chip) => (chip.id === chipId ? { ...chip, label: newLabel } : chip)));
  };

  const handleChipEdit = (chipId: string) => (e: React.KeyboardEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if ((e.key === 'Enter' || e.key === ',') && chipId === focusedChip) {
      console.log(target);
      e.preventDefault();
      updateChipLabel(chipId, target.innerText);
      setFocusedChip('');
      target.blur();
    }
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const val = event.currentTarget.value.trim();
    if ((event.key === 'Enter' || event.key === ',') && val) {
      event.preventDefault();
      addChip(val);
      setInputValue('');
    } else if (event.key === 'Backspace' && !val && chipsWithKeys.length) {
      const lastChip = chipsWithKeys[chipsWithKeys.length - 1];
      setChipsWithKeys((prev) => prev.slice(0, -1));
      setInputValue(lastChip.label);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <Fieldset label={label} fontVariantLegend="button">
      <ChipList themeType={themeType} layer={layer} outlined={true} size={size} systemMessage='error'>
        {chipsWithKeys.map((chip, index) => (
          <FancyChip
            key={index}
            size={size}
            label={chip.label}
            textColor="secondary"
            contentEditable={focusedChip === chip.id}
            tabIndex={0}
            layer={Math.min(layer + 2, 10) as TLayer}
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
      {limit && (
        <LimitText>
          <Typography type="verysmText">
            {chipsWithKeys.length} / {limit}
          </Typography>
        </LimitText>
      )}
    </Fieldset>
  );
}
