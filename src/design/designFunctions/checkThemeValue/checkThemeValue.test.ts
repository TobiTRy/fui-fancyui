import '@testing-library/jest-dom/vitest';
import { describe, it, expect } from 'vitest';

import checkThemeValue from './checkThemeValue';

describe('checkThemeValue', () => {
  it('should retrun true for theme value', () => {
    expect(checkThemeValue('sm')).toBe(true);
  });
  it('should retrun false for non theme value', () => {
    expect(checkThemeValue('12px')).toBe(false);
  });
});
