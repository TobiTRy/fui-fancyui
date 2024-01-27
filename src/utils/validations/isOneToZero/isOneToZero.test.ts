import '@testing-library/jest-dom/vitest';

import isOneToZero from './isOneToZero';

describe('isOneToZero', () => {
  it('should return true if the value is between 0 and 1', () => {
    expect(isOneToZero(0.5)).toBe(true);
  });

  it('should return false if the value is not between 0 and 1', () => {
    expect(isOneToZero(1.5)).toBe(false);
  });

  it('should return true if the value is 0', () => {
    expect(isOneToZero(0)).toBe(true);
  });

  it('should return true if the value is 1', () => {
    expect(isOneToZero(1)).toBe(true);
  });
});
