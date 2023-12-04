import React, { useState, useEffect, useRef } from 'react';

import SingleInputs from '@/components/molecules/SingleInputs/SingleInputs';
import { Typography } from '@/components/atoms/Typography';

import { Container, WarpperComponent, Message, MessageContainer } from './FancyCodeVerificationInput.style';

interface IFancySingleInputs {
  length?: number;
  errorMessage?: string;
  isSuccess?: boolean;
  handler?: (value: string) => void;
  automaticCase?: 'upper' | 'lower';
  debounceTime?: number;
}
// --------------------------------------------------------------------------- //
// -The main FancySinlgeInput Componet wich handle the apicall and the sattus- //
// --------------------------------------------------------------------------- //
export default function FancyCodeVerificationInput(props: IFancySingleInputs) {
  const { length, errorMessage, isSuccess, handler, automaticCase, debounceTime } = { ...defaultProps, ...props };
  const [inputValue, setInputValue] = useState('');
  const debounceTimeoutRef = useRef<NodeJS.Timeout>();

  // hanldes the input value change and validate it with the api
  useEffect(() => {
    if (inputValue.length === length) {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
      debounceTimeoutRef.current = setTimeout(() => handler && handler(inputValue), debounceTime || 700);
    }
  }, [inputValue, handler, length, debounceTime]);

  const valueHandler = (value: string) => {
    setInputValue(value);
  };

  return (
    <WarpperComponent>
      <Container>
        <SingleInputs
          length={length}
          handler={valueHandler}
          status={{ isError: Boolean(errorMessage), isSucceed: Boolean(isSuccess) }}
          automaticCase={automaticCase}
        />
        <MessageContainer>
          <Message $isError={Boolean(errorMessage)}>
            <Typography type="content">{errorMessage}</Typography>
          </Message>
        </MessageContainer>
      </Container>
    </WarpperComponent>
  );
}

const defaultProps: IFancySingleInputs = {
  length: 6,
};
