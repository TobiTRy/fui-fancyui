import React, { useState, useEffect, useMemo } from 'react';
import Color from 'color';

import FancyButton from '../FancyButton/FancyButton';
import colorTransformator from './ColorTransformator';
import { Container, WrapperSVG } from './FancyColorOutput.style';
import InputFields from './InputFields/InputFields';
import colorFormats from '../../Atoms/functions/variables/colorFormats';
import { IColorFormat } from '../../Atoms/functions/variables/colorFormats';

//Icon for the Switch Button
const Svg = (
  <WrapperSVG>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
      <path d="M7.5 18.234a.988.988 0 0 1-.648-.242l-6-5.25A.995.995 0 0 1 .516 12c0-.285.125-.555.336-.742l6-5.25a.988.988 0 0 1 1.39.094.988.988 0 0 1-.094 1.39L2.996 12l5.152 4.508a.985.985 0 0 1-.648 1.727Zm9 0a.985.985 0 0 1-.648-1.726L21.004 12l-5.152-4.508a.988.988 0 0 1-.094-1.39c.36-.41.98-.45 1.39-.094l6 5.25a.982.982 0 0 1 .336.742.982.982 0 0 1-.336.742l-6 5.25a.988.988 0 0 1-.648.242Zm0 0" />
    </svg>
  </WrapperSVG>
);

// this interfaces is used to match the input "names" (r, g, b, a, h, s, l)
// to update the changed value in the color object
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

// --------------------------------------------------------------------------- //
// -- The main FancyColorOutput Component to displays and change the values -- //
// --------------------------------------------------------------------------- //
interface IFancyColorOutput {
  pickedColor: Color;
  opacity: number;
  currentColorType?: IColorFormat;
  handler: (color: Color) => void;
  colorTypeHandler?: (type: IColorFormat) => void;
  handlerOpacity: (color: number) => void;
}
const FancyColorOutput = ({ pickedColor, opacity, handler, handlerOpacity, currentColorType, colorTypeHandler }: IFancyColorOutput) => {
  const [colorFormatIndex, setColorFormatIndex] = useState(0);
  const [currentPicketColor, setCurrentPickedColor] = useState<Color>(pickedColor);

  //memoized the current color object
  const transformedColorObject = useMemo(
    () => colorTransformator(currentPicketColor, opacity, colorFormatIndex),
    [colorFormatIndex, currentPicketColor, opacity]
  );

  //this function changes the input type (colorFormats) to the next one in the array [rgb, rgba, hsl, hsla, hex, hexa]
  const handleFormatChange = () => {
    const nextIndex = (colorFormatIndex + 1) % colorFormats.length;
    if (colorTypeHandler) colorTypeHandler(colorFormats[nextIndex]);
    setColorFormatIndex(nextIndex);
  };

  //this function handles the input change and give back the color or alpha value to the parent component
  //think here --> not in colors --> think only in inputs and letters
  const handleInputChange = ({ inputLetter, value }: { inputLetter: string; value: string }) => {
    if (!transformedColorObject) return;
    //transformedColorObject is build up e.g. {type: 'rgb', color: {…}}
    const { color } = transformedColorObject;

    //string is HEX code
    if (typeof color !== 'string') {
      const colorObj = color as ColorTypeLetters; //e.g. {r: 255, g: 255, b: 255, a: 1, h: 0,…}
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { a, ...colorWhitoutAlpha } = colorObj; //split out the alpha value

      //indentify the inputletter is a color or alpha value
      if (inputLetter !== 'a') {
        colorWhitoutAlpha[inputLetter] = parseInt(value);
        handler(Color(colorWhitoutAlpha).hsl());
      } else {
        handler(Color(colorWhitoutAlpha).hsl());
        handlerOpacity(parseFloat(value));
      }
    } else {
      //if the color is a string it is a HEX  code give it back to the parent component
      handler(Color(color).hsl());
    }
  };

  //this useEffect updates the current picked color
  useEffect(() => {
    setCurrentPickedColor(pickedColor);
  }, [pickedColor]);

  // sets a color format if the currentColorType is present
  useEffect(() => {
    if (currentColorType) {
      const index = colorFormats.findIndex((type) => type === currentColorType);
      setColorFormatIndex(index);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      {/* this Component renders the Input fields for the color and opacity */}
      <InputFields currentColorObject={transformedColorObject} handler={handleInputChange} />
      {/* Switch Button this switches the color format */}
      <FancyButton onClick={handleFormatChange} outlined={true} icon={Svg} wide={true} size="small" design="accent"></FancyButton>
    </Container>
  );
};

export default FancyColorOutput;
