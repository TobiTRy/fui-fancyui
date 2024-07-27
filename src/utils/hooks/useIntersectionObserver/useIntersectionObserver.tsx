'use client';

import { RefObject, useEffect, useState } from 'react';

interface UseIntersectionObserverProps {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  freezeOnceVisible?: boolean;
}

function useIntersectionObserver(elementRef: RefObject<Element>, props?: UseIntersectionObserverProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const observerCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);

      if (entry.isIntersecting && props?.freezeOnceVisible) {
        observer.unobserve(node);
      }
    };

    const observer = new IntersectionObserver(observerCallback, props);

    observer.observe(node);

    return () => observer.disconnect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef, props?.threshold, props?.root, props?.rootMargin, props?.freezeOnceVisible]);

  return isVisible;
}

export default useIntersectionObserver;
