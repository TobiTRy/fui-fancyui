import React, { forwardRef, useEffect } from 'react';

import IToastMessage from './IToastMessage.model';
import { Container, TimerLine, Headline } from './SingleToastMessage.style';
import Typography from '../../Atoms/Typography/Typography';
import FancyXButton from '../../Atoms/FancyXButton/FancyXButton';


interface ISingleToastMessage {
  toast: IToastMessage;
  remove: (id: number) => void;
}
const SingleToastMessage = forwardRef<HTMLDivElement, ISingleToastMessage>((props, ref) => {
  const { id, title, message, time, themeType, layer } = props.toast;
  const remove = props.remove;

  // remove toast after time
  useEffect(() => {
    const timer = setTimeout(() => {
      remove(id);
    }, time);

    return () => clearTimeout(timer);
  }, [id, time, remove]);

  return (
    <Container ref={ref} $messageType={themeType}>
      <Headline>
        <Typography type='content' variant='h5'>{title}</Typography>
        <FancyXButton onClick={() => remove(id)} themeType={themeType} layer={layer || 5}/>
      </Headline>
      <Typography type='content'>{message}</Typography>
      <TimerLine $time={time!} $messageType={themeType} />
    </Container>
  );
});

export default SingleToastMessage;
