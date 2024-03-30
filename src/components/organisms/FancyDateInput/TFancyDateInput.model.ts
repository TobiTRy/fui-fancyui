import { TDateInputPropsWithNativeAttrs } from '@/components/atoms/DateInput/TDateInput.model';
import { TInputWrapperUserInputProps } from '@/components/molecules/InputWrapper';

export type TFancyDateInput = Omit<TInputWrapperUserInputProps, 'InputElement'> & TDateInputPropsWithNativeAttrs;
