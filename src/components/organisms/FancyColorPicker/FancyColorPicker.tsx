import Color from 'color';
import { useCallback, useEffect, useState } from 'react';

import { IColorFormat } from '@/utils/variables/colorFormat/colorFormats';
import { emitSelectedColorChange } from './utils/colorPickerUtils';

import { FancyColorArea } from '@/components/molecules/FancyColorArea';
import { FancyHueSlider } from '@/components/molecules/FancyHueSlider';
import { FancyOpacitySlider } from '@/components/molecules/FancyOpacitySlider';
import { FancyColorDisplay } from '@/components/organisms/FancyColorDisplay';
import { FancyColorInput } from '@/components/organisms/FancyColorInput';

import { TFancyColorPickerWithHTMLAttrs } from './TFancyColorPicker.model';
import { Wrapper } from './FancyColorPicker.style';

// --------------------------------------------------------------------------- //
// ------------------- The main ColorPicker Component ------------------------ //
// --------------------------------------------------------------------------- //
export default function FanyColorPicker(props: TFancyColorPickerWithHTMLAttrs) {
  const {
    colorArea = true,
    hueSlider = true,
    opacitySlider = true,
    colorOutput = true,
    outputFormat = 'hex',
    colorDisplay = true,
    inputColor = '#000',
    handler,
    ...htmlProps
  } = props;

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
    <Wrapper {...htmlProps}>
      {colorDisplay && <FancyColorDisplay colorValue={displayColorValue} opacity={opacity} />}
      {colorArea && <FancyColorArea hue={hue} colorValue={rawColor} handler={setRawColor} />}
      {hueSlider && <FancyHueSlider handler={setHue} hue={hue} />}
      {opacitySlider && <FancyOpacitySlider colorValue={rawColor} opacity={opacity} handler={setOpacity} />}
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
