import { TSpacings } from '@/types/TSpacings';

export type TFancyModalHeadLine = {
  title?: string | React.ReactNode;
  subTitle?: string | React.ReactNode;
  alignCenter?: boolean;
  gap?: TSpacings;
  hr?: boolean;
};

export type TFancyModalHeadLineWithHTMLProps = TFancyModalHeadLine & React.HTMLProps<HTMLDivElement>;
