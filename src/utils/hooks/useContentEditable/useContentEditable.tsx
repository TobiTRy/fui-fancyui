import { useState, useRef, useEffect } from 'react';

type UseContentEditableProps = {
  initialValue?: string;
  liveUpdate?: boolean;
  allow?: 'text' | 'numbers';
  onFocus?: () => void;
  onBlur?: () => void;
};

function useContentEditable<T extends HTMLElement>(props: UseContentEditableProps) {
  const { initialValue = '', liveUpdate = false, allow = 'text' } = props;
  const [value, setValue] = useState<string>(initialValue);
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef<T>(null);

  const handleInput = (e: Event) => {
    const target = e.target as HTMLElement;
    let newValue = target.innerText;

    if (allow === 'numbers') {
      newValue = newValue.replace(/\D/g, ''); // Keep only digits
    } else if (allow === 'text') {
      newValue = newValue.replace(/[0-9]/g, ''); // Remove digits
    }

    if (liveUpdate) {
      setValue(newValue);
    }
  };

  const handleBlur = () => {
    if (!liveUpdate && ref.current) {
      setValue(ref.current.innerText);
    }
  };

  useEffect(() => {
    console.log(ref);
    focusNextElement(ref.current);
    if (isFocused && ref.current) {
      ref.current.contentEditable = 'true';
    }
  }, [isFocused]);

  useEffect(() => {
    const currentElement = ref.current;
    if (currentElement) {
      currentElement.addEventListener('input', handleInput);
      currentElement.addEventListener('input', handleInput);
      currentElement.addEventListener('blur', handleBlur);
      currentElement.addEventListener('focus', () => setIsFocused(true));
    }

    return () => {
      if (currentElement) {
        currentElement.removeEventListener('input', handleInput);
        currentElement.removeEventListener('blur', handleBlur);
      }
    };
  }, [ref, liveUpdate, allow]);

  return { ref, value, setValue };
}

export default useContentEditable;

const focusNextElement = (currentElement: HTMLElement | null) => {
  if (!currentElement) return;

  // Define the selector for focusable elements
  const focusableElementsSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  let nextElement = currentElement.nextElementSibling as HTMLElement | null;

  // Traverse siblings or parent's next siblings to find the next focusable element
  while (nextElement) {
    if (nextElement.matches(focusableElementsSelector)) {
      // Focus if the element matches the selector
      nextElement.focus();
      return;
    } else {
      // Search for a focusable child
      const focusableChild = nextElement.querySelector<HTMLElement>(focusableElementsSelector);
      if (focusableChild) {
        focusableChild.focus();
        return;
      }

      // Move to the next sibling
      nextElement = nextElement.nextElementSibling as HTMLElement | null;
    }
  }
};
