// Function to scroll a container to a specific element within it.
export function scrollToElm(container: HTMLElement, elm: HTMLElement, duration: number) {
  const pos = getRelativePos(elm); // Calculate the position of the element relative to its parent.
  scrollTo(container, pos.top, duration / 1000); // Scroll to the position, converting duration to seconds.
}

// Function to get the position of an element relative to its parent.
function getRelativePos(elm: Element): { top: number; right: number; bottom: number; left: number } {
  if (!(elm.parentNode instanceof Element)) {
    throw new Error('Parent node is not an Element.');
  }
  const pPos = elm.parentNode.getBoundingClientRect(); // Get the position of the parent.
  const cPos = elm.getBoundingClientRect(); // Get the position of the current element.
  const pos = {
    top: cPos.top - pPos.top + elm.parentNode.scrollTop, // Calculate top position.
    right: cPos.right - pPos.right, // Calculate right position.
    bottom: cPos.bottom - pPos.bottom, // Calculate bottom position.
    left: cPos.left - pPos.left, // Calculate left position.
  };

  return pos; // Return the calculated positions.
}

// Function to animate the scrolling of an element to a certain position.
function scrollTo(element: HTMLElement, to: number, duration: number, onDone?: () => void) {
  if (duration === 0) {
    // If duration is zero, jump to the position immediately.
    element.scrollTop = to;
    if (onDone) {
      onDone(); // Call the callback function if provided.
    }
    return;
  }

  const start = element.scrollTop; // Starting position.
  const change = to - start; // Change needed in position.
  const startTime = performance.now(); // Timestamp when the animation starts.
  let now, elapsed, t;

  // Function to perform the animation.
  const animateScroll = (): void => {
    now = performance.now();
    elapsed = (now - startTime) / 1000; // Time elapsed in seconds.
    t = elapsed / duration; // Calculate the fraction of the total duration.

    // Set the scrollTop property, easing in and out.
    element.scrollTop = (start + change) * easeInOutQuad(t);

    if (t < 1) {
      window.requestAnimationFrame(animateScroll); // Continue animation.
    } else {
      if (onDone) {
        onDone(); // Call the callback function if provided.
      }
    }
  };

  animateScroll(); // Start the animation.
}

// Easing function for a nice animation.
function easeInOutQuad(t: number): number {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // Accelerate until halfway, then decelerate.
}
