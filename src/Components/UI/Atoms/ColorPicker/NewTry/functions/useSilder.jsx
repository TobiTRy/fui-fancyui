import { useState, useRef, useEffect, useCallback } from 'react';
import Color from 'color';

const useSlider = ({ color, hue, onColorChange }) => {
  const [markerPosition, setMarkerPosition] = useState({ x: 0, y: 0 });
  const [isInteracting, setIsInteracting] = useState(false);
  const sliderRef = useRef();

  const positionToColor = useCallback((clientX, clientY, rect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const y = Math.max(0, Math.min(clientY - rect.top, rect.height));
  
    const saturation = (x / rect.width) * 100;
    const lightness = (1 - y / rect.height) * (100 - (x / rect.width) * 50);
    return { h: hue, s: saturation, l: lightness };
  }, [hue]);

  const colorToPosition = useCallback((color, rect) => {
    const hslColor = Color(color).hsl();
  
    const saturation = hslColor.color[1];
    const lightness = hslColor.color[2];
  
    const x = parseInt((saturation / 100) * rect.width);
    const y = parseInt(rect.height * (1 - lightness / Math.max(1, (100 - 50 * (x / rect.width)))));
    return { x, y };
  }, []);
  
  const updateMarkerPosition = useCallback((color) => {
    const rect = sliderRef.current.getBoundingClientRect();
    const newPosition = colorToPosition(color, rect);
    setMarkerPosition(newPosition);
  }, [colorToPosition]);
  

  const handleInteraction = useCallback((clientX, clientY) => {
    const rect = sliderRef.current.getBoundingClientRect();
    const newColor = positionToColor(clientX, clientY, rect);
    onColorChange(newColor);
    updateMarkerPosition(newColor);
  }, [onColorChange, updateMarkerPosition, positionToColor]);

  const handleInteractionStart = (event) => {
    event.preventDefault();
    setIsInteracting(true);
    const clientX = event.clientX ?? event.touches[0].clientX;
    const clientY = event.clientY ?? event.touches[0].clientY;
    handleInteraction(clientX, clientY);
  };

  const handleInteractionMove = useCallback((event) => {
    if (!isInteracting) return;
    const clientX = event.clientX ?? event.touches[0].clientX;
    const clientY = event.clientY ?? event.touches[0].clientY;
    handleInteraction(clientX, clientY);
  }, [isInteracting, handleInteraction]);

  const handleInteractionEnd = useCallback(() => {
    setIsInteracting(false);
  }, []);

  useEffect(() => {
    const rect = sliderRef.current?.getBoundingClientRect();
    if (rect) {
      const initialPosition = colorToPosition(color, rect);
      setMarkerPosition(initialPosition);
    }
  }, [color, sliderRef.current, window]);

  useEffect(() => {
    window.addEventListener('mousemove', handleInteractionMove);
    window.addEventListener('touchmove', handleInteractionMove);
    window.addEventListener('mouseup', handleInteractionEnd);
    window.addEventListener('touchend', handleInteractionEnd);

    return () => {
      window.removeEventListener('mousemove', handleInteractionMove);
      window.removeEventListener('touchmove', handleInteractionMove);
      window.removeEventListener('mouseup', handleInteractionEnd);
      window.removeEventListener('touchend', handleInteractionEnd);
    };
  }, [handleInteractionMove, handleInteractionEnd]);

  return { sliderRef, markerPosition, handleInteractionStart, isInteracting };
};

export default useSlider;
