import React, { useEffect } from 'react';

import Color from 'color';
import styled from 'styled-components';

import ColorDisplay from '../../Atoms/ColorDisplay/ColorDisplay';
import ColorArea from '../../Molecules/ColorArea/ColorArea';
import HueSlider from '../../Molecules/HueSlider/HueSlider';
import OpacitySlider from '../../Molecules/OpacitySlider/OpacitySlider';
import ColorOutput from '../../Molecules/ColorOutput/ColorOutput';
import { emitSelectedColorChange } from './colorPickerUtils';
import { spacingPx } from '../../Design/design';

import { useColorPickerStore } from './ColorPicker.state';

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: ${spacingPx.md};
`;  


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
  inputColor?: string;
  handler: (color: string) => void;
};
const ColorPicker = (props : IColorPicker) => {
  const { colorArea, hueSlider, opacitySlider, colorOutput, outputFormat, displayColor, inputColor, handler } = props;

  const displayColorValue = useColorPickerStore(state => state.displayColorValue);
  const setDisplayColorValue = useColorPickerStore(state => state.setDisplayColorValue);

  const rawColor = useColorPickerStore(state => state.currentRAWColor);
  const setRawColor = useColorPickerStore(state => state.setCurrentRAWColor);
  
  const opacity = useColorPickerStore(state => state.currentOpacity);
  const setOpacity = useColorPickerStore(state => state.setCurrentOpacity);

  const hue = useColorPickerStore(state => state.currentHue);
  const setHue = useColorPickerStore(state => state.setCurrentHue);

  const colorType  = useColorPickerStore(state => state.currentColorType);
  const setColorType = useColorPickerStore(state => state.setCurrentColorType);


  //create a calculated main color and use the normal only for display (flicker on the color area)
  //this sets the main color that will be used in the parent component=> {
  const calculateGiveBackColor = emitSelectedColorChange({color: rawColor, opacity, outputFormat});  
  handler(calculateGiveBackColor);

  

  //this function is handle the color change in the child ColorOutput component
  useEffect(() => {
    const calcDisplayColor = emitSelectedColorChange({color:rawColor, opacity, outputFormat: colorType});
    setDisplayColorValue(calcDisplayColor);
  }, [colorType, hue ,rawColor, opacity, setDisplayColorValue]);

  useEffect(() => {
    setRawColor(Color(rawColor).hue(hue));
  }, [hue]);


  useEffect(() => {
    if(inputColor) {
      setRawColor(Color(inputColor));
      setOpacity(Color(inputColor).alpha());
    }
  }, []);


  return (
    <Wrapper>
      { displayColor && <ColorDisplay color={displayColorValue} opacity={opacity} showText={true} /> }
      { colorArea && <ColorArea hue={hue} color={rawColor} handler={setRawColor} />}
      { hueSlider && <HueSlider handler={setHue} color={rawColor} hue={hue} />}
      { opacitySlider && <OpacitySlider color={rawColor} opacity={opacity} handler={setOpacity} />}
      { colorOutput && <ColorOutput pickedColor={rawColor} colorTypeHandler={setColorType} opacity={opacity} handler={setRawColor} handlerOpacity={setOpacity}/>} 
    </Wrapper>
  );
};

export default ColorPicker;
