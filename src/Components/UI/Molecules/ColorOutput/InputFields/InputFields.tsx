import React, { useEffect } from 'react';
import { ColorTypes } from '../ColorOutput.model';

import FancyInput from '../../FancyInput/FancyInput';
import AdaptedInputs from './AdaptedInput';


interface IInputFields {
  currentColorObject?: ColorTypes;
  handler: ({inputLetter, value}: {inputLetter: string; value: string}) => void;
}

export default function InputFields({currentColorObject, handler }:IInputFields) {
  if (!currentColorObject) return null;

  const handleInputChange = (e?: React.ChangeEvent<HTMLInputElement>) => {
    if(!e) return;
    const getChangedInput = { inputLetter: e.target.name, value: e.target.value ? e.target.value : '0' };
    
    handler(getChangedInput);
  };

  return (
    <div>
      {typeof currentColorObject?.color === 'string' ? (
        <FancyInput type="number" value={currentColorObject.color} handler={(e) => handleInputChange(e)}/>
      ) : (
        Object.entries(currentColorObject.color).map(([key, value]) => {
          return (
            <div key={key} >
              <AdaptedInputs inputLetter={key} value={value} handler={handleInputChange}/>
              <p>{key}</p>
            </div>
          );
        })
      )}
    </div>
  );
}
