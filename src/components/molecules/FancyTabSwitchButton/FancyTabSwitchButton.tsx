import React, { useId } from 'react';

import { Typography } from '@/components/atoms/Typography';
import { FancyContent } from '@/components/molecules/FancyContent';
import { leftRightToFlex } from '@/utils/functions/leftRightToFlex';
import { SwitchButtonStyle } from './FancyTabSwitchButton.style';
import { TFancyTabSwitchButton } from './TFancyTabSwitchButton.model';

// ------------------------------------------------------------------ //
// ------------- main component for the tab (li item) --------------- //
// ------------------------------------------------------------------ //
const FancyTabSwitchButton = React.forwardRef<HTMLDivElement, TFancyTabSwitchButton>((props, ref) => {
  const {
    disabled,
    selected,
    onClick,
    iconAlign,
    sizeC,
    itemKey,
    label,
    icon,
    children,
    externalStyle,
    themeType,
    layer,
    ...HTMLProps
  } = props;

  const id = useId();

  return (
    <SwitchButtonStyle
      ref={ref}
      role="radio"
      $sizeC={sizeC}
      $textColor={themeType}
      $layer={layer}
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
        onChange={() => onClick && onClick(itemKey)}
      />
      <Typography htmlFor={id + '_' + itemKey} elType="label" variant="interactiveMd" externalStyle={{ zIndex: 1 }}>
        {(icon || label) && (
          <FancyContent direction={leftRightToFlex(iconAlign)}>
            {icon && <FancyContent.Icon>{icon}</FancyContent.Icon>}
            {label && <FancyContent.Title>{label}</FancyContent.Title>}
          </FancyContent>
        )}
        {children}
      </Typography>
    </SwitchButtonStyle>
  );
});

export default FancyTabSwitchButton;
