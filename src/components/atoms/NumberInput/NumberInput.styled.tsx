import { styled } from 'styled-components';

import { RawInput } from '@/components/atoms/RawInput';
import IStyledPrefixAndPicker from '@/types/IStyledPrefixAndPicker';
import { INumberInput } from './NumberInput';

type IStyledNumberInput = IStyledPrefixAndPicker<INumberInput, 'align'>;
const StyledNumberInput = styled(RawInput)<IStyledNumberInput & { $width: string }>`
  border-radius: 0;
  width: ${({ $width }) => ($width ? $width : '2ch')};
  background-color: transparent;
  border: none;
  outline: none;
  //the focus animation for the underline

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  // hide the arrows on the input for firefox
  -moz-appearance: textfield;
`;

export default StyledNumberInput;
