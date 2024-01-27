import { DateOutput } from '@/components/atoms/DateOutput';
import { FancyLine } from '@/components/atoms/FancyLine';

import { TLayer } from '@/types/TLayer';

import { StyledDateOutputFromTo, VRWrapper } from './DateOutputFromTo.style';
import { themeStore } from '@/design/theme/themeStore';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

// Define the props for the DateOutputFromTo component
interface IDateOutputFromTo {
  dateFrom?: Date;
  dateTo?: Date;
  handler?: (wich: 'from' | 'to') => void;
  whichIsSelecting?: 'from' | 'to';
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
}
// --------------------------------------------------------------------------- //
// ---------- The dateOutput hanles the date display from and to ------------ //
// --------------------------------------------------------------------------- //
export default function DateOutputFromTo(props: IDateOutputFromTo) {
  const { dateFrom, dateTo, handler, whichIsSelecting, themeType, layer } = props;

  // swap the themeType for opposite components
  const swapTheme = themeType === 'primary' ? 'secondary' : 'primary';

  // Define the click handler that handles the click on the DateOutput
  const handleClickOnDateOutput = (which: 'from' | 'to') => {
    handler && handler(which);
  };

  return (
    <StyledDateOutputFromTo>
      <DateOutput
        themeType={themeType}
        layer={layer}
        date={dateFrom}
        isActive={whichIsSelecting === 'from' || whichIsSelecting === undefined}
        onClick={() => handleClickOnDateOutput('from')}
      />
      <VRWrapper>
        <FancyLine direction="vertical" themeType={swapTheme} thickness="2px" margin={'sm'} />
      </VRWrapper>
      <DateOutput
        themeType={themeType}
        layer={layer}
        date={dateTo ?? dateFrom}
        isActive={whichIsSelecting === 'to'}
        onClick={() => handleClickOnDateOutput('to')}
      />
    </StyledDateOutputFromTo>
  );
}
