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
    textC,
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
        textC={{
          selected: textC?.from?.selected ?? 'From:',
          notSelected: textC?.from?.notSelected,
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
        textC={{
          selected: textC?.to?.selected ?? 'To:',
          notSelected: textC?.to?.notSelected,
        }}
        layer={layer}
        date={dateTo}
        isActive={whichIsSelecting === 'to'}
        onClick={() => handleClickOnDateOutput('to')}
      />
    </StyledDateOutputFromTo>
  );
}
