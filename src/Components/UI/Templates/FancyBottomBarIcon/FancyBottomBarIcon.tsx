import React from 'react';

import { ItemWrapper } from './FancyBottomBarIcon.style';
import BottomBarIcon from '../../Molecules/BottomBarIcon/BottomBarIcon';
import ComponentAsWrapper from '../../Atoms/ComponentAsWrapper/ComponentAsWrapper';
import FancyActionWrapper from '../../Atoms/FancyActionWrapper/FancyActionWrapper';

type TAnchorProps = {
  type?: 'a';
  href: string; // `href` is mandatory for an anchor
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void; // More specific type for `onClick`
};

type TButtonProps = {
  type: 'button';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // More specific type for `onClick`
  href?: never; // `href` should not be available for a button
};

export type IFancyBottomBarIcon = {
  WrapperComponent?: React.ReactElement;
} & React.ComponentProps<typeof BottomBarIcon> &
  (TAnchorProps | TButtonProps);

export default function FancyBottomBarIcon(props: IFancyBottomBarIcon) {
  const { WrapperComponent, type, href, onClick, ...BottomBarProps } = props;

  const ContentWrapper = WrapperComponent ? (
    <ComponentAsWrapper wrapper={WrapperComponent} children={<BottomBarIcon {...BottomBarProps} />} />
  ) : type === 'button' ? (
    <FancyActionWrapper as={'button'} onClick={onClick} children={<BottomBarIcon {...BottomBarProps} />} />
  ) : (
    <FancyActionWrapper as={'a'} href={href} onClick={onClick} children={<BottomBarIcon {...BottomBarProps} />} />
  );

  return <ItemWrapper>{ContentWrapper}</ItemWrapper>;
}
