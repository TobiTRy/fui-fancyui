const debounce = (func: (...args: any[]) => void, wait: number): ((...args: any[]) => void) => {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };
};


export default debounce