export type THueSlider = {
  handler?: (hue: number) => void;
  hue?: number;
};

export type THueSliderWithHTMLProps = THueSlider & React.HTMLProps<HTMLDivElement>;
