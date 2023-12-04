import Color from 'color';
import { useEffect, useMemo, useState } from 'react';

import { FancyButton } from '@/components/organisms/FancyButton';
import { SVGDoubleChevron } from '@/components/icons/SVGDoubleChevron';

import { Container, WrapperSVG } from './FancyColorOutput.style';
import { InputFields } from '@/components/molecules/FancyColorOutput/InputFields';
import { ColorTypeLetters } from './FancyColorOutput.model';

import colorFormats, { IColorFormat } from '@/utils/variables/colorFormat/colorFormats';
import colorTransformator from './utils/ColorTransformator';

// --------------------------------------------------------------------------- //
// -- The main FancyColorOutput Component to displays and change the values -- //
// --------------------------------------------------------------------------- //
interface IFancyColorOutput {
  pickedColor: Color;
  opacity: number;
  currentColorType?: IColorFormat;
  handler?: (color: Color) => void;
  colorTypeHandler?: (type: IColorFormat) => void;
  handlerOpacity: (color: number) => void;
}
export default function FancyColorOutput(props: IFancyColorOutput) {
  const { pickedColor, opacity, handler, handlerOpacity, currentColorType, colorTypeHandler } = props;

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
        handler && handler(Color(colorWhitoutAlpha).hsl());
      } else {
        handler && handler(Color(colorWhitoutAlpha).hsl());
        handlerOpacity(parseFloat(value));
      }
    } else {
      //if the color is a string it is a HEX  code give it back to the parent component
      handler && handler(Color(color).hsl());
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
  }, []);

  return (
    <Container>
      {/* this Component renders the Input fields for the color and opacity */}
      <InputFields currentColorObject={transformedColorObject} handler={handleInputChange} />
      {/* Switch Button this switches the color format */}
      <FancyButton
        onClick={handleFormatChange}
        outlined={true}
        wide={true}
        size="sm"
        themeType="accent"
        icon={
          <WrapperSVG>
            <SVGDoubleChevron />
          </WrapperSVG>
        }
      />
    </Container>
  );
}
