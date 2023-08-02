

export default function aspectRatioValidation(aspectRatio: string) {
  if (!/^(\d+)(?:\s*\/\s*)(\d+)$/.test(aspectRatio)) {
    console.warn("Invalid aspect ratio provided. Please use the format 'width/height'.");
    return false;
  }

  const [width, height] = aspectRatio.split('/');

  if (width === '0' || height === '0') {
    console.warn("Invalid aspect ratio provided. Please use the format value should be not '0'.");
    return false;
  }

  return true;
}
