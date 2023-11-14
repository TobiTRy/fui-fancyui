import React from 'react';

// Import necessary components and interfaces
import { IFancyBottomBarIcon } from './FancyBottomBarIcon.model';
import { ContentWrapper, ItemWrapper } from './FancyBottomBarIcon.style';
import FancyContent from '../../Molecules/FancyContent/FancyContent';
import ComponentAsWrapper from '../ComponentAsWrapper/ComponentAsWrapper';

// --------------------------------------------------------------------------- //
//The component creates a button that mainly constructed for the navigation bar //
// --------------------------------------------------------------------------- //

const generateContent = (props: IFancyBottomBarIcon) => {
  const { icon, label, isActive, disabled, themeType, layer, ...HTMLProps } = props;

  return (
    <ContentWrapper  $isActive={isActive} $disabled={disabled} $themeType={themeType} $layer={layer}>
      <FancyContent flexDirection="column" gapBetweenIcon="0">
        <FancyContent.Icon size="md">{icon}</FancyContent.Icon>
        <FancyContent.Description fontVariant={'smText'}>{label}</FancyContent.Description>
      </FancyContent>
    </ContentWrapper>
  );
};

export default function FancyBottomBarIcon(props: IFancyBottomBarIcon) {
  const { icon, label, isActive, disabled, themeType, layer, WrapperComponent, ...HTMLProps } = props;

  // Generate a link button if a href is provided
  const Content = generateContent(props);
  const Wrapper = WrapperComponent ? WrapperComponent : HTMLProps.href === 'a' ? <a {...HTMLProps}></a> : <button {...HTMLProps}></button>;

  // Render the component
  return (
    <ItemWrapper className='Name'>
      <ComponentAsWrapper wrapper={Wrapper} children={Content} />
    </ItemWrapper>
  );
}
