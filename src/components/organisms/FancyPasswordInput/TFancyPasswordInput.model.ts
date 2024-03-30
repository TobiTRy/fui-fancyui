import { TPasswordInputPropsWithNativeAttrs } from '@/components/atoms/PasswordInput';
import { TInputWrapperUserInputProps } from '@/components/molecules/InputWrapper';

export type TFancyPasswordInput = Exclude<TPasswordInputPropsWithNativeAttrs, 'themeType'> &
  Exclude<TInputWrapperUserInputProps, 'InputElement'>;
