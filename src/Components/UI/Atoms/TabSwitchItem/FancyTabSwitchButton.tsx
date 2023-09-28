import React, { useId } from 'react';
import { css } from 'styled-components';

import { LISwitchButtonStyle } from './FancyTabSwitchButton.style';
import Typography from '../Typography/Typography';
import { TUiColorsType } from '../../Design/color/designColor';
import { tabSwitchItemSizes } from './FancyTabSwitchButton.style';
import { FancySVGAtom } from '../FancySVGAtom';
import { getBackgroundColor } from '../../Design/color/colorCalculatorForComponet';

// ------------------------------------------------------------------ //
// ------------- main component for the tab (li item) --------------- //
// ------------------------------------------------------------------ //
interface IFancyTabSwitchItem {
  disabled?: boolean;
  itemObject: { key: string; label?: string; icon?: JSX.Element };
  selected: boolean;
  onClick: (key: string) => void;
  wide?: boolean;
  textColor?: keyof TUiColorsType;
  iconAlign?: 'left' | 'right';
  size?: keyof typeof tabSwitchItemSizes;
  themeType?: keyof TUiColorsType;
}
export default function FancyTabSwitchItem(props: IFancyTabSwitchItem) {
  const { disabled, itemObject, selected, onClick, themeType, wide, textColor, iconAlign, size } = props;
  const id = useId();

  return (
    <LISwitchButtonStyle
      $themeType={themeType}
      $size={size}
      $wide={wide}
      $textColor={textColor}
      $iconAlign={iconAlign}
      $hasIcon={Boolean(itemObject.icon)}
      $hasLabel={Boolean(itemObject.label)}
    >
      <input
        id={id + '_' + itemObject.key}
        disabled={disabled}
        name={'FancyButtonSwitcher' + id}
        type="radio"
        checked={selected}
        onChange={() => onClick(itemObject.key)}
      />
      <Typography htmlFor={id + '_' + itemObject.key} type="label">
        {itemObject.icon && (
          <FancySVGAtom
            size={size || 'sm'}
            themeType={ textColor || 'secondary'}
            externalStyle={css`
              z-index: 1;
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
            `}
          >
            {itemObject.label}
          </Typography>
        )}
      </Typography>
    </LISwitchButtonStyle>
  );
}
