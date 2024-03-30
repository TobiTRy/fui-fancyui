import { IColorFormat } from '@/utils/variables/colorFormat/colorFormats';

export type TFancyColorPicker = {
  outputFormat?: IColorFormat;
  colorArea?: boolean;
  opacitySlider?: boolean;
  hueSlider?: boolean;
  colorOutput?: boolean;
  colorDisplay?: boolean;
  inputColor?: string;
  handler?: (color: string) => void;
};

export type TFancyColorPickerWithHTMLAttrs = TFancyColorPicker & React.HTMLAttributes<HTMLDivElement>;
