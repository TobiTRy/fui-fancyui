import { TDropDownSelectWithNativeAttrs } from '@/components/atoms/DropDownSelect/TDropDownSelect.model';
import { TInputWrapperUserInputProps } from '@/components/molecules/InputWrapper';

export type TFancyDropDownSelect = Omit<TInputWrapperUserInputProps, 'InputElement'> & TDropDownSelectWithNativeAttrs;
