import { css } from 'styled-components';

import { Fieldset } from '@/components/molecules/Fieldset';
import { TabSwitch } from '@/components/molecules/TabSwitch';
import { FancyBox } from '@/components/atoms/FancyBox';

import { FancyTabSwitchWithTabSwitchAtts } from './TFancyTabSwitch.model';
import { getOpositMainThemeType } from '@/design/designFunctions/getOpositMainThemeType';
import { generateBorderRadiusForComponentOnlyValue } from '@/design/designFunctions/generateBorderRadiusForComponent';
import { calcBorderRadiusWithPadding } from '@/design/designFunctions/calcBorderRadiusWithPadding';
import { arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';

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
    sizeC = 'sm',
    disabled,
    spacingToEdge,
    outlined,
    borderRadius,
    wide,
    className,
    activeTextColor,
    switchIndicatorThemeType,
    ...tabSwitchProps
  } = props;

  return (
    <Fieldset legend={label} disabled={disabled} className={className}>
      <FancyBox
        outlined={outlined}
        outlinedRemoveBorder={outlined ? false : true}
        themeType={themeType}
        layer={layer}
        borderRadius={generateBorderRadiusForComponentOnlyValue({ borderRadius, sizeC })}
        externalStyle={css`
          padding: ${arrayToCssValues(spacingToEdge, 'spacing')};
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
          activeTextThemeType={activeTextColor}
          switchIndicatorThemeType={switchIndicatorThemeType}
          borderRadius={calcBorderRadiusWithPadding({
            borderRadius: generateBorderRadiusForComponentOnlyValue({ borderRadius, sizeC }) ?? '0',
            padding: spacingToEdge ?? '0',
            inset: true,
          })}
          textColor={getOpositMainThemeType(themeType)}
          wide={wide}
          sizeC={sizeC}
          {...tabSwitchProps}
        />
      </FancyBox>
    </Fieldset>
  );
}
