import Color from 'color';
import { TColorTypes } from '../design';

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
    return adjustLightness(color, step).hsl().string();
  });
}

const degreeSteps = [0, 5, 10, 15, 20, 30, 40, 50, 60, 70];
const degreeStepsAccent = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45];

function lightenColors(colorType: TColorTypes, color: string): string[] {
  switch (colorType) {
    case 'primary':
      return generateColorVariations(color, degreeSteps);
    case 'secondary': {
      const stepsUpdated = degreeSteps.map((step) => -step);
      return generateColorVariations(color, stepsUpdated);
    }
    case 'accent':
      return generateColorVariations(color, degreeStepsAccent);
    case 'accentDarken': {
      const stepsUpdated = degreeStepsAccent.map((step) => -step);
      return generateColorVariations(color, stepsUpdated);
    }
  }
}

type StepKeys = 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0;

type ColorSteps = {
  [key in StepKeys]: string;
};

export default function generateColorSteps(colorType: TColorTypes, color: string): ColorSteps {
  const lightColors = lightenColors(colorType, color);
  const obj: ColorSteps = {} as ColorSteps;

  //make array to object with keys but reversed order
  lightColors.forEach((color, index) => {
    obj[index  as StepKeys] = color;
  });

  return obj;
}
