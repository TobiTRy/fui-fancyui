import React, { useEffect, useState, useRef } from 'react';

interface IDelay {
  children: React.ReactNode;
  externalStateBool?: boolean;
  delay?: number;
}

export default function Delay({ children, externalStateBool, delay }: IDelay) {
  const [mountState, setMountState] = useState<boolean>(false);
  const timeoutId = useRef<NodeJS.Timeout | null>(null); // Keep track of the timeout

  const delayHandler = () => {
    // Clear existing timeout if any
    if (timeoutId.current !== null) {
      clearTimeout(timeoutId.current);
    }

    if (externalStateBool) {
      setMountState(true);
    } else {
      // Set a new timeout
      timeoutId.current = setTimeout(() => {
        setMountState(false); // Set state to false instead of toggling
      }, delay || 250);
    }
  };

  useEffect(() => {
    delayHandler();
    // Clear timeout on unmount
    return () => {
      if (timeoutId.current !== null) {
        clearTimeout(timeoutId.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [externalStateBool]);

  return <>{mountState ? children : null}</>;
}
