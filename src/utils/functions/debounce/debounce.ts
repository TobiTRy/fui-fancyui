// --------------------------------------------------------------------------- //
// ------------------- da function that handles a debounce ------------------- //
// --------------------------------------------------------------------------- //
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): {
  (...args: Parameters<T>): void;
  cancel: () => void;
} {
  let timerId: number | undefined;

  const debouncedFn = function (...args: Parameters<T>) {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }

    timerId = window.setTimeout(() => {
      func(...args);
    }, delay);
  };

  // Add cancel method to clear the timeout
  debouncedFn.cancel = () => {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
  };

  return debouncedFn;
}

export default debounce;
