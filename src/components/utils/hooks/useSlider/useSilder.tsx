import { useState, useRef, useEffect, useCallback } from 'react';
import Color from 'color';

import { IMarkerPosition, IUseSlider, IUseSliderReturn } from './IUseSlider.model';

// Throttle function to prevent too many rerenders
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const throttle = (func: (...args: any[]) => void): ((...args: any[]) => void) => {
  let isThrottled = false;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (...args: any[]) => {
    if (!isThrottled) {
      isThrottled = true;
      requestAnimationFrame(() => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        func(...args);
        isThrottled = false;
      });
    }
  };
};

// --------------------------------------------------------------------------- //
// ------------------ Define the main useSlider Hoook function --------------- //
// --------------------------------------------------------------------------- //
const useSlider = ({
  color,
  hue,
  type,
  sliderPositionToColorFunc,
  positionToColorFunc,
  colorToPositionFunc,
  handlerSlider,
  handlerColor,
}: IUseSlider): IUseSliderReturn => {
  const [markerPosition, setMarkerPosition] = useState<IMarkerPosition>({ x: 0, y: 0 });
  const [isInteracting, setIsInteracting] = useState<boolean>(false);
  const sliderRef = useRef<HTMLDivElement>();

  //updates the marker position when the color changes
  const updateMarkerPosition = useCallback(
    (color: Color) => {
      if (!sliderRef.current) return;
      const rect = sliderRef.current.getBoundingClientRect();
      const newPosition = colorToPositionFunc(color, rect);
      setMarkerPosition(newPosition);
    },
    [colorToPositionFunc]
  );

  //hanlde the interaction with the slider and the color area
  const handleInteraction = useCallback(
    (clientX: number, clientY: number) => {
      if (!sliderRef.current) return;
      const rect = sliderRef.current.getBoundingClientRect();
      if (type === 'hue') {
        const newColor = sliderPositionToColorFunc && sliderPositionToColorFunc(clientX, rect);
        handlerSlider && handlerSlider(Math.floor(newColor!) ?? 0);
        const createColor = Color({ h: newColor, s: 100, l: 50 });
        updateMarkerPosition(createColor);
      } else if (type === 'opacity') {
        const newColor = sliderPositionToColorFunc && sliderPositionToColorFunc(clientX, rect);
        const alpha = Math.max(0, Math.min(newColor as number, 1));
        handlerSlider && handlerSlider(alpha ?? 1);
        const createColor = Color({ r: 255, g: 255, b: 255 }).alpha(alpha);
        updateMarkerPosition(createColor);
      } else {
        const newColor = positionToColorFunc && positionToColorFunc(hue ?? 0, clientX, clientY, rect);
        const createColor = Color(newColor);
        handlerColor && handlerColor(createColor);
        updateMarkerPosition(createColor);
      }
    },
    [updateMarkerPosition, positionToColorFunc, type, hue, sliderPositionToColorFunc, handlerSlider, handlerColor]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const throttledHandleInteraction = useCallback(throttle(handleInteraction), [handleInteraction]);

  //handle the interaction start with the slider and the color area
  const handleInteractionStart = (event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>) => {
    setIsInteracting(true);
    if (event.nativeEvent instanceof MouseEvent) {
      throttledHandleInteraction(event.nativeEvent.clientX, event.nativeEvent.clientY);
    } else if (event.nativeEvent instanceof TouchEvent) {
      throttledHandleInteraction(event.nativeEvent.touches[0].clientX, event.nativeEvent.touches[0].clientY);
    }
  };

  // this useEffect is used to prevent the body from scrolling when the user is interacting with the slider
  useEffect(() => {
    if (isInteracting) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isInteracting]);

  //handle the interaction with the slider and the color area
  const handleInteractionMove = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (!isInteracting) return;

      if (event instanceof MouseEvent) {
        event.preventDefault();
        throttledHandleInteraction(event.clientX, event.clientY);
      } else if (event instanceof TouchEvent) {
        if (event.cancelable) event.preventDefault();
        throttledHandleInteraction(event.touches[0].clientX, event.touches[0].clientY);
      }
    },
    [isInteracting, throttledHandleInteraction]
  );

  //handle the interaction end with the slider and the color area
  const handleInteractionEnd = useCallback(() => {
    setIsInteracting(false);
  }, []);

  //update the marker position when the color changes
  useEffect(() => {
    if (!color) return;
    updateMarkerPosition(color);
  }, [color, updateMarkerPosition]);

  //update the marker position when the hue changes
  useEffect(() => {
    if (!hue) return;
    if (type === 'color' && color) {
      updateMarkerPosition(color.hue(hue));
    } else {
      updateMarkerPosition(Color({ h: hue, s: 50, l: 50 }));
    }
  }, [hue, updateMarkerPosition, color, type]);

  //set the initial position of the marker
  useEffect(() => {
    if (!sliderRef.current) return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (!color) type === 'hue' ? (color = Color({ h: hue, s: 100, l: 50 })) : (color = Color({ r: 255, g: 255, b: 255 }).alpha(1));

    const rect = sliderRef.current.getBoundingClientRect();
    const initialPosition = colorToPositionFunc(color, rect);
    setMarkerPosition(initialPosition);
  }, []);

  //the mouse event are listen to the window because the mouse can be outside the slider or area
  useEffect(() => {
    const handleInteractionMoveFunc = (event: MouseEvent | TouchEvent) => handleInteractionMove(event);
    const handleInteractionEndFunc = () => handleInteractionEnd();
    if (isInteracting) {
      window.addEventListener('mousemove', handleInteractionMoveFunc);
      window.addEventListener('touchmove', handleInteractionMoveFunc, { passive: false });
      window.addEventListener('mouseup', handleInteractionEndFunc);
      window.addEventListener('touchend', handleInteractionEndFunc, { passive: false });
    }

    return () => {
      window.removeEventListener('mousemove', handleInteractionMoveFunc);
      window.removeEventListener('touchmove', handleInteractionMoveFunc);
      window.removeEventListener('mouseup', handleInteractionEndFunc);
      window.removeEventListener('touchend', handleInteractionEndFunc);
    };
  }, [handleInteractionMove, handleInteractionEnd, isInteracting]);

  return { sliderRef, markerPosition, handleInteractionStart, isInteracting };
};

export default useSlider;
