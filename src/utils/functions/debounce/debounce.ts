// --------------------------------------------------------------------------- //
// ------------------- da function that handles a debounce ------------------- //
// --------------------------------------------------------------------------- //
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function debounce<T extends (...args: any[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void {
  let timerId: number | undefined;

  return function (...args: Parameters<T>) {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }

    timerId = window.setTimeout(() => {
      func(...args);
    }, delay);
  };
}

export default debounce;
