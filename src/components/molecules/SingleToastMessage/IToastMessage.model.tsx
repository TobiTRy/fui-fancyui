import { TSystemMessageProps } from '../../../types/TSystemMessageProps';
import { TLayer } from '@/types/TLayer';

type IToastMessage = {
  id: number;
  title: string;
  message: string;
  time?: number;
  themeType: TSystemMessageProps;
  layer?: TLayer;
};

export default IToastMessage;
