import { CSSProp } from 'styled-components';

export type TFancyGridTemplateItem = {
  gridArea: string;
  externalStyle?: CSSProp;
  children?: React.ReactNode;
};

export type TFancyGridTemplateItemWithHTMlAttrs = TFancyGridTemplateItem & React.HTMLAttributes<HTMLDivElement>;
