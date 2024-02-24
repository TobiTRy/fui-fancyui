// Define types for button and anchor attributes
type TNativeButtonProps = React.HTMLAttributes<HTMLButtonElement> & { as?: 'button' };
type TNativeAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' };

// Define a type that allows either specific button or anchor props along with ComponentAsWrapperProps
export type TFancyActionWrapper = {
  children: React.ReactNode;
  WrapperComponent?: React.ReactElement;
} & (TNativeButtonProps | TNativeAnchorProps);
