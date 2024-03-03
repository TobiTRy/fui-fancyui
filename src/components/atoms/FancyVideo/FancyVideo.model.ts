export type TFancyVideo = {
  autoPlay?: boolean;
  muted?: boolean;
  aspectRatio?: string; // e.g. "16/9"
  darken?: number;
};

export type FancyVideoHTMLProps = React.HTMLAttributes<HTMLVideoElement>;

export type TFancyVideoWithHTMLAttrs = TFancyVideo & FancyVideoHTMLProps;
