import { TColorDisplay } from '@/components/molecules/ColorDisplay';

export type TFancyColorDisplay = Omit<TColorDisplay, 'children'> & {
  showText?: boolean;
  showClipboard?: boolean;
};
