import { TFancyBox } from '@/components/atoms/FancyBox';
import { TFancyFlexBox } from '@/components/templates/FancyFlexBox';
import { TComponentSizes } from '@/types/TComponentSizes';


export type TFancyInfoCardProps = {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  sizeC?: TComponentSizes;
};

export type TFancyInfoCardWithFancyBoxAndFlex = TFancyInfoCardProps & TFancyFlexBox & Omit<TFancyBox, 'sizeC'>;
