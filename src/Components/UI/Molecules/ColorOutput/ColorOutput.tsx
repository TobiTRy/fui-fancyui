import React, { useState, useEffect, useMemo } from 'react';
import { ColorTypes, RGBAColor, RGBColor, HSLAColor, HSLColor,  } from './ColorOutput.model';

import { Container, SwitchButton, TypeLabel } from './ColorOutput.style';
import Color from 'color';
import { emitSelectedColorChange } from '../../Organisms/ColorPicker/colorPickerUtils';
import InputFields from './InputFields/InputFields';

const colorFormats = ['rgb', 'rgba', 'hsl', 'hsla', 'hex', 'hexa'];

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
const colorTransformator = (color: Color, opacity: number, formatIdx: number): ColorTypes => {
  const colorObject = Color(color);
  const currentColorFormat = colorFormats[formatIdx];

  switch (currentColorFormat) {
    case 'rgb':
      const rgbColor = colorObject.rgb().object();
      return { type: 'rgb' as const, color: { r: rgbColor.r, g: rgbColor.g, b: rgbColor.b } as RGBColor };
    case 'rgba':
      const rgbaColor = colorObject.rgb().object();
      return { type: 'rgba' as const, color: { r: rgbaColor.r, g: rgbaColor.g, b: rgbaColor.b, a: opacity } as RGBAColor };
    case 'hsl':
      const hslColor = colorObject.hsl().object();
      return { type: 'hsl' as const, color: { h: hslColor.h, s: hslColor.s, l: hslColor.l } as HSLColor };
    case 'hsla':
      const hslaColor = colorObject.hsl().object();
      return { type: 'hsla' as const, color: { h: hslaColor.h, s: hslaColor.s, l: hslaColor.l, a: opacity } as HSLAColor };
    case 'hex':
      return { type: 'hex' as const, color: colorObject.hex() as string };
    case 'hexa':
      const createHEXAColor = colorObject.alpha(opacity);
      return { type: 'hexa' as const, color: createHEXAColor.hexa() as string };
    default:
      throw new Error(`Unknown color format: ${currentColorFormat}`);

  }
};


// const typeGuard = (colorObject: ColorTypes | undefined) => {
//   if(!colorObject) return;
//   console.log(colorObject);
//   switch (colorObject.type) {
//     case 'rgb':
//       return colorObject.color as ;
// }

interface IColorOutput {
  pickedColor: Color;
  opacity: number;
  handler: (color: Color) => void;
}

const ColorOutput = ({ pickedColor, opacity, handler }: IColorOutput) => {
  const [colorFormatIndex, setColorFormatIndex] = useState(0);
  const [currentPicketColor, setCurrentPickedColor] = useState<Color>(pickedColor);

  const currentColorObject = useMemo(
    () => colorTransformator(currentPicketColor, opacity, colorFormatIndex),
    [colorFormatIndex, currentPicketColor, opacity]
  );

  const handleFormatChange = () => {
    const nextIndex = (colorFormatIndex + 1) % colorFormats.length;
    setColorFormatIndex(nextIndex);
  };


  
  const handleInputChange = ({ inputLetter, value }: { inputLetter: string; value: string }) => {
    if(!currentColorObject) return;
    
    const {color} = currentColorObject

    console.log(color);

    //strings are HEX and HEXA codes
    if (typeof color !== 'string') {
      let colorObj = color as ColorTypeLetters;

      if(inputLetter !== 'a') {
        colorObj[inputLetter] = parseInt(value);
        handler(Color(colorObj).hsl());
      } else {
        console.log(value);
        handler(Color(colorObj).hsl().alpha(parseFloat(value)));
      }
    } else {

    }

  };

  useEffect(() => {
    setCurrentPickedColor(pickedColor);
  }, [pickedColor]);

  return (
    <Container>
      <button onClick={handleFormatChange}>Change</button>
      <InputFields currentColorObject={currentColorObject} handler={handleInputChange} />
    </Container>
  );
};

export default ColorOutput;
