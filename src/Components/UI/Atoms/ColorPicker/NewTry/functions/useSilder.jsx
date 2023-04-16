import { useState, useRef, useEffect, useCallback } from 'react';

const useSlider = ({ initialValue, colorToPosition, positionToColor, onValueChange }) => {
  const [markerPosition, setMarkerPosition] = useState({ x: 0, y: 0 });
  const [isInteracting, setIsInteracting] = useState(false);
  const sliderRef = useRef();

  const handleInteractionEnd = useCallback(() => {
    setIsInteracting(false);
  }, []);

  const handleInteractionMove = useCallback((event) => {
    if (!isInteracting) return;
    const clientX = event.clientX ?? event.touches[0].clientX;
    const clientY = event.clientY ?? event.touches[0].clientY;
    updateValue(clientX, clientY);
  }, [isInteracting]);

  useEffect(() => {
    window.addEventListener('mouseup', handleInteractionEnd);
    window.addEventListener('touchend', handleInteractionEnd);
    window.addEventListener('mousemove', handleInteractionMove);
    window.addEventListener('touchmove', handleInteractionMove);

    return () => {
      window.removeEventListener('mouseup', handleInteractionEnd);
      window.removeEventListener('touchend', handleInteractionEnd);
      window.removeEventListener('mousemove', handleInteractionMove);
      window.removeEventListener('touchmove', handleInteractionMove);
    };
  }, [handleInteractionEnd, handleInteractionMove]);

  useEffect(() => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const initialPosition = initialValue(rect);
      updateMarkerPosition(initialPosition);
      onValueChange(positionToColor(initialPosition.x, initialPosition.y, rect));
    }
    // Add window as a dependency so the effect is triggered on window resize
  }, [sliderRef.current]);


  useEffect(() => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const initialPosition = initialValue(rect);
      updateMarkerPosition(initialPosition);
      onValueChange(positionToColor(initialPosition.x, initialPosition.y, rect));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sliderRef.current])

  const updateMarkerPosition = (value) => {
    const rect = sliderRef.current.getBoundingClientRect();
    const newPosition = colorToPosition(value, rect);
    console.log('updateMarkerPosition newPosition:', newPosition);
    setMarkerPosition(newPosition);
  };

  const updateValue = (clientX, clientY) => {
    if (!sliderRef.current) return;
  
    const rect = sliderRef.current.getBoundingClientRect();
    const newValue = positionToColor(clientX, clientY, rect);
    onValueChange(newValue);
    updateMarkerPosition(newValue);
  };
  
  
  const handleInteractionStart = (event) => {
    event.preventDefault();
    setIsInteracting(true);
    const clientX = event.clientX ?? event.touches[0].clientX;
    const clientY = event.clientY ?? event.touches[0].clientY;
    updateValue(clientX, clientY);
  };

  return { sliderRef, markerPosition, handleInteractionStart, isInteracting };
};

export default useSlider;
