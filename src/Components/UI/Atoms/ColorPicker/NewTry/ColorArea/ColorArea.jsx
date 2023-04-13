import React, { useState, useRef, useEffect } from "react";

import Color from "color";

import {
  ColorAreaContainer,
  LightnessGradient,
  Marker,
  ColorIndicator,
  WrapperMarker,
  WrapperColorIndicator
} from "./ColorArea.style";

const ColorArea = ({color, hue, onColorChange }) => {
  const [markerPosition, setMarkerPosition] = useState({ x: 0, y: 0 });
  const [isInteracting, setIsInteracting] = useState(false);
  const colorAreaRef = useRef();

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

  const pickColor = (clientX, clientY) => {
    const rect = colorAreaRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const y = Math.max(0, Math.min(clientY - rect.top, rect.height));

    const saturation = (x / rect.width) * 100;
    const lightness = 100 - (y / rect.height) * 50 - (x / rect.width) * 50;

    const newColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    onColorChange(newColor);
    setMarkerPosition({ x, y });
  };

  const handleInteractionStart = (event) => {
    event.preventDefault();
    setIsInteracting(true);
    const clientX = event.clientX ?? event.touches[0].clientX;
    const clientY = event.clientY ?? event.touches[0].clientY;
    pickColor(clientX, clientY);
  };

  const handleInteractionMove = (event) => {
    if (!isInteracting) return;
    event.preventDefault();
    const clientX = event.clientX ?? event.touches[0].clientX;
    const clientY = event.clientY ?? event.touches[0].clientY;
    pickColor(clientX, clientY);
  };

  const handleDragStart = (event) => {
    event.preventDefault();
  };

  return (
    <ColorAreaContainer
      hue={hue}
      ref={colorAreaRef}
      onMouseDown={handleInteractionStart}
      onTouchStart={handleInteractionStart}
      onMouseMove={handleInteractionMove}
      onTouchMove={handleInteractionMove}
      onDragStart={handleDragStart}
    >
      <LightnessGradient />
      <WrapperMarker style={{ left: markerPosition.x, top: markerPosition.y }}>
        <Marker>
          <WrapperColorIndicator isActive={isInteracting}>
            <ColorIndicator color={Color(color).hex()} />
          </WrapperColorIndicator>
        </Marker>
      </WrapperMarker>
    </ColorAreaContainer>
  );
};

export default ColorArea;
