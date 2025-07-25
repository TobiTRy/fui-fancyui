export type TDisabledBox = {
  disabled?: boolean;
  pointerEvents?: 'none' | 'auto';
  children?: React.ReactNode;
};

export type TDisabledBoxHTMLAttributes = React.HTMLAttributes<HTMLDivElement>;

export type TDisabledBoxProps = TDisabledBox & TDisabledBoxHTMLAttributes;
