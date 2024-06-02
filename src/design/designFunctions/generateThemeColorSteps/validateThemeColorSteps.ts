export default function validateThemeColorSteps(colorSteps: object) {
  const colorStepsKeys = Object.keys(colorSteps);
  if (colorStepsKeys.length !== 10) return false;

  const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  for (const key of colorStepsKeys) {
    if (!validKeys.includes(key)) {
      console.error(`Key ${key} is invalid.`);
      return false;
    }
  }

  return true;
}
