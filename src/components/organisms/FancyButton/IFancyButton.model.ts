import { ButtonHTMLAttributes } from 'react';

type NativeButtonAttributes = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>;

type IFancyButton = {
  isLoading?: boolean;
  align?: 'left' | 'right' | 'center';
  iconAlign?: 'left' | 'right';
  icon?: JSX.Element;
};

export type IFancyButtonProps = IFancyButton & NativeButtonAttributes;
