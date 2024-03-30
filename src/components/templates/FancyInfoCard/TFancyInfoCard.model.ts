import { TFancyBox } from '@/components/atoms/FancyBox';
import { TFancyFlexBox } from '@/components/templates/FancyFlexBox';

export type TFancyInfoCardProps = {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
};

export type TFancyInfoCardWithFancyBoxAndFlex = TFancyInfoCardProps & TFancyFlexBox & TFancyBox;
