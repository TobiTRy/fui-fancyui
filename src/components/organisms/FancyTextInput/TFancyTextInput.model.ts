import { TTextInputWithNativeAttrs } from '@/components/atoms/TextInput/TTextInput.model';
import { TInputWrapperUserInputProps } from '@/components/molecules/InputWrapper/TInputWrapper.model';

export type TFancyTextInput = TTextInputWithNativeAttrs & Omit<TInputWrapperUserInputProps, 'InputElement'>;
