import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import { SliderContainer, Marker } from "./HueSliderStyles";

const roundValue = (value) => Math.round(value);

const HueSlider = ({ onHueChange }) => {
  const [markerPosition, setMarkerPosition] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const sliderRef = useRef();

  useEffect(() => {
    const handleGlobalInteractionEnd = () => {
      setIsInteracting(false);
    };

    window.addEventListener("mouseup", handleGlobalInteractionEnd);
    window.addEventListener("touchend", handleGlobalInteractionEnd);
    return () => {
      window.removeEventListener("mouseup", handleGlobalInteractionEnd);
      window.removeEventListener("touchend", handleGlobalInteractionEnd);
    };
  }, []);

  const updateHue = (clientX) => {
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const hue = roundValue((x / rect.width) * 360);

    onHueChange(hue);
    setMarkerPosition(x);
  };

  const handleInteractionStart = (event) => {
    event.preventDefault();
    setIsInteracting(true);
    const clientX = event.clientX ?? event.touches[0].clientX;
    updateHue(clientX);
  };

  const handleInteractionMove = (event) => {
    if (!isInteracting) return;
    event.preventDefault();
    const clientX = event.clientX ?? event.touches[0].clientX;
    updateHue(clientX);
  };

  return (
    <SliderContainer
      ref={sliderRef}
      onMouseDown={handleInteractionStart}
      onTouchStart={handleInteractionStart}
      onMouseMove={handleInteractionMove}
      onTouchMove={handleInteractionMove}
    >
      <Marker style={{ left: markerPosition }} />
    </SliderContainer>
  );
};

export default HueSlider;
