import { TFancyContentHTMLAttrs } from "@/components/molecules/FancyContent";
import { TSystemMessage } from "@/components/molecules/SystemMessage";
import { TComponentSizes } from "@/types/TComponentSizes";


export type TFancySystemMessage = Omit<TSystemMessage, 'sizeC' | 'children'> & {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  sizeC?: TComponentSizes;
};

export type TFancySystemMessageWithFancyContent = TFancySystemMessage & TFancyContentHTMLAttrs