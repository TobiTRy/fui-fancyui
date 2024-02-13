import { useState, useEffect, useCallback } from 'react';

export default function useDebounce<T extends (...args: any[]) => void>(
  callback: T,
  delay: number
): (...args: Parameters<T>) => void {
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const debouncedFunc = useCallback(
    (...args: Parameters<T>) => {
      if (timer) clearTimeout(timer);
      const newTimer = setTimeout(() => callback(...args), delay);
      setTimer(newTimer);
    },
    [callback, delay]
  );

  useEffect(() => {
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [timer]);

  return debouncedFunc;
}
