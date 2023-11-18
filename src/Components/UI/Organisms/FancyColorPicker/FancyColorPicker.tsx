import React, { useCallback, useEffect, useState } from 'react';

import Color from 'color';
import { styled } from 'styled-components';

import ColorDisplay from '../../Atoms/ColorDisplay/ColorDisplay';
import ColorArea from '../../Molecules/FancyColorArea/FancyColorArea';
import FancyHueSlider from '../../Molecules/FancyHueSlider/FancyHueSlider';
import FancyOpacitySlider from '../../Molecules/FancyOpacitySlider/FancyOpacitySlider';
import FancyColorOutput from '../../Molecules/FancyColorOutput/FancyColorOutput';
import { emitSelectedColorChange } from './colorPickerUtils';
import { spacingPx } from '../../Design/designSizes';
import { IColorFormat } from '../../HelperFunctions/variables/colorFormats';

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.md};
`;

// --------------------------------------------------------------------------- //
// ------------------- The main ColorPicker Component ------------------------ //
// --------------------------------------------------------------------------- //
interface IColorPicker {
  outputFormat?: IColorFormat;
  colorArea?: boolean;
  opacitySlider?: boolean;
  hueSlider?: boolean;
  colorOutput?: boolean;
  displayColor?: boolean;
  inputColor?: string;
  handler?: (color: string) => void;
}
export default function FanyColorPicker(props: IColorPicker)  {
  const { colorArea, hueSlider, opacitySlider, colorOutput, outputFormat, displayColor, inputColor, handler } = {...defaultProps, ...props};

  const [displayColorValue, setDisplayColorValue] = useState<Color | string>(Color(inputColor ? inputColor : 'hsl(0, 100%, 50%)'));
  const [rawColor, setRawColor] = useState(Color('hsl(0, 100%, 50%)'))
  const [opacity, setOpacity] = useState(1);
  const [hue, setHue] = useState(0);
  const [colorType, setColorType] = useState<IColorFormat>('hsl');

  //create a calculated main color and use the normal only for display (flicker on the color area)
  //this sets the main color that will be used in the parent component=> {
  const calculateGiveBackColor = useCallback(() => {
    return emitSelectedColorChange({ color: rawColor, opacity, outputFormat });
  }, [rawColor, opacity, outputFormat]);

  handler && handler(calculateGiveBackColor());

  //this function is handle the color change in the child FancyColorOutput component
  useEffect(() => {
    const calcDisplayColor = emitSelectedColorChange({ color: rawColor, opacity, outputFormat: colorType });
    setDisplayColorValue(calcDisplayColor);
  }, [colorType, hue, rawColor, opacity, setDisplayColorValue]);

  useEffect(() => {
    setRawColor(Color(rawColor).hue(hue));
  }, [hue]);

  useEffect(() => {
    if (inputColor) {
      setRawColor(Color(inputColor));
      setOpacity(Color(inputColor).alpha());
    }
  }, []);

  return (
    <Wrapper>
      {displayColor && <ColorDisplay color={displayColorValue} opacity={opacity} showText={true} />}
      {colorArea && <ColorArea hue={hue} color={rawColor} handler={setRawColor} />}
      {hueSlider && <FancyHueSlider handler={setHue} color={rawColor} hue={hue} />}
      {opacitySlider && <FancyOpacitySlider color={rawColor} opacity={opacity} handler={setOpacity} />}
      {colorOutput && (
        <FancyColorOutput
          pickedColor={rawColor}
          colorTypeHandler={setColorType}
          opacity={opacity}
          handler={setRawColor}
          handlerOpacity={setOpacity}
        />
      )}
    </Wrapper>
  );
}

// Define defaultProps for ColorPicker
const defaultProps: IColorPicker = {
  outputFormat: 'hex',
  colorArea: true,
  opacitySlider: true,
  hueSlider: true,
  colorOutput: true,
  displayColor: true,
  inputColor: '#000',
};
