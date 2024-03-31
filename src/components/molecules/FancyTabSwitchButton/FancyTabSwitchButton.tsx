import React, { useId } from 'react';

import { Typography } from '@/components/atoms/Typography';
import { FancyContent } from '@/components/molecules/FancyContent';
import { leftRightToFlex } from '@/utils/functions/leftRightToFlex';
import { SwitchButtonStyle } from './FancyTabSwitchButton.style';
import { TFancyTabSwitchButton } from './TFancyTabSwitchButton.model';
import { sizeSettings } from './sizeSettings';

// ------------------------------------------------------------------ //
// ------------- main component for the tab (li item) --------------- //
// ------------------------------------------------------------------ //
const FancyTabSwitchButton = React.forwardRef<HTMLDivElement, TFancyTabSwitchButton>((props, ref) => {
  const {
    sizeC = 'sm',
    layer = 0,
    themeType = 'secondary',
    disabled,
    selected,
    onClick,
    iconAlign,
    itemKey,
    label,
    icon,
    children,
    externalStyle,
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
      <Typography
        htmlFor={id + '_' + itemKey}
        elType="label"
        themeType={themeType}
        variant={sizeSettings[sizeC].fontSize}
        externalStyle={{ zIndex: 1 }}
      >
        {(icon || label) && (
          <FancyContent direction={leftRightToFlex(iconAlign)}>
            {icon && <FancyContent.Icon>{icon}</FancyContent.Icon>}
            {label && <FancyContent.Title fontVariant={sizeSettings[sizeC].fontSize}>{label}</FancyContent.Title>}
          </FancyContent>
        )}
        {children}
      </Typography>
    </SwitchButtonStyle>
  );
});

export default FancyTabSwitchButton;
