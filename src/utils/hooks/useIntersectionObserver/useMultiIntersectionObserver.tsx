import { useRef, useEffect, useCallback } from 'react';

// IntersectionObserver options
const defaultOptions: IntersectionObserverInit = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5, // You can adjust this threshold as needed
};

const useMultiIntersectionObserver = (
  elements: (HTMLDivElement | null)[],
  callback: (target: Element) => void,
  options: IntersectionObserverInit = defaultOptions
) => {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (elements.length === 0) return;

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry.target);
        }
      });
    }, options);

    elements.forEach((element) => {
      if (element && observer.current) {
        observer.current.observe(element);
      }
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [elements, callback, options]);

  // If elements or callback change, disconnect the previous observer and set up a new one.
  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    if (elements.length > 0) {
      observer.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback(entry.target);
          }
        });
      }, options);

      elements.forEach((element) => {
        if (element && observer.current) {
          observer.current.observe(element);
        }
      });
    }
  }, [elements, callback, options]);
};

export default useMultiIntersectionObserver;
