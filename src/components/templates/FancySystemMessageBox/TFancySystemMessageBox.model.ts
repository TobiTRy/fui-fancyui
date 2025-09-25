import { TFancyContentHTMLAttrs } from '@/components/molecules/FancyContent';
import { TSystemMessageBoxWithHTMLAttrs } from '@/components/atoms/SystemMessageBox';
import { TComponentSizesMid } from '@/types/TComponentSizes';

export type TFancySystemMessage = Omit<TSystemMessageBoxWithHTMLAttrs, 'sizeC' | 'children'> & {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  useFuiIcons?: boolean;
  sizeC?: TComponentSizesMid;
};

export type TFancySystemMessageWithFancyContent = TFancySystemMessage & TFancyContentHTMLAttrs;
