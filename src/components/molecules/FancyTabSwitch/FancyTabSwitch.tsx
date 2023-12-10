import { css } from 'styled-components';

import { Fieldset } from '@/components/molecules/Fieldset';
import { borderRadius } from '@/design/theme/designSizes';
import { TabSwitch } from '@/components/molecules/TabSwitch';
import { FancyBox } from '@/components/atoms/FancyBox';

import { tabSwitchSizes } from '@/components/molecules/TabSwitch/TabSwitch.style';
import { ITabSwitchProps } from '@/components/molecules/TabSwitch/TabSwitch.model';


const calcPadding = (size: ITabSwitchProps['size'], outlined?: boolean) => {
  if (outlined) {
    return parseInt(tabSwitchSizes[size || 'sm'].paddingComponent) - 1.5 + 'px';
  }
  return size ? tabSwitchSizes[size].paddingComponent : '0';
}

// --------------------------------------------------------------------------- //
// -----  The FancyTabswich has more advanced features like Label etc. ------- //
// --------------------------------------------------------------------------- //
export default function FancyTabSwitch(props: ITabSwitchProps & { label?: string }) {
  const { values, label, layer, themeType, size, disabled, outlined, rounded, wide, ...tabSwitchProps } = props;

  const clacPadding = calcPadding(size, outlined)
  /* Generate the unordered list for the tab switch */
  return (
    <Fieldset label={label} disabled={disabled}>
      <FancyBox
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
      </FancyBox>
    </Fieldset>
  );
}
