import React from 'react';
import { ColorTypes } from '../ColorOutput.model';

import FancyInput from '../../FancyInput/FancyInput';
import AdaptedInputs from './AdaptedInput';
import { ContainerInputs, WrapperInputs } from './InputFields.style';



interface IInputFields {
  currentColorObject?: ColorTypes;
  handler: ({inputLetter, value}: {inputLetter: string; value: string}) => void;
}

export default function InputFields({currentColorObject, handler }:IInputFields) {
  if (!currentColorObject) return null;

  const handleInputChange = (e?: React.ChangeEvent<HTMLInputElement>) => {
    if(!e) return;
    // oder the values and keys and send the changed input to the parent component
    const getChangedInput = { inputLetter: e.target.name, value: e.target.value ? e.target.value : '0' };
    handler(getChangedInput);
  };


  return (
    <WrapperInputs>
      {typeof currentColorObject?.color === 'string' ? (
        <ContainerInputs>
          <FancyInput type="text" name='color' value={currentColorObject.color} align='center' handler={(e) => handleInputChange(e)}/>
          <p>{currentColorObject.type}</p>
        </ContainerInputs>
      ) : (
        Object.entries(currentColorObject.color).map(([key, value]) => {
          return (
            <ContainerInputs key={key} >
              <AdaptedInputs inputLetter={key} value={value} handler={handleInputChange}/>
              <p>{key}</p>
            </ContainerInputs>
          );
        })
      )}
    </WrapperInputs>
  );
}
