import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import { SliderContainer, Marker } from "./HueSliderStyles";

const roundValue = (value) => Math.round(value);

const HueSlider = ({ onHueChange }) => {
  const [markerPosition, setMarkerPosition] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const sliderRef = useRef();
  const [hue, setHue] = useState(0); // Add state to store the current hue value

  useEffect(() => {
    const handleGlobalInteractionEnd = () => {
      setIsInteracting(false);
    };

    const handleGlobalInteractionMove = (event) => {
      if (!isInteracting) return;
      const clientX = event.clientX ?? event.touches[0].clientX;
      updateHue(clientX);
    };

    window.addEventListener("mouseup", handleGlobalInteractionEnd);
    window.addEventListener("touchend", handleGlobalInteractionEnd);
    window.addEventListener("mousemove", handleGlobalInteractionMove);
    window.addEventListener("touchmove", handleGlobalInteractionMove);

    return () => {
      window.removeEventListener("mouseup", handleGlobalInteractionEnd);
      window.removeEventListener("touchend", handleGlobalInteractionEnd);
      window.removeEventListener("mousemove", handleGlobalInteractionMove);
      window.removeEventListener("touchmove", handleGlobalInteractionMove);
    };
  }, [isInteracting]);

  useEffect(() => {
    const handleWindowResize = () => {
      updateMarkerPosition(hue);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [hue]);

  const updateMarkerPosition = (hue) => {
    const rect = sliderRef.current.getBoundingClientRect();
    const markerWidth = 5;
    const x = ((hue / 360) * (rect.width - markerWidth));
    setMarkerPosition(x);
  };

  const updateHue = (clientX) => {
    const rect = sliderRef.current.getBoundingClientRect();

    const markerWidth = 5;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width - markerWidth));
    const newHue = roundValue((x / rect.width) * 360);

    setHue(newHue); // Update hue state
    onHueChange(newHue);
    setMarkerPosition(x);
  };

  const handleInteractionStart = (event) => {
    event.preventDefault();
    setIsInteracting(true);
    const clientX = event.clientX ?? event.touches[0].clientX;
    updateHue(clientX);
  };

  return (
    <SliderContainer
      ref={sliderRef}
      onMouseDown={handleInteractionStart}
      onTouchStart={handleInteractionStart}
    >
      <Marker style={{ left: markerPosition }} />
    </SliderContainer>
  );
};

export default HueSlider;
