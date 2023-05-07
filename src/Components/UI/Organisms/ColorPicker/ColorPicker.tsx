import React, { useState, useMemo, useCallback } from 'react';

import Color from 'color';
import styled from 'styled-components';

import ColorDisplay from '../../Atoms/ColorDisplay';
import ColorArea from '../../Molecules/ColorArea/ColorArea';
import HueSlider from '../../Molecules/HueSlider';
import OpacitySlider from '../../Molecules/OpacitySlider/OpacitySlider';
import ColorOutput from '../../Molecules/ColorOutput/ColorOutput';
import { emitSelectedColorChange } from './colorPickerUtils';
import { spacingPx } from '../../Design/design';

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: ${spacingPx.md};
`

const roundValue = (value: number) => Math.round(value * 100) / 100;


// --------------------------------------------------------------------------- //
// ------------------- The main ColorPicker Component ------------------------ //
// --------------------------------------------------------------------------- //
interface IColorPicker {
  outputFormat?: 'hsl' | 'hex' | 'rgb' | 'rgba' | 'hsla' | 'hexa';
  colorArea?: boolean;
  opacitySlider?: boolean;
  hueSlider?: boolean;
  colorOutput?: boolean;
  displayColor?: boolean;
  handler: (color: string) => void;
};
const ColorPicker = (props : IColorPicker) => {
  const { colorArea, hueSlider, opacitySlider, colorOutput, outputFormat, displayColor, handler } = props;
  const [rawColor, setRawColor] = useState<Color>(Color('hsl(0, 100%, 50%)'));
  const [hue, setHue] = useState(0);
  const [opacity, setOpacity] = useState(1);

  //create a calculated main color and use the normal only for display (flicker on the color area)
  //this sets the main color that will be used in the parent component
  useMemo(() => {
    const calculateGiveBackColor = emitSelectedColorChange({color:rawColor, opacity, outputFormat});  
    handler(calculateGiveBackColor);
  }, [rawColor, opacity, outputFormat, handler])

  //this function is handle the color change in the child ColorArea component
  const handleColorChange = (newColor: Color) => {
    setRawColor(newColor);
  };

  //this function is handle the hue change in the child HueSlider component
  const handleHueChange = (newHue: number) => {
    const transformedColor = rawColor.hue(newHue);
    setRawColor(transformedColor)
    setHue(newHue);
  };

  //this function is handle the color change in the child ColorOutput component
  const handleColorOutputChange = (newColor:Color) => {
    setHue(newColor.hue());
    setRawColor(newColor);
  }

  //this function is handle the opacity change in the child OpacitySlider component
  const handleOpacityChange = (newOpacity: number) => {
    const roundedOpacity = roundValue(newOpacity)
    setOpacity(roundedOpacity);
  }

  return (
    <Wrapper>
      { displayColor && <ColorDisplay color={rawColor} opacity={opacity} /> }
      { colorArea && <ColorArea hue={hue} color={rawColor} handler={handleColorChange} />}
      { hueSlider && <HueSlider handler={handleHueChange} color={rawColor} hue={hue} />}
      { opacitySlider && <OpacitySlider color={Color(rawColor).alpha(opacity)} opacity={opacity} handler={handleOpacityChange} />}
      { colorOutput && <ColorOutput pickedColor={rawColor} opacity={opacity} handler={handleColorOutputChange} handlerOpacity={handleOpacityChange}/>} 
    </Wrapper>
  );
};

export default ColorPicker;
