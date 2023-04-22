import { useState, useRef, useEffect, useCallback } from 'react';
import Color from 'color';
import { colorToPositionFunc, positionToColorFunc } from './silderUtils';

const useSlider = ({ color, hue, opacity, onColorChange, type }) => {
  const [markerPosition, setMarkerPosition] = useState({ x: 0, y: 0 });
  const [isInteracting, setIsInteracting] = useState(false);
  const sliderRef = useRef();

  const positionToColor = useCallback(
    (clientX, clientY, rect) => positionToColorFunc(type, hue, clientX, clientY, rect),
    [type, hue, opacity]
  );
  
  const colorToPosition= useCallback(
    (color, rect) => colorToPositionFunc(type, color, rect),
    [type, hue, opacity]
  );
  
  //update the position of the marker
  const updateMarkerPosition = useCallback(
    (color) => {
      const rect = sliderRef.current.getBoundingClientRect();
      const newPosition = colorToPosition(color, rect);
      setMarkerPosition(newPosition);
    },
    [colorToPosition]
  );

  //handle the interaction with the slider
  const handleInteraction = useCallback(
    (clientX, clientY) => {
      const rect = sliderRef.current.getBoundingClientRect();
      const newColor = positionToColor(clientX, clientY, rect);
      onColorChange(newColor);
      updateMarkerPosition(newColor);
    },
    [onColorChange, updateMarkerPosition, positionToColor]
  );
  
  //handle the start of the interaction with the slider
  const handleInteractionStart = (event) => {
    event.preventDefault();
    setIsInteracting(true);
    const clientX = event.clientX ?? event.touches[0].clientX;
    const clientY = event.clientY ?? event.touches[0].clientY;
    handleInteraction(clientX, clientY);
  };

  //handle the interaction with the slider
  const handleInteractionMove = useCallback(
    (event) => {
      if (!isInteracting) return;
      const clientX = event.clientX ?? event.touches[0].clientX;
      const clientY = event.clientY ?? event.touches[0].clientY;
      handleInteraction(clientX, clientY);
    },
    [isInteracting, handleInteraction]
  );
  
  const handleInteractionEnd = useCallback(() => {
    setIsInteracting(false);
  }, []);

  //set the initial position of the marker
  useEffect(() => {
    const rect = sliderRef.current?.getBoundingClientRect();
    if (rect) {
      const initialPosition = colorToPosition(color, rect);
      setMarkerPosition(initialPosition);
    }
  }, [color, sliderRef.current, window]);

  //set the event listeners for the inputs
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

  return { sliderRef, markerPosition, handleInteractionStart, isInteracting, positionToColor, colorToPosition };
};

export default useSlider;
