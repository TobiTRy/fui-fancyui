import { RawRadio } from '@/components/atoms/RawRadio';
import { FancySelectWrapper } from '@/components/molecules/FancySelectWrapper';
import { TLayer } from '@/types/TLayer';

export type TFancyRadio = Omit<React.ComponentProps<typeof FancySelectWrapper>, 'inputElement'> &
  React.ComponentProps<typeof RawRadio> & { layerTitle?: TLayer };
