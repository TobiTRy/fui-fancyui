import { useCallback, useRef } from 'react';

type CallbackFunction = () => void;

export default function useDebounce(callback: CallbackFunction, delay: number) {
  const callbackRef = useRef<CallbackFunction>(callback);
  // Verwenden Sie useRef, um den Timer zu speichern, anstatt eine globale Variable zu ändern
  const timerRef = useRef<NodeJS.Timeout | number>();

  callbackRef.current = callback;

  const debouncedAction = useCallback(() => {
    const handler = () => callbackRef.current();

    // Löschen des vorhandenen Timers und Starten eines neuen
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(handler, delay);

    // The clean
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [delay]);

  return debouncedAction;
}
