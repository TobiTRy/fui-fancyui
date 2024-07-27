'use client';

import { DateOutput } from '@/components/atoms/DateOutput';
import { FancyLine } from '@/components/atoms/FancyLine';

import { TDateOutputFromToWithNativeAttrs } from '@/components/molecules/DateOutputFromTo/TDateOutoutFromTo.model';
import { StyledDateOutputFromTo, VRWrapper } from './DateOutputFromTo.style';
import { clampLayer } from '@/utils/functions/clampLayer';

// --------------------------------------------------------------------------- //
// ---------- The dateOutput hanles the date display from and to ------------ //
// --------------------------------------------------------------------------- //
export default function DateOutputFromTo(props: TDateOutputFromToWithNativeAttrs) {
  const {
    dateFrom,
    dateTo,
    handleFromTo,
    whichIsSelecting,
    themeType = 'primary',
    layer = 3,
    textCustom,
    sizeC,
    ...htmlProps
  } = props;
  // swap the themeType for opposite components

  // Define the click handler that handles the click on the DateOutput
  const handleClickOnDateOutput = (which: 'from' | 'to') => {
    handleFromTo?.(which);
  };

  return (
    <StyledDateOutputFromTo {...htmlProps}>
      <DateOutput
        sizeC={sizeC}
        themeType={themeType}
        layer={layer}
        textCustom={{
          selected: textCustom?.from?.selected ?? 'From:',
          notSelected: textCustom?.from?.notSelected,
        }}
        date={dateFrom}
        isActive={whichIsSelecting === 'from' || whichIsSelecting === undefined}
        onClick={() => handleClickOnDateOutput('from')}
      />
      <VRWrapper>
        <FancyLine
          direction="vertical"
          themeType={themeType}
          layer={clampLayer(layer - 2)}
          thickness="2px"
          margin={'xs'}
        />
      </VRWrapper>
      <DateOutput
        sizeC={sizeC}
        themeType={themeType}
        textCustom={{
          selected: textCustom?.to?.selected ?? 'To:',
          notSelected: textCustom?.to?.notSelected,
        }}
        layer={layer}
        date={dateTo}
        isActive={whichIsSelecting === 'to'}
        onClick={() => handleClickOnDateOutput('to')}
      />
    </StyledDateOutputFromTo>
  );
}
