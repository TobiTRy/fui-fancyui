'use client';

import { forwardRef, useEffect } from 'react';

import { FancyXButton } from '@/components/atoms/FancyXButton';
import { Typography } from '@/components/atoms/Typography';
import { SystemMessageBox } from '@/components/atoms/SystemMessageBox';

import { TSingleToastMessageWithHTMLAttrs } from './TToastMessage.model';
import { Background, Headline, TimerLine } from './SingleToastMessage.style';

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
    <SystemMessageBox ref={ref} themeType={themeType} {...htmlProps}>
      <Headline>
        <Typography variant="interactiveMd" fontWeight={'bold'}>
          {title}
        </Typography>
        <FancyXButton onClick={() => remove?.(id)} themeType={themeType} />
      </Headline>
      <Typography variant="bodytextSm">{message}</Typography>
      <TimerLine $time={time!} $messageType={themeType} />
      <Background />
    </SystemMessageBox>
  );
});

// Export the component
export default SingleToastMessage;
