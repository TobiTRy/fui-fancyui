import { css } from 'styled-components';

import { Fieldset } from '@/components/molecules/Fieldset';
import { TabSwitch } from '@/components/molecules/TabSwitch';
import { FancyBox } from '@/components/atoms/FancyBox';

import { tabSwitchSizes } from '@/components/molecules/TabSwitch/TabSwitch.style';
import { FancyTabSwitchWithTabSwitchAtts } from './TFancyTabSwitch.model';
import { getOpositMainThemeType } from '@/design/designFunctions/getOpositMainThemeType';

// --------------------------------------------------------------------------- //
// -----  The FancyTabswich has more advanced features like Label etc. ------- //
// --------------------------------------------------------------------------- //
export default function FancyTabSwitch(props: FancyTabSwitchWithTabSwitchAtts) {
  const {
    values,
    label,
    textLayer = 2,
    themeType = 'primary',
    layer = 2,
    sizeC,
    disabled,
    outlined,
    borderRadius,
    wide,
    className,
    ...tabSwitchProps
  } = props;

  /* Generate the unordered list for the tab switch */
  /* border-radius: ${rounded && borderRadius[rounded]}; */
  return (
    <Fieldset label={label} disabled={disabled} className={className}>
      <FancyBox
        outlined={outlined}
        themeType={themeType}
        layer={layer}
        borderRadius={borderRadius}
        externalStyle={css`
          padding: ${sizeC ? tabSwitchSizes[sizeC].paddingComponent : '0'};
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
          borderRadius={borderRadius}
          textColor={getOpositMainThemeType(themeType)}
          wide={wide}
          sizeC={sizeC}
          {...tabSwitchProps}
        />
      </FancyBox>
    </Fieldset>
  );
}
