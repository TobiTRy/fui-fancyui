import { TFancyContentHTMLAttrs } from '@/components/molecules/FancyContent';
import { TSystemMessageBoxWithHTMLAttrs } from '@/components/atoms/SystemMessageBox';
import { TComponentSizes } from '@/types/TComponentSizes';

export type TFancySystemMessage = Omit<TSystemMessageBoxWithHTMLAttrs, 'sizeC' | 'children'> & {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  useFuiIcons?: boolean;
  sizeC?: TComponentSizes;
};

export type TFancySystemMessageWithFancyContent = TFancySystemMessage & TFancyContentHTMLAttrs;
