'use client';

import { useRef, useCallback, useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useDebounce<T extends (...args: any[]) => void>(callback: T, delay: number) {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // The debounced function
  const debouncedFunc = useCallback(
    (...args: Parameters<T>) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  // Cancel function to clear the timer
  const cancel = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  // Return both the debounced function and the cancel function
  return [debouncedFunc, cancel];
}

export default useDebounce;
