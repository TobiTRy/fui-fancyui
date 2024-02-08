// Assuming TuseMultiIntersectionObserver and defaultOptions remain the same...

import { TuseMultiIntersectionObserver } from '@/utils/hooks/useMiltiIntersectionObserver/TuseMultiIntersectionObserver.model';

// IntersectionObserver options
const defaultOptions: IntersectionObserverInit = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

// Function to manage multiple intersection observers
function createMultiIntersectionObserver(props: TuseMultiIntersectionObserver) {
  const { elements, callback, options } = props;

  // Ensure elements is an array to avoid errors in case it's undefined
  const validElements = elements?.filter(Boolean) || [];

  // Do not create an observer if there are no elements
  if (validElements.length === 0) return null;

  const observerOptions = options || defaultOptions;

  // Create a new observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(entry.target);
      }
    });
  }, observerOptions);

  // Observe each element
  validElements.forEach((element) => (element ? observer.observe(element) : null));

  // Return a function to manually disconnect the observer when needed
  return () => observer.disconnect();
}

export default createMultiIntersectionObserver;
