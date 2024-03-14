import Color from 'color';

export type TOpacitySlider = {
  colorValue: Color | string;
  opacity: number;
  handler: (opacity: number) => void;
};

export type TOpacitySliderWithHTMLProps = TOpacitySlider & React.HTMLAttributes<HTMLDivElement>;
