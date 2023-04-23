import React, { useState, useEffect } from 'react';
import ColorArea from '../../Molecules/ColorArea/ColorArea';
import HueSlider from '../../Molecules/HueSlider';
import OpacitySlider from '../../Molecules/OpacitySlider';
import Color from 'color';
import ColorOutput from '../../Molecules/ColorOutput/ColorOutput';
import { emitSelectedColorChange } from './colorPickerUtils';
import styled from 'styled-components';

//TODO: Handle color wgen the hue slider change



const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const roundValue = (value) => Math.round(value * 100) / 100;

const ColorPicker = ({ outputFormat = 'hsl', handler }) => {
  const [color, setColor] = useState('hsl(0, 100%, 50%)');
  const [hue, setHue] = useState(0);
  const [opacity, setOpacity] = useState(1);



  const calculateMainColor = (color, opacity) => {
    const calculatedMainColor = emitSelectedColorChange(color, opacity, 'hsl');
    const calculateGiveBackColor = emitSelectedColorChange(color, opacity, outputFormat);  

    handler(calculateGiveBackColor);
    setColor(calculatedMainColor);
  }

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const handleHueChange = (newHue) => {
    const roundHue = roundValue(newHue)
    setHue(roundHue);
    const currentColor = Color(color);
    const newColor = currentColor.hsl().object();
    newColor.h = roundValue(newHue);
    setColor(Color(newColor).string());
  };

  const handleOpacityChange = (newOpacity) => {
    const roundedOpacity = roundValue(newOpacity)
    setOpacity(roundedOpacity);
  };

  useEffect(() => {
    calculateMainColor(color, opacity);
  }, [color, opacity, outputFormat]);


  const colorObj = Color(color).alpha(opacity);

  return (
    <Wrapper>
      <ColorArea hue={hue} color={color} handler={handleColorChange} />
      <HueSlider handler={handleHueChange} color={color}/>
      <OpacitySlider color={colorObj} opacity={opacity} handler={handleOpacityChange} />
      <ColorOutput pickedColor={color} opacity={opacity}/> 
    </Wrapper>
  );
};

export default ColorPicker;
