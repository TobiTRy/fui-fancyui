import React, { HTMLAttributes, useId } from 'react';

import { Typography } from '@/components/atoms/Typography';
import { FancyContent } from '@/components/molecules/FancyContent';
import { ITabSwitchButtonProps } from './FancyTabSwitchButton.model';
import { SwitchButtonStyle } from './FancyTabSwitchButton.style';
import { leftRightToFlex } from '@/utils/functions/leftRightToFlex';

// ------------------------------------------------------------------ //
// ------------- main component for the tab (li item) --------------- //
// ------------------------------------------------------------------ //
type IFancyTabSwitchButton = ITabSwitchButtonProps & HTMLAttributes<HTMLDivElement>;
const FancyTabSwitchButton = React.forwardRef<HTMLDivElement, IFancyTabSwitchButton>((props, ref) => {
  const { disabled, selected, onClick, iconAlign, size, itemKey, label, icon, children, externalStyle,...HTMLProps } =
    props;

  const id = useId();

  return (
    <SwitchButtonStyle
      ref={ref}
      role="radio"
      $size={size}
      $iconAlign={iconAlign}
      $hasIcon={Boolean(icon)}
      $hasLabel={Boolean(label)}
      $externalStyle={externalStyle}
      {...HTMLProps}
    >
      <input
        id={id + '_' + itemKey}
        disabled={disabled}
        name={'FancyButtonSwitcher' + id}
        type="radio"
        checked={selected}
        aria-hidden="true"
        onChange={() => onClick(itemKey)}
      />
      <Typography htmlFor={id + '_' + itemKey} type="label" style={{ zIndex: 1 }}>
        {icon ||
          (label && (
            <FancyContent flexDirection={leftRightToFlex(iconAlign)}>
              {icon && <FancyContent.Icon>{icon}</FancyContent.Icon>}
              {label && <FancyContent.Title>{label}</FancyContent.Title>}
            </FancyContent>
          ))}
        {children}
      </Typography>
    </SwitchButtonStyle>
  );
});

export default FancyTabSwitchButton;
