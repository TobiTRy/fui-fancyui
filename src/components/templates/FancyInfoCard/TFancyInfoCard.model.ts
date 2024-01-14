import { TFancyFlexBox } from '@/components/templates/FancyFlexBox/FancyFlexBox';

export type TFancyInfoCardProps = {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
} & TFancyFlexBox;
