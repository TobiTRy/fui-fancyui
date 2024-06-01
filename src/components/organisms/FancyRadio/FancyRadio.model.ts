import { TRawRadioWithHTMLAttrs } from '@/components/atoms/RawRadio/TRawRadio.model';
import { TFancySelectWrapper } from '@/components/molecules/FancySelectWrapper';
import { TLayer } from '@/types/TLayer';

export type TFancyRadio = Omit<TFancySelectWrapper, 'inputElement'> & TRawRadioWithHTMLAttrs & { layerTitle?: TLayer };
