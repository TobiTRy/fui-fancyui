import { TSwitchWithNativeAttrs } from '@/components/molecules/Switch';

export type TFancySwitch = {
  label?: string;
  description?: string;
  align?: 'left' | 'right' | 'center';
  alignSwitch?: 'left' | 'right';
} & TSwitchWithNativeAttrs;

export type TFancySwitchWithHTMLAttrs = TFancySwitch;
