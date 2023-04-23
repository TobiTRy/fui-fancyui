import { useState, useRef, useEffect, useCallback, MouseEventHandler, TouchEventHandler } from 'react';
import Color from 'color';
import { colorToPositionFunc, positionToColorFunc } from './sliderUtils';

interface IUseSlider {
  color: Color | null;
  hue?: number;
  opacity?: number;
  onColorChange: (color: Color) => void;
  type: 'hue' | 'opacity';
}

interface IMarkerPosition {
  x: number;
  y: number;
}

interface IUseSliderReturn {
  sliderRef: React.MutableRefObject<any>;
  markerPosition: IMarkerPosition;
  handleInteractionStart: (event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>) => void;
  isInteracting: boolean;
  positionToColor: (clientX: number, clientY: number, rect: DOMRect) => { h: number; s: number; l: number } | number;
  colorToPosition: (color: Color, rect: DOMRect) => IMarkerPosition;
}

const useSlider = ({ color, hue, opacity, onColorChange, type }: IUseSlider): IUseSliderReturn => {
  const [markerPosition, setMarkerPosition] = useState<IMarkerPosition>({ x: 0, y: 0 });
  const [isInteracting, setIsInteracting] = useState<boolean>(false);
  const sliderRef = useRef<HTMLDivElement>();

  const positionToColor = useCallback(
    (clientX: number, clientY: number, rect: DOMRect) => positionToColorFunc(type, hue, clientX, clientY, rect),
    [type, hue]
  );
  
  const colorToPosition = useCallback((color: Color, rect: DOMRect) => colorToPositionFunc(type, color, rect), [type]);

  // update the position of the marker
  const updateMarkerPosition = useCallback(
    (color: Color) => {
      if (!sliderRef.current) return;
      const rect = sliderRef.current.getBoundingClientRect();
      const newPosition = colorToPosition(color, rect);
      setMarkerPosition(newPosition);
    },
    [colorToPosition]
  );

  // handle the interaction with the slider
  const handleInteraction = useCallback(
    (clientX: number, clientY: number) => {
      if (!sliderRef.current) return;
      const rect = sliderRef.current.getBoundingClientRect();
      const newColor = positionToColor(clientX, clientY, rect);
      if (type === 'hue') {
        const createColor = Color({ h: newColor, s: 100, l: 50 });
        onColorChange(createColor);
        updateMarkerPosition(createColor);
      } else if (type === 'opacity') {
        if(!color) return;
        const alpha = newColor as number;
        const createColor = Color(color).alpha(alpha);
        onColorChange(createColor);
        updateMarkerPosition(createColor);
      } else {
        const createColor = Color(newColor);
        onColorChange(createColor);
        updateMarkerPosition(createColor);
      }
    },
    [onColorChange, updateMarkerPosition, positionToColor, type, color]
  );
  
  // handle the start of the interaction with the slider
  const handleInteractionStart = (event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>) => {
    setIsInteracting(true);
    if (event.nativeEvent instanceof MouseEvent) {
      event.preventDefault();
      handleInteraction(event.nativeEvent.clientX, event.nativeEvent.clientY);
    } else if (event.nativeEvent instanceof TouchEvent) {
      event.preventDefault();
      handleInteraction(event.nativeEvent.touches[0].clientX, event.nativeEvent.touches[0].clientY);
    }
  };

  // handle the interaction with the slider
  const handleInteractionMove = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (!isInteracting) return;

      if (event instanceof MouseEvent) {
        event.preventDefault();
        handleInteraction(event.clientX, event.clientY);
      } else if (event instanceof TouchEvent) {
        event.preventDefault();
        handleInteraction(event.touches[0].clientX, event.touches[0].clientY);
      }
    },
    [isInteracting, handleInteraction]
  );

  const handleInteractionEnd = useCallback(() => {
    setIsInteracting(false);
  }, []);

  // set the initial position of the marker
  useEffect(() => {
    if (!sliderRef.current || !color) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const initialPosition = colorToPosition(color, rect);
    setMarkerPosition(initialPosition);
  }, []);

  // set the event listeners for the inputs
  useEffect(() => {
    const handleInteractionMoveFunc = (event: MouseEvent | TouchEvent) => handleInteractionMove(event);
    const handleInteractionEndFunc = () => handleInteractionEnd();
    
    if (isInteracting) {
      window.addEventListener('mousemove', handleInteractionMoveFunc);
      window.addEventListener('touchmove', handleInteractionMoveFunc);
      window.addEventListener('mouseup', handleInteractionEndFunc);
      window.addEventListener('touchend', handleInteractionEndFunc);
    }

    return () => {
      window.removeEventListener('mousemove', handleInteractionMoveFunc);
      window.removeEventListener('touchmove', handleInteractionMoveFunc);
      window.removeEventListener('mouseup', handleInteractionEndFunc);
      window.removeEventListener('touchend', handleInteractionEndFunc);
    };
  }, [handleInteractionMove, handleInteractionEnd, isInteracting]);

  return { sliderRef, markerPosition, handleInteractionStart, isInteracting, positionToColor, colorToPosition };
};

export default useSlider;
