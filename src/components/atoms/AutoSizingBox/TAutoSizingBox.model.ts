export type TAutoSizingBox = {
  children?: React.ReactNode;
  startHeight?: number;
  startWidth?: number;
  adjustHeight?: boolean;
  adjustWidth?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  changeTrigger?: any;
};

export type TAutoSizingBoxWithHTMLAttrs = TAutoSizingBox & React.HTMLAttributes<HTMLDivElement>;
