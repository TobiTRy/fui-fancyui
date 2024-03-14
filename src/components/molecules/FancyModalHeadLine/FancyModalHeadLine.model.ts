export type TFancyModalHeadLine = {
  title?: string;
  subTitle?: string;
  alignCenter?: boolean;
  hr?: boolean;
};

export type TFancyModalHeadLineWithHTMLProps = TFancyModalHeadLine & React.HTMLProps<HTMLDivElement>;
