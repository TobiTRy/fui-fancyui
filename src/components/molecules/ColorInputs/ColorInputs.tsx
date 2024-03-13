import React from 'react';

import { Typography } from '@/components/atoms/Typography';
import { TColorInputs } from './TColorInputs.model';
import { FancyTextInput } from '@/components/organisms/FancyTextInput';
import { AdaptInputs } from '@/components/molecules/ColorInputs/AdaptInput';

import { ContainerInputs, WrapperInputs } from './ColorInputs.style';

// --------------------------------------------------------------------------- //
// --The main InputFiels component to render a input for each type of color -- //
// --------------------------------------------------------------------------- //
export default function ColorInputs(props: TColorInputs) {
  const { currentColorObject, handler, themeType = 'primary', layer = 0 } = props;
  if (!currentColorObject) return null;

  //this function handles the input change of a color value
  const handleInputChange = (e?: React.ChangeEvent<HTMLInputElement>) => {
    if (!e) return;
    // order the values and keys and send the changed input to the parent component
    // e.g. {inputLetter: 'r', value: '255'} color is the key and value is the value
    const getChangedInput = {
      inputLetter: e.target.name,
      value: e.target.value ? e.target.value : '0',
    };

    handler(getChangedInput);
  };

  return (
    <WrapperInputs>
      {/* if the color is a string render a input field for the HEX Colors */}
      {typeof currentColorObject?.color === 'string' ? (
        <ContainerInputs>
          <FancyTextInput
            themeType={themeType}
            layer={layer}
            name="color"
            value={currentColorObject.color}
            align="center"
            onChange={handleInputChange}
          />
          <Typography variant="subTextFootnote">{currentColorObject.type}</Typography>
        </ContainerInputs>
      ) : (
        // if the color is a object render a input field for each color value
        Object.entries(currentColorObject.color).map(([key, value]) => {
          return (
            <ContainerInputs key={key}>
              {/* the AdaptInputs component creates the input for the specific color (like: r, b, g ...) */}
              <AdaptInputs
                themeType={themeType}
                layer={layer}
                inputLetter={key}
                value={value as number}
                onChange={handleInputChange}
                ariaLabel={key}
              />
              <Typography variant="subTextFootnote">{key}</Typography>
            </ContainerInputs>
          );
        })
      )}
    </WrapperInputs>
  );
}
