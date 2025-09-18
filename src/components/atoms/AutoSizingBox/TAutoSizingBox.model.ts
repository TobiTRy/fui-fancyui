export type TAutoSizingBox = {
  children?: React.ReactNode;
  startHeight?: number;
  startWidth?: number;
  adjustHeight?: boolean;
  adjustWidth?: boolean;
  changeTrigger?: unknown;
};

export type TAutoSizingBoxWithHTMLAttrs = TAutoSizingBox & React.HTMLAttributes<HTMLDivElement>;
