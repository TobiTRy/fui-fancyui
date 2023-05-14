import React, { useEffect } from 'react';
import { CloseButton, Container, Message, TimerLine, Title } from './SingleToastMessage.style';
import IToastMessage from './IToastMessage.model';

interface ISingleToastMessage {
  toast: IToastMessage;
  remove: (id: number) => void;
}
export default function SingleToastMessage(props: ISingleToastMessage) {
  // destructuring all incomming  props
  const { id, title, message, time, type } = props.toast;
  const remove = props.remove;


  // remove toast after time
  useEffect(() => {
    const timer = setTimeout(() => {
      remove(id);
    }, time);

    return () => clearTimeout(timer);
  }, [id, time, remove]);



  return (
    <>
      <Container messageType={type}>
        <CloseButton onClick={() => remove(id)} messageType={type}>x</CloseButton>
        <Title>{title}</Title>
        <Message>{message}</Message>
        <TimerLine time={time} messageType={type} />
      </Container>
    </>
  );
}
