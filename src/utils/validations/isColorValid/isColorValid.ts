import Color from 'color';

/**
 * Validates if a given string is a valid color representation.
 * Logs a warning to the console if the color is invalid or input is not a string.
 */
export default function isColorValid(color: string) {
  if (typeof color !== 'string') {
    console.warn('Input is not a string.');
    return false;
  }

  if (!color.trim()) {
    console.warn('Input is an empty string.');
    return false;
  }

  try {
    Color(color);
    return true;
  } catch {
    console.warn('Invalid color format.');
    return false;
  }
}
