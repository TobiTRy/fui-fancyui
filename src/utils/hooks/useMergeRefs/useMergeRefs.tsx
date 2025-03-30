import { MutableRefObject, RefCallback } from 'react';

/**
 * A custom hook that merges multiple React refs into a single ref callback.
 *
 * @template T The type of the ref value
 * @param refs An array of refs to merge. Can include MutableRefObject, RefCallback, null, or undefined
 * @returns A callback function that updates all provided refs with the given value
 *
 * @example
 * ```tsx
 * const firstRef = useRef<HTMLDivElement>(null);
 * const secondRef = useRef<HTMLDivElement>(null);
 * const mergedRef = useMergeRefs([firstRef, secondRef]);
 *
 * return <div ref={mergedRef}>Content</div>
 * ```
 */
export function useMergeRefs<T>(refs: (MutableRefObject<T> | RefCallback<T> | null | undefined)[]) {
  return (value: T) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref != null) {
        (ref as MutableRefObject<T | null>).current = value;
      }
    });
  };
}
