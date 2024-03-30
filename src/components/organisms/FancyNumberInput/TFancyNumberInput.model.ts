import { TNumberInputWithNativeAttrs } from '@/components/atoms/NumberInput';
import { TInputWrapperUserInputProps } from '@/components/molecules/InputWrapper';

export type TFancyNumberInput = TNumberInputWithNativeAttrs & TInputWrapperUserInputProps & { autoWidth?: boolean };
