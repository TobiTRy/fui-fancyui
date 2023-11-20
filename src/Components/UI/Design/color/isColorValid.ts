import Color from 'color';

// this function checks if a color is valid
export default function isColorValid(color: string) {
  try {
    Color(color);
    return true;
  } catch (error) {
    return false;
  }
}
