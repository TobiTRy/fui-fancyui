import Color from 'color';

// Define the type for color steps
type ColorStepsType = {
  [key: number]: string;
};

// Function to adjust lightness
function adjustLightness(color: Color, delta: number): Color {
  const currentLightness = color.lightness();
  const newLightness = Math.max(0, Math.min(100, currentLightness + delta));
  console.log('newLightness', newLightness);
  return color.lightness(newLightness);
}

// Generate colors at different steps for a single base color
function generateColorVariations(baseColor: string, steps: number[]): string[] {
  const color = Color(baseColor);
  return steps.map((step) => {
    return adjustLightness(color, step).hsl().string();
  });
}

// Generate color steps and return as an object
function generateColorSteps(baseColor: string, steps: number[]) {
  const colorVariations = generateColorVariations(baseColor, steps);

  return colorVariations;
}

export default function lightenColors(color: string, steps: number[]): string[] {
  const colorLightness = Color(color).lightness();
  console.log('colorLightness', colorLightness);
  // If the color is bright, then darken it
  if(colorLightness > 80) {
    const stepsUpdated = steps.map(step => -step);
    return generateColorSteps(color, stepsUpdated).reverse();
  }
  // If the color is dark, then lighten it
  else if(colorLightness < 20) {
    return generateColorSteps(color, steps).reverse();
  }
  // If the color is neither too bright nor too dark, use different steps
  else {
    return generateColorSteps(color, steps);
  }
}
