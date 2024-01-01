import '@testing-library/jest-dom/vitest';
import { describe, it, expect } from 'vitest';

import { themeStore } from '@/design/theme/themeStore';

import generateInsetBorderRadius from '@/design/designFunctions/generateInsetBorderRadius/generateInsetBorderRadius';

// calculate the border radius minus padding for the inset border
describe('generateInsetBorderRadius', () => {
  it('should return the theme values from the types sm/sm', () => {
    const theme = themeStore.getState().theme;
    expect(generateInsetBorderRadius('sm', 'sm')).toBe(`calc(${theme.borderRadius.sm} - ${theme.borderRadius.sm})`);
  });

  it('should return a string calculation from to spacing values', () => {
    expect(generateInsetBorderRadius('12px', '12px')).toBe(`calc(12px - 12px)`);
  });
});
