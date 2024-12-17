'use client';
import { useState, useEffect } from 'react';

// This function gets the current window dimensions
function getWindowDimensions(vp?: VisualViewport | null) {
  const width = vp ? vp.width : window.innerWidth;
  const height = vp ? vp.height : window.innerHeight;

  return {
    width,
    height,
  };
}

// This custom hook returns the current window dimensions and updates them on window resize
export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  // This useEffect hook adds a window resize event listener and removes it on cleanup
  useEffect(() => {
    const viewport = window.visualViewport;

    function handleResize() {
      setWindowDimensions(getWindowDimensions(viewport));
    }

    if (!viewport) return;
    viewport.addEventListener('scroll', handleResize);
    viewport.addEventListener('resize', handleResize);
    return () => {
      viewport.removeEventListener('resize', handleResize);
      viewport.removeEventListener('scroll', handleResize);
    };
  }, []);

  return windowDimensions;
}
