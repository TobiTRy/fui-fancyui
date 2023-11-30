import { TSystemMessageProps } from '../../../interface/TSystemMessageProps';
import { TLayer } from '@/interface/TLayer';

type IToastMessage = {
  id: number;
  title: string;
  message: string;
  time?: number;
  themeType: TSystemMessageProps;
  layer?: TLayer;
};

export default IToastMessage;
