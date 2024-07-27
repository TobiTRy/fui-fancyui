'use client';

import { NumberInput } from '@/components/atoms/NumberInput';
import { StyledInput } from './YearInput.style';
import { TYearInputWithNativeAttrs } from '@/components/atoms/YearInput/YearInput.model';

export default function YearInput(props: TYearInputWithNativeAttrs) {
  const { year, sizeC = 'md', align, themeType, layer, ...htmlProps } = props;

  const focusHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    const input = e.target;
    const len = input.value.length;
    input.setSelectionRange(len, len);
  };

  return (
    <StyledInput $sizeC={sizeC} $themeType={themeType} $layer={layer}>
      <NumberInput autoWidth={true} maxLength={4} align={align} value={year} onFocus={focusHandler} {...htmlProps} />
    </StyledInput>
  );
}
