import { RawInput } from '@/components/atoms/RawInput';
import { TTextInput, TTextInputNativeAttrs } from '@/components/atoms/TextInput/TTextInput.model';

// a simple text input with no styling
export default function TextInput(props: TTextInput & TTextInputNativeAttrs) {
  const { align, ...htmlInputProps } = props;

  return <RawInput type="text" $align={align} {...htmlInputProps} />;
}
