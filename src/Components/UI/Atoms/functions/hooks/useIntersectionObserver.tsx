import { useState, useEffect, useRef, MutableRefObject } from 'react';

const useIntersectionObserver = (): [MutableRefObject<HTMLDivElement | null>, boolean] => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }
    
    observer.current = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      //{ threshold: 1 }
    );

    if (ref.current) {
      observer.current.observe(ref.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [ref.current]);

  return [ref, isInView];
};

export default useIntersectionObserver;
