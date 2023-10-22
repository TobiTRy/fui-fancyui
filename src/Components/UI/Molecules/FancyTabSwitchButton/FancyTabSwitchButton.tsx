import React, { useId, HTMLAttributes } from 'react';
import { css } from 'styled-components';

import { SwitchButtonStyle } from './FancyTabSwitchButton.style';
import Typography from '../../Atoms/Typography/Typography';
import { tabSwitchItemSizes } from './FancyTabSwitchButton.style';
import { FancySVGAtom } from '../../Atoms/FancySVGAtom';
import { ITabSwitchButtonProps } from './FancyTabSwitchButton.model';

// ------------------------------------------------------------------ //
// ------------- main component for the tab (li item) --------------- //
// ------------------------------------------------------------------ //
type IFancyTabSwitchButton = ITabSwitchButtonProps & HTMLAttributes<HTMLDivElement>;
const FancyTabSwitchButton = React.forwardRef<HTMLDivElement, IFancyTabSwitchButton>((props, ref) => {
  const { disabled, selected, onClick, wide, themeType, iconAlign, size, key, label, icon, children, ...HTMLProps } = props;
  

  const id = useId();

  return (
    <SwitchButtonStyle
      ref={ref}
      role="radio"
      $size={size}
      $wide={wide}
      $themeType={themeType}
      $iconAlign={iconAlign}
      $hasIcon={Boolean(icon)}
      $hasLabel={Boolean(label)}
      {...HTMLProps}
    >
      <input
        id={id + '_' + key}
        disabled={disabled}
        name={'FancyButtonSwitcher' + id}
        type="radio"
        checked={selected}
        aria-hidden="true"
        onChange={() => onClick(key)}
      />
      <Typography htmlFor={id + '_' + key} type="label">
        {icon && (
          <FancySVGAtom
            size={size || 'sm'}
            themeType={themeType || 'secondary'}
            externalStyle={css`
              z-index: 1;
              flex-shrink: 0;
            `}
          >
            {icon}
          </FancySVGAtom>
        )}
        {label && (
          <Typography
            type="inlineElement"
            weight="bold"
            variant={tabSwitchItemSizes[size || 'sm'].fontSize}
            style={css`
              z-index: 1;
              word-break: break-word;
            `}
          >
            {label}
          </Typography>
        )}
        { children }
      </Typography>
    </SwitchButtonStyle>
  );
});

export default FancyTabSwitchButton;
