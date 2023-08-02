import React from 'react';
import { ColorTypes } from '../FancyColorOutput.model';

import { FancyTextInput } from '../../../Organisms/FancyTextInput';
import AdaptInputs from './AdaptInput/AdaptInputs';
import { ContainerInputs, WrapperInputs } from './InputFields.style';
import Typography from '../../../Atoms/Typography/Typography';


// --------------------------------------------------------------------------- //
// --The main InputFiels component to render a input for each type of color -- //
// --------------------------------------------------------------------------- //
interface IInputFields {
  currentColorObject?: ColorTypes;
  handler: ({inputLetter, value}: {inputLetter: string; value: string}) => void;
}
export default function InputFields({currentColorObject, handler }:IInputFields) {
  if (!currentColorObject) return null;

  //this function handles the input change of a color value
  const handleInputChange = (e?: React.ChangeEvent<HTMLInputElement>) => {
    if(!e) return;
    // order the values and keys and send the changed input to the parent component
    // e.g. {inputLetter: 'r', value: '255'} color is the key and value is the value
    const getChangedInput = { 
      inputLetter: e.target.name, 
      value: e.target.value ? e.target.value : '0' 
    };
    handler(getChangedInput);
  };

  return (
    <WrapperInputs>
      {/* if the color is a string render a input field for the HEX Colors */}
      {typeof currentColorObject?.color === 'string' ? (
        <ContainerInputs>
          <FancyTextInput name='color' value={currentColorObject.color} align='center' handler={(value, e) => handleInputChange(e)}/>
          <Typography type='inlineElement' variant='smallText'>{currentColorObject.type}</Typography>
        </ContainerInputs>
      ) : (
        // if the color is a object render a input field for each color value
        Object.entries(currentColorObject.color).map(([key, value]) => {
          return (
            <ContainerInputs key={key} >
              {/* the AdaptInputs component creates the input for the specific color (like: r, b, g ...) */}
              <AdaptInputs inputLetter={key} value={value as number} handler={handleInputChange} ariaLabel={key}/>
              <Typography type='inlineElement' variant='smallText'>{key}</Typography>
            </ContainerInputs>
          );
        })
      )}
    </WrapperInputs>
  );
}
