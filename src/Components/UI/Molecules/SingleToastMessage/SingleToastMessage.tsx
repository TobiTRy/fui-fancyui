import React, { forwardRef, useEffect } from 'react';
import IToastMessage from './IToastMessage.model';
import { CloseButton, Container, Message, TimerLine, Title } from './SingleToastMessage.style';


interface ISingleToastMessage {
  toast: IToastMessage;
  remove: (id: number) => void;
}
const SingleToastMessage = forwardRef<HTMLDivElement, ISingleToastMessage>((props, ref) => {
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
    <Container ref={ref} messageType={type}>
      <CloseButton onClick={() => remove(id)} messageType={type}>x</CloseButton>
      <Title>{title}</Title>
      <Message>{message}</Message>
      <TimerLine time={time} messageType={type} />
    </Container>
  );
});

export default SingleToastMessage;
