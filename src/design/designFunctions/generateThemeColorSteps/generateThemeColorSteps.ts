import Color from 'color';

import { hexToHSL } from '@/design/designFunctions/hexToHSL/hexToHSL';
import { hslToHex } from '@/design/designFunctions/hslToHex/hslToHex';
import { TLayer } from '@/types/TLayer';
import { TUiColorTypes } from '@/types/TUiColorTypes';

// Function to adjust lightness
// function adjustLightness(color: Color, delta: number): Color {
//   const currentLightness = color.lightness();
//   const newLightness = Math.max(0, Math.min(100, currentLightness + delta));
//   return color.lightness(newLightness);
// }

// Generate colors at different steps for a single base color
// function generateColorVariations(baseColor: string, steps: number[]): string[] {
//   const color = Color(baseColor);
//   return steps.map((step) => {
//     return adjustLightness(color, step).hexa();
//   });
// }

// Define the steps for the different color types
//const degreeSteps = [0, 3, 7, 10, 18, 25, 34, 40, 45, 60];
//const degreeStepsAccent = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45];
//const systemMessagesSteps = [0, 3, 7, 10, 13, 18, 23, 30, 35, 40];

const lightnessSteps = [50, 43, 40, 35, 30, 24, 18, 15, 12, 8].reverse();

// Generate colors at different steps for a single base color
function lightenColors({ pimaryColor, themeType, color }: IGenerateColorSteps) {
  //checkColor is dark or light
  const isPrimaryColorDark = Color(pimaryColor).isDark();
  const { h, s } = hexToHSL(color);

  // if the color is dark, mirror the degreeSteps
  const modifiedForBirigthnesDegreeSteps = !isPrimaryColorDark ? lightnessSteps : lightnessSteps.map((step) => -step);

  switch (themeType) {
    case 'primary':
      return lightnessSteps.map((step) => hslToHex(h, s, step));
    case 'secondary': {
      return lightnessSteps.map((step) => hslToHex(h, s, 100 - step));
    }
    case 'accent': {
      const mappedDegreeSteps = [...lightnessSteps].reverse().map((step) => hslToHex(h, s, step));
      return mappedDegreeSteps;
    }
    default:
      return [...modifiedForBirigthnesDegreeSteps].reverse().map((step) => hslToHex(h, s, 100 - step));
  }
}

type ColorSteps = {
  [key in TLayer]: string;
};

// this function generates a object with the color steps
interface IGenerateColorSteps {
  themeType: TUiColorTypes;
  color: string;
  pimaryColor: string;
}
export default function generateThemeColorSteps({ themeType, color, pimaryColor }: IGenerateColorSteps): ColorSteps {
  const lightColors = lightenColors({ color, themeType, pimaryColor }); //generate the colors
  const obj: ColorSteps = {} as ColorSteps;

  //make array to object with keys but reversed order
  lightColors?.forEach((colorItem, index) => {
    obj[index as TLayer] = colorItem;
  });

  return obj;
}
