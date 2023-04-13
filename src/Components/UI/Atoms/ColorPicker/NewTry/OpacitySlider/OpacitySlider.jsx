import React, { useState, useRef, useEffect } from 'react';

import { SliderContainer, Marker } from './OpacitySlider.style';

const OpacitySlider = ({ color, opacity, onOpacityChange }) => {
  const [markerPosition, setMarkerPosition] = useState(opacity * 100);
  const [isInteracting, setIsInteracting] = useState(false);
  const sliderRef = useRef();

  useEffect(() => {
    const handleGlobalInteractionEnd = () => {
      setIsInteracting(false);
    };

    window.addEventListener('mouseup', handleGlobalInteractionEnd);
    window.addEventListener('touchend', handleGlobalInteractionEnd);
    return () => {
      window.removeEventListener('mouseup', handleGlobalInteractionEnd);
      window.removeEventListener('touchend', handleGlobalInteractionEnd);
    };
  }, []);

  const updateOpacity = (clientX) => {
    const rect = sliderRef.current.getBoundingClientRect();
    const markerWidth = 10; // Change this to the actual width of the marker
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width - markerWidth));
    const newOpacity = x / (rect.width - markerWidth);
  
    onOpacityChange(newOpacity);
    setMarkerPosition(x);
  };
  

  const handleInteractionStart = (event) => {
    event.preventDefault();
    setIsInteracting(true);
    const clientX = event.clientX ?? event.touches[0].clientX;
    updateOpacity(clientX);
  };

  const handleInteractionMove = (event) => {
    if (!isInteracting) return;
    event.preventDefault();
    const clientX = event.clientX ?? event.touches[0].clientX;
    updateOpacity(clientX);
  };

  return (
    <SliderContainer
      ref={sliderRef}
      onMouseDown={handleInteractionStart}
      onTouchStart={handleInteractionStart}
      onMouseMove={handleInteractionMove}
      onTouchMove={handleInteractionMove}
      color={color}
    >
      <Marker style={{ left: markerPosition }} />
    </SliderContainer>
  );
};

export default OpacitySlider;
