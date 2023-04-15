import { useState, useRef, useEffect, useCallback } from 'react';

const useSlider = ({ initialValue, valueToPosition, positionToValue, onValueChange }) => {
  const [markerPosition, setMarkerPosition] = useState({ x: 0, y: 0 });
  const [isInteracting, setIsInteracting] = useState(false);
  const sliderRef = useRef();


  useEffect(() => {
    const handleGlobalInteractionEnd = () => {
      setIsInteracting(false);
    };

    const handleGlobalInteractionMove = (event) => {
      if (!isInteracting) return;
      const clientX = event.clientX ?? event.touches[0].clientX;
      const clientY = event.clientY ?? event.touches[0].clientY;
      updateValue(clientX, clientY);
    };

    window.addEventListener('mouseup', handleGlobalInteractionEnd);
    window.addEventListener('touchend', handleGlobalInteractionEnd);
    window.addEventListener('mousemove', handleGlobalInteractionMove);
    window.addEventListener('touchmove', handleGlobalInteractionMove);

    return () => {
      window.removeEventListener('mouseup', handleGlobalInteractionEnd);
      window.removeEventListener('touchend', handleGlobalInteractionEnd);
      window.removeEventListener('mousemove', handleGlobalInteractionMove);
      window.removeEventListener('touchmove', handleGlobalInteractionMove);
    };
  }, [isInteracting]);

  useEffect(() => {
    const handleWindowResize = () => {
      if (!sliderRef.current) return;
      const rect = sliderRef.current.getBoundingClientRect();
      updateMarkerPosition(initialValue(rect));
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [initialValue]);

  useEffect(() => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const initialPosition = initialValue(rect);
      updateMarkerPosition(initialPosition);
      onValueChange(positionToValue(initialPosition.x, initialPosition.y, rect));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sliderRef.current])


  const updateMarkerPosition = (value) => {
    const rect = sliderRef.current.getBoundingClientRect();
    const newPosition = valueToPosition(value, rect);
    setMarkerPosition(newPosition);
  };

  const updateValue = (clientX, clientY) => {
    if (!sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const newValue = positionToValue(clientX, clientY, rect);
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
