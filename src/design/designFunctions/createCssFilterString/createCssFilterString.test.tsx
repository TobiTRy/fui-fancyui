import { describe, it, expect } from 'vitest';
import { createCssFilterString } from './createCssFilterString';

describe('createCssFilterString', () => {
  it('should create a correct CSS filter string from an object', () => {
    const filterObject = {
      brightness: 0.8,
      contrast: 1.2,
      grayscale: 0.3,
      hueRotate: 45,
      invert: 0.5,
      opacity: 0.7,
      saturate: 2,
      sepia: 0.4,
      blur: '5px',
    };

    const expected =
      'brightness(0.8) contrast(1.2) grayscale(0.3) hue-rotate(45deg) invert(0.5) opacity(0.7) saturate(2) sepia(0.4) blur(5px)';
    const result = createCssFilterString(filterObject);

    expect(result).toBe(expected);
  });
});
