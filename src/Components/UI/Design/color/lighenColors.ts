import Color from 'color';

// Define the type for color steps
type ColorStepsType = {
  [key: number]: string;
};

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
    const delta = step - 50; // Delta relative to the midpoint (50)
    return adjustLightness(color, delta).hex();
  });
}

// Generate color steps and return as an object
function generateColorSteps(baseColor: string, steps: number[]): ColorStepsType {
  const colorVariations = generateColorVariations(baseColor, steps);
  const colorSteps: ColorStepsType = {};
  steps.forEach((step, index) => {
    colorSteps[step] = colorVariations[index];
  });
  return colorSteps;
}

// Steps for the color generation
const steps = [65, 60, 55, 50, 45, 40, 35];

export default function lightenColors(color: string): ColorStepsType {
  const generatedColors = generateColorSteps(color, steps);
  console.log('Generated Colors:', generatedColors);
  return generatedColors;
}
