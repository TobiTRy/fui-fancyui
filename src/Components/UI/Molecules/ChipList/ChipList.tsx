import React, { KeyboardEvent, useEffect, useState } from 'react';
import { ChipContainer, ChipInput, InputLi, LimitText } from './ChipList.style';
import { TUiColorsType } from '../../Design/color/designColor';
import FancyChip from '../../Organisms/FancyChip/FancyChip';
import { TLayer } from '../../Design/color/generateColorSteps';
import { v4 as uuidv4 } from 'uuid';
import { Fieldset } from '../../Atoms/Fieldset';
import { Typography } from '../../Atoms/Typography';

export interface ChipListProps {
  themeType?: Exclude<keyof TUiColorsType, 'transparent'>;
  layer?: TLayer;
  outlined?: boolean;
  chips?: string[];
  inputPlaceholder?: string;
  label?: string;
  limit?: number;
}

type TChip = {
  id: string;
  label: string;
};

export default function ChipList(props: ChipListProps) {
  const { themeType = 'primary', layer = 1, outlined = false, chips = [], inputPlaceholder, label, limit = 50 } = props;
  const [chipsWithKeys, setChipsWithKeys] = useState<TChip[]>([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setChipsWithKeys(chips.map((label) => ({ id: uuidv4(), label })));
  }, [chips]);

  const addChip = (label: string) => {
    setChipsWithKeys((prev) => [...prev, { id: uuidv4(), label }]);
  };

  const deleteChip = (chipToDelete: string) => () => {
    setChipsWithKeys(chipsWithKeys.filter((chip) => chip.id !== chipToDelete));
  };

  // Function to update the label of a chip
  const updateChipLabel = (chipId: string, newLabel: string) => {
    setChipsWithKeys((prev) => prev.map((chip) => (chip.id === chipId ? { ...chip, label: newLabel } : chip)));
  };

  const handleChipEdit = (chipId: string) => (e: React.FocusEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    console.log(e);
    if (e.type === 'blur' || (e.type === 'keydown' && (e as React.KeyboardEvent).key === 'Enter')) {
      e.preventDefault();
      target.blur();

    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
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
      <ChipContainer $themeType={themeType} $layer={layer} $outlined={true}>
        {chipsWithKeys.map((chip, index) => (
          <FancyChip
          key={index}
          label={chip.label}
          contentEditable={true}
          tabIndex={0}
          layer={Math.min(layer + 1, 10) as TLayer}
          onDelete={deleteChip(chip.id)}
          outlined={outlined}
          onBlur={handleChipEdit(chip.id)}
          onKeyDown={handleChipEdit(chip.id)}
          ></FancyChip>
        ))}
        <InputLi>
          <ChipInput
            $themeType={themeType}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder={inputPlaceholder}
          />
        </InputLi>
      </ChipContainer>
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
