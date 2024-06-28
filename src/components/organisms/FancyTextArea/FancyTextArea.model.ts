import { TRawTextAreaWithHTMLAttrs } from '@/components/atoms/RawTextArea/RawTextArea';
import { TInputWrapperUserInputProps } from '@/components/molecules/InputWrapper';

export type TFancyTextArea = Omit<TInputWrapperUserInputProps, 'InputElement' | ''> & TRawTextAreaWithHTMLAttrs;
