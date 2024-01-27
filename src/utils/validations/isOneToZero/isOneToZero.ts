export default function isOneToZero(value: number) {
  if (value >= 0 && value <= 1) {
    return true;
  } else {
    console.warn("Invalid value provided. Please use the format value should be between '0' and '1'.");
    return false;
  }
}
