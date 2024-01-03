import Color from 'color';

import { TThemeTypes } from '@/types/TThemeTypes';
import { TLayer } from '@/types/TLayer';

// Function to adjust lightness
function adjustLightness(color: Color, delta: number): Color {
  const currentLightness = color.lightness();
  const newLightness = Math.max(0, Math.min(100, currentLightness + delta));
  return color.lightness(newLightness);
}

// Generate colors at different steps for a single base color
function generateColorVariations(baseColor: string, steps: number[]): string[] {
  const color = Color(baseColor);
  return steps.map((step) => {
    return adjustLightness(color, step).hexa();
  });
}

// Define the steps for the different color types
const degreeSteps = [0, 3, 7, 10, 18, 25, 34, 40, 45, 60];
const degreeStepsAccent = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45];
const systemMessagesSteps = [0, 3, 7, 10, 13, 18, 23, 30, 35, 40];

// Generate colors at different steps for a single base color
function lightenColors({ pimaryColor, themeType, color }: IGenerateColorSteps) {
  //checkColor is dark or light
  const isPrimaryColorDark = Color(pimaryColor).isDark();

  // if the color is dark, mirror the degreeSteps
  const modifiedForBirigthnesDegreeSteps = !isPrimaryColorDark
    ? systemMessagesSteps
    : systemMessagesSteps.map((step) => -step);

  switch (themeType) {
    case 'primary':
      return generateColorVariations(color, degreeSteps);
    case 'secondary': {
      const mappedDegreeSteps = degreeSteps.map((step) => -step);
      return generateColorVariations(color, mappedDegreeSteps);
    }
    case 'accent': {
      const mappedDegreeSteps = degreeStepsAccent.map((step) => -step);
      return generateColorVariations(color, mappedDegreeSteps);
    }
    case 'transparent': {
      return degreeSteps.map(() => 'transparent');
    }

    default:
      return generateColorVariations(color, modifiedForBirigthnesDegreeSteps);
  }
}

type ColorSteps = {
  [key in TLayer]: string;
};

// this function generates a object with the color steps
interface IGenerateColorSteps {
  themeType: TThemeTypes;
  color: string;
  pimaryColor: string;
}
export default function generateColorSteps({ themeType, color, pimaryColor }: IGenerateColorSteps): ColorSteps {
  const lightColors = lightenColors({ color, themeType, pimaryColor }); //generate the colors
  const obj: ColorSteps = {} as ColorSteps;

  //make array to object with keys but reversed order
  lightColors?.forEach((colorItem, index) => {
    obj[index as TLayer] = colorItem;
  });

  return obj;
}
