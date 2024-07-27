'use client';

import { RawInput } from '@/components/atoms/RawInput';
import { TTextInput, TTextInputNativeAttrs } from '@/components/atoms/TextInput/TTextInput.model';
import { forwardRef } from 'react';

// a simple text input with no styling
const TextInput = forwardRef<HTMLInputElement, TTextInput & TTextInputNativeAttrs>((props, ref) => {
  const { align, ...htmlInputProps } = props;

  return <RawInput ref={ref} type="text" $align={align} {...htmlInputProps} />;
});

export default TextInput;
