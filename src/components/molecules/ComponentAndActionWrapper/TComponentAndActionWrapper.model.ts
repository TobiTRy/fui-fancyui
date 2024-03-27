type TAnchorProps = {
  type?: 'a';
  href?: string; // `href` is mandatory for an anchor
  onClick?: () => void; // More specific type for `onClick`
};

type TButton = {
  type: 'button';
  onClick?: () => void; // More specific type for `onClick`
  href?: string;
};

export type TComponentAndActionWrapper = {
  WrapperComponent?: React.ReactElement;
  children?: React.ReactNode;
} & (TAnchorProps | TButton);
