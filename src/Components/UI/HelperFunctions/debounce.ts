/* eslint-disable @typescript-eslint/no-explicit-any */
const debounce = (func: (...args: any[]) => void, wait: number): ((...args: any[]) => void) => {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      func(...args);
    }, wait);
  };
};


export default debounce