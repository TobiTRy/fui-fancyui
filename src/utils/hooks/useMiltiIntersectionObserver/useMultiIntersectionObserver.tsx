import { TuseMultiIntersectionObserver } from '@/utils/hooks/useMiltiIntersectionObserver/TuseMultiIntersectionObserver.model';
import { useRef, useEffect } from 'react';

// IntersectionObserver options
const defaultOptions: IntersectionObserverInit = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

// --------------------------------------------------------------------------- //
// ---------- The multisectionObserver handles multiply elemnts -------------- //
// --------------------------------------------------------------------------- //
export default function useMultiIntersectionObserver(props: TuseMultiIntersectionObserver) {
  const { elements, callback, options } = props;

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Disconnect previous observer if it exists
    if (observer.current) {
      observer.current.disconnect();
    }

    // Do not create an observer if there are no elements
    if (elements?.length === 0) return;

    // Create a new observer
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry.target);
        }
      });
    }, options || defaultOptions);

    // Observe each element
    elements?.forEach((element) => {
      if (element) observer.current?.observe(element);
    });

    // Cleanup function to disconnect the observer on unmount
    return () => {
      observer.current?.disconnect();
    };
  }, [elements, callback, options]);
}
