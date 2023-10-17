import React from 'react';

// Import necessary components and interfaces
import { IFancyBottomBarIcon } from './FancyBottomBarIcon.model';
import { IconTextButton, Icon, Underline, ItemWrapper } from './FancyBottomBarIcon.style';
import Typography from '../Typography/Typography';


// --------------------------------------------------------------------------- //
//The component creates a button that mainly constructed for the navigation bar //
// --------------------------------------------------------------------------- //
export default function FancyBottomBarIcon(props: IFancyBottomBarIcon) {
  // Destructure props
  const { icon, label, active, onClick, disabled, themeType, layer } = props;

  // Render the component
  return (
    <ItemWrapper>
      <IconTextButton $isActive={active} disabled={disabled} onClick={onClick} $themeType={themeType} $layer={layer}>
        <Icon>{icon}</Icon>
        <Typography type="smText">{label}</Typography>
        <Underline $isActive={active} />
      </IconTextButton>
    </ItemWrapper>
  );
}