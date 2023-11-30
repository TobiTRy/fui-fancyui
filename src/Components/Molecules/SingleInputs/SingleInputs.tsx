import React, { useState, createRef, useEffect } from 'react';

import SingleInputAtom from '../../atoms/SingleInputAtom/SingleInputAtom';
import IStatus from '../../core/interface/IStatus';
import { InputWrapper } from './SingleInputs.style';
import { TThemeTypes } from '@/components/core/interface/TUiColors';
import { TLayer } from '@/components/core/interface/TLayer';

interface IFancySingleInputsProps {
  length?: number;
  handler?: (value: string) => void;
  status?: Pick<IStatus, 'isError' | 'isSucceed'>;
  automaticCase?: 'upper' | 'lower';
  themeType?: TThemeTypes;
  layer?: TLayer;
}
export default function SingleInputs(props: IFancySingleInputsProps) {
  const { length = 6, handler, status, automaticCase, themeType, layer } = props;

  const [values, setValues] = useState<string[]>(Array(length).fill(''));
  const refs = Array.from({ length }, () => createRef<HTMLInputElement>());

  //when the values are filled, call the handler
  useEffect(() => {
    if (values.every((value) => value !== '')) {
      handler && handler(values.join(''));
    }
  }, [values, handler]);

  // this function is to handle the paste event
  const processClipboardData = (paste: string) => {
    const newValues = paste.split('').slice(0, length);

    setValues((prev) => {
      const copy = [...prev];
      for (let i = 0; i < newValues.length; i++) {
        copy[i] = newValues[i];
      }
      return copy;
    });
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const paste = event.clipboardData.getData('text');
    processClipboardData(paste);
    (event.target as HTMLInputElement).blur();
  };

  // this function is to handle the character keys
  const handleCharacterInput = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    event.preventDefault();

    // if the automatic case is upper, change the character to upper case
    if (automaticCase === 'upper') {
      event.key = event.key.toUpperCase();
    }
    if (automaticCase === 'lower') {
      event.key = event.key.toLowerCase();
    }

    setValues((prev) => {
      const copy = [...prev];
      copy[index] = event.key;
      return copy;
    });

    // if the next input exists, focus it
    if (refs[index + 1]) {
      moveRightToTheNextInputRef(index);
    } else {
      // if there is no next input, blur the current input
      event.currentTarget.blur();
    }
  };

  // this function is to handle the backspace key
  const handleBackspaceKey = (index: number) => {
    if (values[index] === '') {
      moveLeftToTheNextInputRef(index);
    } else {
      setValues((prev) => {
        const copy = [...prev];
        copy[index] = '';
        return copy;
      });
    }
  };

  // this function is to jump to the next input
  const moveRightToTheNextInputRef = (index: number) => {
    // if the next input exists, focus it
    if (refs[index + 1]) {
      refs[index + 1].current?.focus();
    }
  };

  // this function is to jumpback to the previous input
  const moveLeftToTheNextInputRef = (index: number) => {
    // if the previous input exists, focus it
    if (refs[index - 1]) {
      refs[index - 1].current?.focus();
    }
  };

  const handleKeyDownPaste = async () => {
    const clipText = await navigator.clipboard.readText();
    moveRightToTheNextInputRef(clipText.length);
    processClipboardData(clipText);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.key === 'v' && (event.ctrlKey || event.metaKey)) {
      void handleKeyDownPaste();
      event.currentTarget.blur();
    }
    // Handle character keys
    else if (event.key.length === 1) {
      handleCharacterInput(event, index);
    }
    // Handle backspace key
    else if (event.key === 'Backspace') {
      handleBackspaceKey(index);
    }
    // Handle arrow keys
    else if (event.key === 'ArrowRight') {
      moveRightToTheNextInputRef(index);
    } else if (event.key === 'ArrowLeft') {
      moveLeftToTheNextInputRef(index);
    }
  };

  return (
    <InputWrapper onPaste={handlePaste} $status={status}>
      {values.map((value, index) => (
        <SingleInputAtom
          key={index}
          ref={refs[index]}
          value={value}
          ariaLabel={`Input ${index}`}
          onKeyDown={(e) => handleKeyDown(e, index)}
          themeType={themeType}
          layer={layer}
        />
      ))}
    </InputWrapper>
  );
}
