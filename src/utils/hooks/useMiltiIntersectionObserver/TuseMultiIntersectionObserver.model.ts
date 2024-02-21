export type TuseMultiIntersectionObserver = {
  elements: (HTMLDivElement | null)[];
  callback: (target: Element) => void;
  options?: IntersectionObserverInit;
};
