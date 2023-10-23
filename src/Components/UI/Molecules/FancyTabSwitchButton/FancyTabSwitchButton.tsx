import React, { useId, HTMLAttributes } from 'react';
import { css } from 'styled-components';

import { SwitchButtonStyle } from './FancyTabSwitchButton.style';
import Typography from '../../Atoms/Typography/Typography';
import { tabSwitchItemSizes } from './FancyTabSwitchButton.style';
import { FancySVGAtom } from '../../Atoms/FancySVGAtom';
import { ITabSwitchButtonProps } from './FancyTabSwitchButton.model';
import FancyContent from '../FancyContent/FancyContent';

// ------------------------------------------------------------------ //
// ------------- main component for the tab (li item) --------------- //
// ------------------------------------------------------------------ //
type IFancyTabSwitchButton = ITabSwitchButtonProps & HTMLAttributes<HTMLDivElement>;
const FancyTabSwitchButton = React.forwardRef<HTMLDivElement, IFancyTabSwitchButton>((props, ref) => {
  const { disabled, selected,onClick, wide, themeType, iconAlign, size, itemKey, label, icon, children, ...HTMLProps } = props;
  console.log(props, itemKey)

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
        id={id + '_' + itemKey}
        disabled={disabled}
        name={'FancyButtonSwitcher' + id}
        type="radio"
        checked={selected}
        aria-hidden="true"
        onChange={() => onClick(itemKey)}
      />
      <Typography htmlFor={id + '_' + itemKey} type="label" style={{zIndex: 1}}>
        {/* {icon && (
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
        )} */}
        <FancyContent text={label} icon={icon} />
        { children }
      </Typography>
    </SwitchButtonStyle>
  );
});

export default FancyTabSwitchButton;
