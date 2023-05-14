import React from 'react';
import { useToastMessageStore } from './ToastMessage.state';
import SingleToastMessage from '../../Molecules/SingleToastMessage/SingleToastMessage';
import { ToastsWrapper } from './ToastMessage.style';
import { useTransition, animated } from 'react-spring';
import IToastMessage from '../../Molecules/SingleToastMessage/IToastMessage.model';

export default function ToastMessage() {
  const toastQueue = useToastMessageStore((state) => state.toastQueue);
  const removeToast = useToastMessageStore((state) => state.removeToast);
  
  // react-spring transition to animate toast messages remove and add
  const transitions = useTransition(toastQueue, {
    from: { opacity: 0, transform: 'translateX(100%)', maxHeight: 0 },
    enter: { opacity: 1, transform: 'translateX(0)', maxHeight: 80},
    leave: (item) => async (next) => {
      await next({ maxHeight: 0, opacity: 0,  });
      removeToast(item.id);
    },
    config: { tension: 300, friction: 26, },
    keys: (item: IToastMessage) => item.id,
    trail: 50,
  });


  return (
    <ToastsWrapper>
      {transitions((style, item) => (
        <animated.div key={item.id} style={style}>
          <SingleToastMessage toast={item} remove={removeToast} />
        </animated.div>
      ))}
    </ToastsWrapper>
  );
}