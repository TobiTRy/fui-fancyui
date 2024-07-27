'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useRef, useState } from 'react';

// Define the type for your callback function. It should be able to receive any arguments.
type CallbackFunctionType = (...args: any[]) => void;

export function useThrottledCallback(callback: CallbackFunctionType, delay: number): CallbackFunctionType {
  const [isThrottled, setIsThrottled] = useState<boolean>(false);
  const lastArgsRef = useRef<any[] | null>(null);
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null); // Use NodeJS.Timeout for Node.js environments or number for browser environments

  const throttledCallback: CallbackFunctionType = useCallback(
    (...args: any[]) => {
      if (isThrottled) {
        lastArgsRef.current = args;
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        callback(...args);
        setIsThrottled(true);
        timeoutIdRef.current = setTimeout(() => {
          setIsThrottled(false);
          if (lastArgsRef.current !== null) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            callback(...lastArgsRef.current);
            lastArgsRef.current = null;
          }
        }, delay);
      }
    },
    [callback, delay, isThrottled]
  );

  useEffect(() => {
    return () => {
      if (timeoutIdRef.current !== null) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, [delay]);

  return throttledCallback;
}
