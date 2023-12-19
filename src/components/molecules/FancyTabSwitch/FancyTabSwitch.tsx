import { css } from 'styled-components';

import { Fieldset } from '@/components/molecules/Fieldset';
import { borderRadius } from '@/design/theme/designSizes';
import { TabSwitch } from '@/components/molecules/TabSwitch';
import { FancyBox } from '@/components/atoms/FancyBox';

import { tabSwitchSizes } from '@/components/molecules/TabSwitch/TabSwitch.style';
import { ITabSwitchProps } from '@/components/molecules/TabSwitch/TabSwitch.model';

// --------------------------------------------------------------------------- //
// -----  The FancyTabswich has more advanced features like Label etc. ------- //
// --------------------------------------------------------------------------- //
export default function FancyTabSwitch(props: ITabSwitchProps & { label?: string }) {
  const { values, label, layer = 3, themeType, size, disabled, outlined, rounded, wide, indicatorType,...tabSwitchProps } = props;

  /* Generate the unordered list for the tab switch */
  return (
    <Fieldset label={label} disabled={disabled}>
      <FancyBox
        outlined={outlined}
        layer={layer}
        externalStyle={css`
          padding: ${size ? tabSwitchSizes[size].paddingComponent : '0'};
          border-radius: ${rounded && borderRadius[rounded]};
          overflow: hidden;
          background-color: ${themeType === 'transparent' && 'transparent'};
          border: ${themeType === 'transparent' && 'solid 1.5px transparent'};
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
          size={size}
          {...tabSwitchProps}
        />
      </FancyBox>
    </Fieldset>
  );
}
