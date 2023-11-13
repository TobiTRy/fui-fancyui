import React from 'react';

// Import necessary components and interfaces
import { IFancyBottomBarIcon } from './FancyBottomBarIcon.model';
import { IconTextButton, ItemWrapper } from './FancyBottomBarIcon.style';
import FancyContent from '../../Molecules/FancyContent/FancyContent';
import ComponentAsWrapper from '../ComponentAsWrapper/ComponentAsWrapper';

// --------------------------------------------------------------------------- //
//The component creates a button that mainly constructed for the navigation bar //
// --------------------------------------------------------------------------- //
export default function FancyBottomBarIcon(props: IFancyBottomBarIcon) {
  const { icon, label, isActive, disabled, themeType, layer, ...HTMLProps } = props;

  // Render the component
  return (
    <ItemWrapper>
      <ComponentAsWrapper wrapper={<button/>}>
        <FancyContent flexDirection='column' gapBetweenIcon='0'>
          <FancyContent.Icon size="md">{icon}</FancyContent.Icon>
          <FancyContent.Description fontVariant={'smText'}>{label}</FancyContent.Description>
        </FancyContent>
      </ComponentAsWrapper>
    </ItemWrapper>
  );
}
