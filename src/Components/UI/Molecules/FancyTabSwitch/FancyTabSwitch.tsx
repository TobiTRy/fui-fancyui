import React from 'react';
import { css } from 'styled-components';

import { borderRadius } from '../../../Design/designSizes';
import Fieldset from '../Fieldset/Fieldset';
import FancyBar from '../../Atoms/FancyBox/FancyBox';
import TabSwitch from '../TabSwitch/TabSwitch';
import { tabSwitchSizes } from '../TabSwitch/TabSwitch.style';
import { ITabSwitchProps } from '../TabSwitch/TabSwitch.model';

// Define the main FancyTabSwitch component
export default function FancyTabSwitch(props: ITabSwitchProps & { label?: string }) {
  const { values, label, layer, themeType, size, disabled, outlined, rounded, wide, ...tabSwitchProps } = props;

  const clacPadding = outlined
    ? parseInt(tabSwitchSizes[size || 'sm'].paddingComponent) - 1.5 + 'px'
    : size
      ? tabSwitchSizes[size].paddingComponent
      : '0';

  /* Generate the unordered list for the tab switch */
  return (
    <Fieldset label={label} disabled={disabled}>
      <FancyBar
        {...tabSwitchProps}
        outlined={outlined}
        layer={layer}
        externalStyle={css`
          padding: ${clacPadding};
          border-radius: ${rounded && borderRadius[rounded]};
          overflow: hidden;
          background-color: ${themeType === 'transparent' && 'transparent'};
          width: ${wide ? '100%' : 'fit-content'};
        `}
      >
        <TabSwitch
          layer={layer}
          values={values}
          outlined={outlined}
          rounded={rounded}
          themeType={themeType}
          wide={wide}
          {...tabSwitchProps}
        />
      </FancyBar>
    </Fieldset>
  );
}
