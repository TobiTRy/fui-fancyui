'use client';

import { forwardRef, useEffect } from 'react';

import { FancyXButton } from '@/components/atoms/FancyXButton';
import { Typography } from '@/components/atoms/Typography';
import { Container, Headline, TimerLine } from './SingleToastMessage.style';
import { TSingleToastMessageWithHTMLAttrs } from './TToastMessage.model';

// A Single Toast Message Component wich
const SingleToastMessage = forwardRef<HTMLDivElement, TSingleToastMessageWithHTMLAttrs>((props, ref) => {
  const { id, title, message, time, themeType, layer, ...htmlProps } = props.toast;
  const remove = props.remove;

  // Remove toast after the time
  useEffect(() => {
    const timer = setTimeout(() => {
      remove?.(id);
    }, time);

    return () => clearTimeout(timer);
  }, [id, time, remove]);

  return (
    <Container ref={ref} $messageType={themeType} {...htmlProps}>
      <Headline>
        <Typography variant="interactiveMd" fontWeight={'bold'}>
          {title}
        </Typography>
        <FancyXButton onClick={() => remove?.(id)} themeType={themeType} layer={layer || 5} />
      </Headline>
      <Typography variant="bodytextSm">{message}</Typography>
      <TimerLine $time={time!} $messageType={themeType} />
    </Container>
  );
});

// Export the component
export default SingleToastMessage;
