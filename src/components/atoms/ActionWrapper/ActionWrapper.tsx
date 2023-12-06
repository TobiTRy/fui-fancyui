import React from 'react';

// Define specific prop types for 'a' and 'button'
type THTMLButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' };
type THTMLAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' };

// Define the main component props as a union of these two types
type TActionWrapperProps = THTMLButtonProps | THTMLAnchorProps;

const ActionWrapper: React.FC<TActionWrapperProps> = (props) => {
  const { children, ...restProps } = props;

  // Conditionally render the 'a' or 'button' element
  return restProps.as === 'a' ? <a {...restProps}>{children}</a> : <button {...restProps}>{children}</button>;
};

export default ActionWrapper;
