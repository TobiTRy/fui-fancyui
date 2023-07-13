import styled from 'styled-components';
import RawInput from '../../Atoms/RawInput';
import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';
import { spacingPx } from '../../Design/design';
import { AnimatedInputLabel, AnimatedLabelFocusStyle } from '../../Atoms/AnimatedLabel';
import { UnderLineFocusStyle } from '../../Atoms/InputUnderline';
import { INumberInput } from './NumberInput';



type IStyledNumberInput = IStyledPrefixAndPicker<INumberInput, 'align' | 'errorMessage'>;
const StyledNumberInput = styled(RawInput)<IStyledNumberInput & { $width: string }>`
  box-sizing: border-box;
  border-radius: 0;
  width: ${({ $width }) => ($width ? $width : '2ch')};
  background-color: transparent;
  border: none;
  padding: 0 0 ${spacingPx.xs} 0;
  transition: 0.3s;
  transition-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);
  outline: none;

  ${({ $align, $errorMessage }) => AnimatedLabelFocusStyle($align, $errorMessage)}
  //the focus animation for the underline
  ${({ $align }) => UnderLineFocusStyle(AnimatedInputLabel, $align)}
  
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  // hide the arrows on the input for firefox
  -moz-appearance: textfield;
`;

export default StyledNumberInput;
