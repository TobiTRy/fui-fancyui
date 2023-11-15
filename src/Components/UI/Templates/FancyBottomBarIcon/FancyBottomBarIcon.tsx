import React from 'react';

// Import necessary components and interfaces
import { ItemWrapper } from './FancyBottomBarIcon.style';
import BottomBarIcon from '../../Molecules/BottomBarIcon/BottomBarIcon';
import ComponentAsWrapper from '../../Atoms/ComponentAsWrapper/ComponentAsWrapper';
import FancyActionWrapper from '../../Atoms/FancyActionWrapper/FancyActionWrapper';

type TAnchorProps = {
  type: 'a';
  href?: string;
};

type TButtonProps = {
  type?: 'button';
  onClick?: () => void;
};





export type IFancyBottomBarIcon = {
  WrapperComponent?: React.ReactElement;
} & React.ComponentProps<typeof BottomBarIcon> & (TAnchorProps | TButtonProps);

// --------------------------------------------------------------------------- //
//The component creates a button that mainly constructed for the navigation bar //
// --------------------------------------------------------------------------- //
export default function FancyBottomBarIcon(props: IFancyBottomBarIcon) {
  const { WrapperComponent, type, ...BottomBarProps } = props;

  const ContentWrapper = WrapperComponent ? (
    <ComponentAsWrapper wrapper={WrapperComponent} children={<BottomBarIcon {...BottomBarProps} />} />
  ) : type === 'button' ? (
    <FancyActionWrapper as={'a'} children={<BottomBarIcon {...BottomBarProps} />} />
  ) : (
    <FancyActionWrapper as={'button'} children={<BottomBarIcon {...BottomBarProps} />} />
  );
  // Render the component
  return <ItemWrapper>{ContentWrapper}</ItemWrapper>;
}
