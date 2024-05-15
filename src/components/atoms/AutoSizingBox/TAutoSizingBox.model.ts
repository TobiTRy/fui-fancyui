export type TAutoSizingBox = {
  children?: React.ReactNode;
  startHeight?: number;
  startWidth?: number;
  adjustHeight?: boolean;
  adjustWidth?: boolean;
};

export type TAutoSizingBoxWithHTMLAttrs = TAutoSizingBox & React.HTMLAttributes<HTMLDivElement>;
