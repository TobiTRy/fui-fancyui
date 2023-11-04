import React from 'react';

// Import necessary components and interfaces
import { IFancyBottomBarIcon } from './FancyBottomBarIcon.model';
import { IconTextButton, Icon, ItemWrapper } from './FancyBottomBarIcon.style';
import Typography from '../Typography/Typography';
import FancyContent from '../../Molecules/FancyContent/FancyContent';

// --------------------------------------------------------------------------- //
//The component creates a button that mainly constructed for the navigation bar //
// --------------------------------------------------------------------------- //
export default function FancyBottomBarIcon(props: IFancyBottomBarIcon) {
  // Destructure props
  const { icon, label, active, disabled, themeType, layer, ...HTMLProps } = props;

  // Render the component
  return (
    <ItemWrapper>
      <IconTextButton $isActive={active} disabled={disabled}  $themeType={themeType} $layer={layer} {...HTMLProps}>
        <FancyContent flexDirection='column' gapBetweenIcon='0'>
          <FancyContent.Icon size="md">{icon}</FancyContent.Icon>
          <FancyContent.Description fontVariant={'smText'}>{label}</FancyContent.Description>
        </FancyContent>
      </IconTextButton>
    </ItemWrapper>
  );
}
