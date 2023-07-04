import React, { useState, useEffect, useRef } from 'react';
import SingleInputs from '../../Molecules/SingleInputs/FancySingleInputs';
import { Container, WarpperComponent, Message, MessageContainer } from './FancySingleInputs.style';

// --------------------------------------------------------------------------- //
// -The main FancySinlgeInput Componet wich handle the apicall and the sattus- //
// --------------------------------------------------------------------------- //
interface IFancySingleInputs {
  length?: number;
  api?: string;
  handler?: (value: string) => void;
}
export default function FancySingleInputs({ length, api, handler }: IFancySingleInputs) {
  const [status, setStatus] = useState({ isError: false, isSucceed: false, isLoading: false });
  const [inputValue, setInputValue] = useState('');
  const debounceTimeoutRef = useRef<NodeJS.Timeout>();

  // this function validates the input key with the api
  const validateValue = () => {
    setStatus({ ...status, isLoading: true });

    fetch(`${api}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ value: inputValue }),
    })
      .then((response) => response.json())
      .then((data) => {
        setStatus({
          isLoading: false,
          isSucceed: data.valid,
          isError: !data.valid,
        });
        handler && handler(data.value);
      })
      .catch((error) => {
        setStatus({
          isLoading: false,
          isError: true,
          isSucceed: false,
        });
        console.error('Error:', error);
      });
  };

  // hanldes the input value change and validate it with the api
  useEffect(() => {
    setStatus({ isError: false, isSucceed: false, isLoading: false });
    if (inputValue.length === length) {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
      debounceTimeoutRef.current = setTimeout(validateValue, 700);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  const valueHandler = (value: string) => {
    setInputValue(value);
  };

  return (
    <WarpperComponent>
      <Container status={status}>
        <SingleInputs length={length} handler={valueHandler} status={status} />
        <MessageContainer>
          <Message status={status.isSucceed}>Value is valid!</Message>
          <Message status={status.isError}>An error occurred, please try again.</Message>
        </MessageContainer>
      </Container>
    </WarpperComponent>
  );
}

FancySingleInputs.defaultProps = {
  length: 6,
  api: '/validate',
};
