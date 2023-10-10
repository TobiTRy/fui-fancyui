import React, { useState, useEffect, useRef } from 'react';
import SingleInputs from '../../Molecules/SingleInputs/SingleInputs';
import { Container, WarpperComponent, Message, MessageContainer } from './FancySingleInputs.style';
import { Typography } from '../../Atoms/Typography';

// --------------------------------------------------------------------------- //
// -The main FancySinlgeInput Componet wich handle the apicall and the sattus- //
// --------------------------------------------------------------------------- //
interface IFancySingleInputs {
  length?: number;
  keyCode?: string;
  handler?: (value: string) => void;
}
export default function FancySingleInputs(props: IFancySingleInputs) {
  const { length, keyCode, handler } = { ...defaultProps, ...props };
  const [status, setStatus] = useState({ isError: false, isSucceed: false });
  const [inputValue, setInputValue] = useState('');
  const debounceTimeoutRef = useRef<NodeJS.Timeout>();

  // this function validates the input key with the api
  const validateValue = () => {
    if (keyCode === inputValue) {
      setStatus({
        isError: false,
        isSucceed: true,
      });
    } else {
      setStatus({
        isError: true,
        isSucceed: false,
      });
    }
  };

  // hanldes the input value change and validate it with the api
  useEffect(() => {
    setStatus({ isError: false, isSucceed: false });
    if (inputValue.length === length) {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
        
      }
      debounceTimeoutRef.current = setTimeout(validateValue, 700);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, keyCode]);

  const valueHandler = (value: string) => {
    setInputValue(value);
  };

  return (
    <WarpperComponent>
      <Container $status={status}>
        <SingleInputs length={length} handler={valueHandler} status={status} />
        <MessageContainer>
          <Message $status={status.isSucceed}>
            <Typography type="content">Value is valid!</Typography>
          </Message>
          <Message $status={status.isError}>
            <Typography type="content">An error occurred, please try again.</Typography>
          </Message>
        </MessageContainer>
      </Container>
    </WarpperComponent>
  );
}

const defaultProps: IFancySingleInputs = {
  length: 6,
  keyCode: '123456',
};
