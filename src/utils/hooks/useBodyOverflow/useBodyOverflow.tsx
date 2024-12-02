'use client';

import { useEffect } from 'react';

export const useBodyOverflow = (overflow = 'hidden') => {
  useEffect(() => {
    // Store the original overflow value
    const originalOverflow = document.body.style.overflow;

    // Set new overflow when component mounts
    document.body.style.overflow = overflow;

    // Reset overflow when component unmounts
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [overflow]);
};
