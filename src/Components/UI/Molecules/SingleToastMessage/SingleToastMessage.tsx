import React, { forwardRef, useEffect } from 'react';

// Import necessary components and interfaces
import IToastMessage from './IToastMessage.model';
import { Container, TimerLine, Headline } from './SingleToastMessage.style';
import Typography from '../../../Atoms/Typography/Typography';
import FancyXButton from '../../../Atoms/FancyXButton/FancyXButton';

// Define the interface for the component
interface ISingleToastMessage {
  toast: IToastMessage;
  remove: (id: number) => void;
}

// A Single Toast Message Component wich
const SingleToastMessage = forwardRef<HTMLDivElement, ISingleToastMessage>((props, ref) => {
  const { id, title, message, time, themeType, layer } = props.toast;
  const remove = props.remove;

  // Remove toast after the time
  useEffect(() => {
    const timer = setTimeout(() => {
      remove(id);
    }, time);

    return () => clearTimeout(timer);
  }, [id, time, remove]);

  return (
    <Container ref={ref} $messageType={themeType}>
      <Headline>
        <Typography type="content" variant="h5">
          {title}
        </Typography>
        <FancyXButton onClick={() => remove(id)} themeType={themeType} layer={layer || 5} />
      </Headline>
      <Typography type="content">{message}</Typography>
      <TimerLine $time={time!} $messageType={themeType} />
    </Container>
  );
});

// Export the component
export default SingleToastMessage;
