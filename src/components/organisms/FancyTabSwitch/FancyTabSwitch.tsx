import { css } from 'styled-components';

import { Fieldset } from '@/components/molecules/Fieldset';
import { borderRadius } from '@/design/theme/designSizes';
import { TabSwitch } from '@/components/molecules/TabSwitch';
import { FancyBox } from '@/components/atoms/FancyBox';

import { tabSwitchSizes } from '@/components/molecules/TabSwitch/TabSwitch.style';
import { TFancyTabSwitch } from './TFancyTabSwitch.model';

// --------------------------------------------------------------------------- //
// -----  The FancyTabswich has more advanced features like Label etc. ------- //
// --------------------------------------------------------------------------- //
export default function FancyTabSwitch(props: TFancyTabSwitch) {
  const {
    values,
    label,
    textLayer = 3,
    themeType,
    layer,
    textColor,
    sizeC,
    disabled,
    outlined,
    rounded,
    wide,
    ...tabSwitchProps
  } = props;

  /* Generate the unordered list for the tab switch */
  return (
    <Fieldset label={label} disabled={disabled}>
      <FancyBox
        outlined={outlined}
        layer={layer}
        externalStyle={css`
          padding: ${sizeC ? tabSwitchSizes[sizeC].paddingComponent : '0'};
          border-radius: ${rounded && borderRadius[rounded]};
          overflow: hidden;
          background-color: ${themeType === 'transparent' && 'transparent'};
          border: ${themeType === 'transparent' && 'solid 1.5px transparent'};
          width: ${wide ? '100%' : 'fit-content'};
        `}
      >
        <TabSwitch
          textLayer={textLayer}
          values={values}
          outlined={outlined}
          rounded={rounded}
          textColor={textColor}
          wide={wide}
          sizeC={sizeC}
          {...tabSwitchProps}
        />
      </FancyBox>
    </Fieldset>
  );
}
