import Color from "color";

// --------------------------------------------------------------------------- //
// ---------------- Define the interfaces for the useSlider Hook ------------- //
// --------------------------------------------------------------------------- //
export interface IUseSlider {
  color?: Color | null;
  hue?: number;
  opacity?: number;
  type: 'hue' | 'opacity' | 'color';
  handlerSlider?: (value: number) => void;
  handlerColor?: (color: Color) => void;
  sliderPositionToColorFunc?: (clientX: number, rect: DOMRect) => number;
  positionToColorFunc?: (hue: number, clientX: number, clientY: number, rect: DOMRect) => { h: number; s: number; v: number } | number;
  colorToPositionFunc: (color: Color, rect: DOMRect) => { x: number; y: number };
}

export interface IMarkerPosition {
  x: number;
  y: number;
}

export interface IUseSliderReturn {
  sliderRef: React.MutableRefObject<any>;
  markerPosition: IMarkerPosition;
  handleInteractionStart: (event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>) => void;
  isInteracting: boolean;
}
