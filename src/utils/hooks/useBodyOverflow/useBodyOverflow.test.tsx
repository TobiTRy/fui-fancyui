import { renderHook } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { useBodyOverflow } from './useBodyOverflow';

describe('useBodyOverflow', () => {
  // Store original overflow value before each test
  let originalOverflow: string;

  beforeEach(() => {
    // Save the original overflow value
    originalOverflow = document.body.style.overflow;
  });

  afterEach(() => {
    // Reset overflow after each test
    document.body.style.overflow = originalOverflow;
  });

  it('should set overflow to hidden by default', () => {
    renderHook(() => useBodyOverflow());
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('should set custom overflow value when provided', () => {
    renderHook(() => useBodyOverflow('scroll'));
    expect(document.body.style.overflow).toBe('scroll');
  });

  it('should restore original overflow value on unmount', () => {
    // Set initial overflow value
    document.body.style.overflow = 'auto';

    const { unmount } = renderHook(() => useBodyOverflow('hidden'));
    expect(document.body.style.overflow).toBe('hidden');

    // Unmount the hook
    unmount();
    expect(document.body.style.overflow).toBe('auto');
  });

  it('should update overflow when prop changes', () => {
    const { rerender } = renderHook(({ overflow }) => useBodyOverflow(overflow), {
      initialProps: { overflow: 'hidden' },
    });

    expect(document.body.style.overflow).toBe('hidden');

    // Rerender with new overflow value
    rerender({ overflow: 'scroll' });
    expect(document.body.style.overflow).toBe('scroll');
  });

  it('should handle empty string as original overflow value', () => {
    document.body.style.overflow = '';
    const { unmount } = renderHook(() => useBodyOverflow('hidden'));

    expect(document.body.style.overflow).toBe('hidden');
    unmount();
    expect(document.body.style.overflow).toBe('');
  });
});
