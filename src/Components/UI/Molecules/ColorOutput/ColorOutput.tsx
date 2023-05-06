import React, { useState, useEffect, useMemo } from 'react';
import FancyButton from '../FancyButton/FancyButton';
import colorTransformator, {colorFormats} from './ColorTransformator';

import { Container, WrapperSVG } from './ColorOutput.style';
import Color from 'color';
import InputFields from './InputFields/InputFields';



const Svg = (
  <WrapperSVG>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='white' viewBox="0 0 24 24"><path d="M7.5 18.234a.988.988 0 0 1-.648-.242l-6-5.25A.995.995 0 0 1 .516 12c0-.285.125-.555.336-.742l6-5.25a.988.988 0 0 1 1.39.094.988.988 0 0 1-.094 1.39L2.996 12l5.152 4.508a.985.985 0 0 1-.648 1.727Zm9 0a.985.985 0 0 1-.648-1.726L21.004 12l-5.152-4.508a.988.988 0 0 1-.094-1.39c.36-.41.98-.45 1.39-.094l6 5.25a.982.982 0 0 1 .336.742.982.982 0 0 1-.336.742l-6 5.25a.988.988 0 0 1-.648.242Zm0 0"/></svg>
  </WrapperSVG>
)

interface ColorTypeLetters {
  [key: string]: number | string;
  r: number;
  g: number;
  b: number;
  a: number;
  h: number;
  s: number;
  l: number;
}


interface IColorOutput {
  pickedColor: Color;
  opacity: number;
  handler: (color: Color) => void;
  handlerOpacity: (color: number) => void;
}

// --------------------------------------------------------------------------- //
// --------------------- Define the ColorOutput Component -------------------- //
// --------------------------------------------------------------------------- //
const ColorOutput = ({ pickedColor, opacity, handler, handlerOpacity }: IColorOutput) => {
  const [colorFormatIndex, setColorFormatIndex] = useState(0);
  const [currentPicketColor, setCurrentPickedColor] = useState<Color>(pickedColor);

  //memoized color object
  const currentColorObject = useMemo(
    () => colorTransformator(currentPicketColor, opacity, colorFormatIndex),
    [colorFormatIndex, currentPicketColor, opacity]
  );

  //this type changes the input type to the next one [rgb, rgba, hsl, hsla, hex, hexa]
  const handleFormatChange = () => {
    const nextIndex = (colorFormatIndex + 1) % colorFormats.length;
    setColorFormatIndex(nextIndex);
  };

  //this function handles the input change
  const handleInputChange = ({ inputLetter, value }: { inputLetter: string; value: string }) => {
    if(!currentColorObject) return;
    const { color } = currentColorObject

    //give back the color or alpha value 
    //strings are HEX and HEXA codes
    if (typeof color !== 'string') {
      let colorObj = color as ColorTypeLetters;

      if(inputLetter !== 'a') {
        console.log(inputLetter, value)
        colorObj[inputLetter] = parseInt(value);
        console.log(colorObj)
        handler(Color(colorObj).hsl());
      } else {
        handler(Color(colorObj).hsl());
        handlerOpacity(parseFloat(value))
      }
    } else {
      handler(Color(color).hsl());
    }
  };

  //this useEffect updates the current picked color
  useEffect(() => {
    setCurrentPickedColor(pickedColor);
  }, [pickedColor]);

  return (
    <Container>
      <InputFields currentColorObject={currentColorObject} handler={handleInputChange} />
      <FancyButton onClick={handleFormatChange} outlined={true} icon={Svg} wide={true} size='small' design='accent'></FancyButton>
    </Container>
  );
};

export default ColorOutput;
