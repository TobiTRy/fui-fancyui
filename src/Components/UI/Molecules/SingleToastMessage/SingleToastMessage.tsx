import React, { forwardRef, useEffect } from 'react';
import IToastMessage from './IToastMessage.model';
import { Container, Message, TimerLine, Title, Headline } from './SingleToastMessage.style';

import FancyXButton from '../../Atoms/FancyXButton';


interface ISingleToastMessage {
  toast: IToastMessage;
  remove: (id: number) => void;
}
const SingleToastMessage = forwardRef<HTMLDivElement, ISingleToastMessage>((props, ref) => {
  // destructuring all incomming props
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
    <Container ref={ref} $messageType={type}>
      <Headline>
        <Title>{title}</Title>
        <FancyXButton onClick={() => remove(id)} design={type}/>
      </Headline>
      <Message>{message}</Message>
      <TimerLine $time={time!} $messageType={type} />
    </Container>
  );
});

export default SingleToastMessage;
