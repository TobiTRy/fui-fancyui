import React, { useState, createRef, useEffect } from 'react';
import styled from 'styled-components';
import SingleInputAtom from '../../Atoms/SingleInputAtom/SingleInputAtom';
import { spacingPx } from '../../Design/design';
import { colorPalet } from '../../Design/design';
import InputStatus from '../../Design/Interfaces/IStatus';

const InputWrapper = styled.div<{$status?: InputStatus}>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: ${spacingPx.md};
  
  input {
    ${({ $status }) => $status?.isError ? `border-color: ${colorPalet.red_light}` : $status?.isSucceed ? `border-color: ${colorPalet.green_light};` : ''};
    transition: border-color 0.3s ease-in-out;
  };

`;



interface IFancySingleInputsProps {
  length: number;
  handler?: (value: string) => void;
  status?: InputStatus;
};
export default function SingleInputs({ length, status ,handler }: IFancySingleInputsProps) {
  const [values, setValues] = useState<string[]>(Array(length).fill(''));
  const refs = Array.from({ length }, () => createRef<HTMLInputElement>());


  // Add this useEffect hook
  useEffect(() => {
    if (values.every(value => value !== '')) {
      handler && handler(values.join(''));
    }
  }, [values, handler]);

  
  // this function is to handle the paste event
  const handlePaste = (event: React.ClipboardEvent) => {
    event.preventDefault();
    const paste = event.clipboardData.getData('text');
    const newValues = paste.split('').slice(0, length);

    setValues(prev => {
      const copy = [...prev];
      for (let i = 0; i < newValues.length; i++) {
        copy[i] = newValues[i];
      }
      return copy;
    });
  };

  // this function is to handle the character keys
  const handleCharacterInput = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    event.preventDefault();

    setValues(prev => {
      const copy = [...prev];
      copy[index] = event.key;
      return copy;
    });

    if (refs[index + 1]) {
      refs[index + 1].current?.focus();
    } else {
      // if there is no next input, blur the current input
      event.currentTarget.blur();
    }
  };

  // this function is to handle the backspace key
  const handleBackspaceKey = (index: number) => {
    if (values[index] === '' && refs[index - 1]) {
      refs[index - 1].current?.focus();
    } else {
      setValues(prev => {
        const copy = [...prev];
        copy[index] = '';
        return copy;
      });
    }
  };

  // this function is to jump to the next input
  const handleArrowRightKey = (index: number) => {
    if (refs[index + 1]) {
      refs[index + 1].current?.focus();
    }
  };

  // this function is to jumpback to the previous input
  const handleArrowLeftKey = (index: number) => {
    if (refs[index - 1]) {
      refs[index - 1].current?.focus();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    // Handle character keys
    if (event.key.length === 1) {
      handleCharacterInput(event, index);
    }
    // Handle backspace key
    else if (event.key === 'Backspace') {
      handleBackspaceKey(index);
    }
    // Handle arrow keys
    else if (event.key === 'ArrowRight') {
      handleArrowRightKey(index);
    } else if (event.key === 'ArrowLeft') {
      handleArrowLeftKey(index);
    }


  };

  return (
    <InputWrapper onPaste={handlePaste} $status={status}>
      {values.map((value, index) => (
        <SingleInputAtom
          key={index}
          ref={refs[index]}
          value={value}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </InputWrapper>
  );
}

SingleInputs.defaultProps = {
  length: 6,
};
