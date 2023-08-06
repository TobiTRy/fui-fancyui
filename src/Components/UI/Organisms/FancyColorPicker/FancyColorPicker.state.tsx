import { create } from 'zustand';
import Color from 'color';

import { IColorFormat } from '../../HelperFunctions/variables/colorFormats';

// --------------------------------------------------------------------------- //
// ------------- The Interface structure for the colorPicker  ---------------- //
// --------------------------------------------------------------------------- //
interface IColorPickerStore {
  //the current items for the main bar
  currentHue: number;
  setCurrentHue: (hue: number) => void;

  currentOpacity: number;
  setCurrentOpacity: (opacity: number) => void;

  currentRAWColor: Color;
  setCurrentRAWColor: (color: Color) => void;

  currentColorType: IColorFormat;
  setCurrentColorType: (type: IColorFormat) => void;

  displayColorValue: Color | string;
  setDisplayColorValue: (displayColor: Color | string) => void;
}

// --------------------------------------------------------------------------- //
// ----------- This is the global state for the colorPicker ------------------ //
// --------------------------------------------------------------------------- //
export const useColorPickerStore = create<IColorPickerStore>((set) => ({
  currentHue: 0,
  setCurrentHue: (hue) => set(() => ({ currentHue: hue })),

  currentOpacity: 1,
  setCurrentOpacity: (opacity) => set(() => ({ currentOpacity: opacity })),

  currentRAWColor: Color('hsl(0, 100%, 50%)'),
  setCurrentRAWColor: (color) => set(() => ({ currentRAWColor: color })),

  currentColorType: 'hsl',
  setCurrentColorType: (type: IColorFormat) => set(() => ({ currentColorType: type })),

  displayColorValue: Color('hsl(0, 100%, 50%)'),
  setDisplayColorValue: (displayColorValue) => set(() => ({ displayColorValue })),
}));
