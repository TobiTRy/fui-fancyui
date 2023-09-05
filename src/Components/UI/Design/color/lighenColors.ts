import Color from 'color';


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


export default function lightenColors(color: string, steps: number[]): string[] {
  const colorLightness = Color(color).lightness();

  // If the color is bright, then darken it
  if(colorLightness > 80) {
    const degreeSteps: number[] = [0, 5, 10, 15, 20, 30, 40, 50, 60, 70];
    
    const stepsUpdated = degreeSteps.map(step => -step);
    return generateColorVariations(color, stepsUpdated).reverse();
  }
  // If the color is dark, then lighten it
  else if(colorLightness < 20) {
    const degreeSteps: number[] = [0, 5, 10, 15, 20, 30, 40, 50, 60, 70];
    return generateColorVariations(color, degreeSteps).reverse();
  }
  // If the color is neither too bright nor too dark, use different steps
  else {
    const degreeSteps: number[] = [-20, -15, -10, -5, 0, 5, 10, 15, 20, 25];
    console.log(generateColorVariations(color, degreeSteps))
    return generateColorVariations(color, degreeSteps);
  }
}
