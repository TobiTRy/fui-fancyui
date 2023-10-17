import React, { useId, HTMLAttributes } from 'react';
import { css } from 'styled-components';

import { SwitchButtonStyle } from './FancyTabSwitchButton.style';
import Typography from '../../Atoms/Typography/Typography';
import { TUiColorsType } from '../../Design/color/designColor';
import { tabSwitchItemSizes } from './FancyTabSwitchButton.style';
import { FancySVGAtom } from '../../Atoms/FancySVGAtom';

// ------------------------------------------------------------------ //
// ------------- main component for the tab (li item) --------------- //
// ------------------------------------------------------------------ //
interface ITabSwitchButton {
  disabled?: boolean;
  itemObject: { key: string; label?: string; icon?: JSX.Element };
  selected: boolean;
  onClick: (key: string) => void;
  wide?: boolean;
  themeType?: keyof TUiColorsType;
  iconAlign?: 'left' | 'right';
  size?: keyof typeof tabSwitchItemSizes;
}
type IFancyTabSwitchButton = ITabSwitchButton & HTMLAttributes<HTMLDivElement>;
const FancyTabSwitchButton = React.forwardRef<HTMLDivElement, IFancyTabSwitchButton>((props, ref) => {
  const { disabled, itemObject, selected, onClick, wide, themeType, iconAlign, size, ...HTMLProps } = props;
  const id = useId();

  return (
    <SwitchButtonStyle
      ref={ref}
      role="radio"
      $size={size}
      $wide={wide}
      $themeType={themeType}
      $iconAlign={iconAlign}
      $hasIcon={Boolean(itemObject.icon)}
      $hasLabel={Boolean(itemObject.label)}
      {...HTMLProps}
    >
      <input
        id={id + '_' + itemObject.key}
        disabled={disabled}
        name={'FancyButtonSwitcher' + id}
        type="radio"
        checked={selected}
        aria-hidden="true"
        onChange={() => onClick(itemObject.key)}
      />
      <Typography htmlFor={id + '_' + itemObject.key} type="label">
        {itemObject.icon && (
          <FancySVGAtom
            size={size || 'sm'}
            themeType={themeType || 'secondary'}
            externalStyle={css`
              z-index: 1;
              flex-shrink: 0;
            `}
          >
            {itemObject.icon}
          </FancySVGAtom>
        )}
        {itemObject.label && (
          <Typography
            type="inlineElement"
            weight="bold"
            variant={tabSwitchItemSizes[size || 'sm'].fontSize}
            style={css`
              z-index: 1;
              word-break: break-word;
            `}
          >
            {itemObject.label}
          </Typography>
        )}
      </Typography>
    </SwitchButtonStyle>
  );
});

export default FancyTabSwitchButton;
