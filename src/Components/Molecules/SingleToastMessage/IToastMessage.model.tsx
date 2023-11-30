import { TSystemMessageProps } from '../../core/interface/TSystemMessageProps';
import { TLayer } from '@/components/core/interface/TLayer';

type IToastMessage = {
  id: number;
  title: string;
  message: string;
  time?: number;
  themeType: TSystemMessageProps;
  layer?: TLayer;
};

export default IToastMessage;
