import { useCallback, useEffect, useState } from 'react';
import Color from 'color';
import { styled } from 'styled-components';

import { TTheme } from '@/types/TTheme';
import { emitSelectedColorChange } from './colorPickerUtils';
import { IColorFormat } from '@/utils/variables/colorFormat/colorFormats';

import ColorArea from '@/components/molecules/FancyColorArea/FancyColorArea';
import FancyHueSlider from '@/components/molecules/FancyHueSlider/FancyHueSlider';
import FancyOpacitySlider from '@/components/molecules/FancyOpacitySlider/FancyOpacitySlider';
import FancyColorInput from '@/components/organisms/FancyColorInput/FancyColorInput';
import FancyColorDisplay from '@/components/organisms/FancyColorDisplay/FancyColorDisplay';

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
// --------------------------------------------------------------------------- //
// ------------------- The main ColorPicker Component ------------------------ //
// --------------------------------------------------------------------------- //
export default function FanyColorPicker(props: IColorPicker) {
  const { colorArea, hueSlider, opacitySlider, colorOutput, outputFormat, displayColor, inputColor, handler } = {
    ...defaultProps,
    ...props,
  };

  const [displayColorValue, setDisplayColorValue] = useState<Color | string>(
    Color(inputColor ? inputColor : 'hsl(0, 100%, 50%)')
  );
  const [rawColor, setRawColor] = useState(Color('hsl(0, 100%, 50%)'));
  const [opacity, setOpacity] = useState(1);
  const [hue, setHue] = useState(0);
  const [colorType, setColorType] = useState<IColorFormat>('hsl');

  //create a calculated main color and use the normal only for display (flicker on the color area)
  //this sets the main color that will be used in the parent component=> {
  const calculateGiveBackColor = useCallback(() => {
    return emitSelectedColorChange({ color: rawColor, opacity, outputFormat });
  }, [rawColor, opacity, outputFormat]);

  handler && handler(calculateGiveBackColor());

  //this function is handle the color change in the child FancyColorInput component
  useEffect(() => {
    const calcDisplayColor = emitSelectedColorChange({ color: rawColor, opacity, outputFormat: colorType });
    setDisplayColorValue(calcDisplayColor);
  }, [colorType, hue, rawColor, opacity, setDisplayColorValue]);

  useEffect(() => {
    setRawColor(Color(rawColor).hue(hue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hue]);

  useEffect(() => {
    if (inputColor) {
      setRawColor(Color(inputColor));
      setOpacity(Color(inputColor).alpha());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleColorOutputChange = (color: Color) => {
    const getHue = color.hue();
    if (hue !== getHue) setHue(getHue);
    setRawColor(color);
  };

  return (
    <Wrapper>
      {displayColor && <FancyColorDisplay colorValue={displayColorValue} opacity={opacity} />}
      {colorArea && <ColorArea hue={hue} colorValue={rawColor} handler={setRawColor} />}
      {hueSlider && <FancyHueSlider handler={setHue} color={rawColor} hue={hue} />}
      {opacitySlider && <FancyOpacitySlider color={rawColor} opacity={opacity} handler={setOpacity} />}
      {colorOutput && (
        <FancyColorInput
          pickedColor={rawColor}
          colorTypeHandler={setColorType}
          opacity={opacity}
          handler={handleColorOutputChange}
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

// ------------------------------------------- //
// ------- The style for the component ------- //
// ------------------------------------------- //
const Wrapper = styled.div<{ theme: TTheme }>`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;
