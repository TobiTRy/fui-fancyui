export function scrollToElm(container: HTMLElement, elm: HTMLElement, duration: number): void {
  const pos = getRelativePos(elm);
  scrollTo(container, pos.top, duration / 1000); // duration in seconds
}

function getRelativePos(elm: Element): { top: number; right: number; bottom: number; left: number } {
  if (!(elm.parentNode instanceof Element)) {
    throw new Error('Parent node is not an Element.');
  }
  const pPos = elm.parentNode.getBoundingClientRect(); // parent pos
  const cPos = elm.getBoundingClientRect(); // target pos
  const pos = {
    top: cPos.top - pPos.top + elm.parentNode.scrollTop,
    right: cPos.right - pPos.right,
    bottom: cPos.bottom - pPos.bottom,
    left: cPos.left - pPos.left,
  };

  return pos;
}

function scrollTo(element: HTMLElement, to: number, duration: number, onDone?: () => void): void {
  const start = element.scrollTop;
  const change = to - start;
  const startTime = performance.now();
  let now, elapsed, t;

  const animateScroll = (): void => {
    now = performance.now();
    elapsed = (now - startTime) / 1000;
    t = elapsed / duration;

    element.scrollTop = start + change * easeInOutQuad(t);

    if (t < 1) window.requestAnimationFrame(animateScroll);
    else onDone && onDone();
  };

  animateScroll();
}

function easeInOutQuad(t: number): number {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
