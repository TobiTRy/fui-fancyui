import { TTextInputWithNativeAttrs } from '@/components/atoms/TextInput/TTextInput.model';
import { TInputWrapperUserInputProps } from '@/components/molecules/InputWrapper/TInputWrapper.model';

export type IFancyTextInput = TTextInputWithNativeAttrs & Omit<TInputWrapperUserInputProps, 'InputElement'>;
