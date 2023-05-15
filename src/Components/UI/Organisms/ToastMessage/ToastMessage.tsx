import React from 'react';
import { useToastMessageStore } from './ToastMessage.state';
import SingleToastMessage from '../../Molecules/SingleToastMessage/SingleToastMessage';
import { ToastsWrapper } from './ToastMessage.style';
import { useTransition, animated } from 'react-spring';
import IToastMessage from '../../Molecules/SingleToastMessage/IToastMessage.model';

export default function ToastMessage() {
  const toastQueue = useToastMessageStore((state) => state.toastQueue);
  const removeToast = useToastMessageStore((state) => state.removeToast);


  const transitions = useTransition(toastQueue, {
    from: { opacity: 0, maxHeight: '0px', transform: 'translateX(100%)', marginBottom: '16px' },
    enter: { opacity: 1, maxHeight: '80px', transform: 'translateX(0)', marginBottom: '16px' },
    leave: [
      { opacity: 0, transform: 'translateX(100%)', config: { duration: 300 } },
      { maxHeight: '0px', marginBottom: '0px', delay: 300 },
    ],
    onDestroyed: (item: IToastMessage) => removeToast(item.id),
    keys: (item: IToastMessage) => item.id,
    trail: 50,
  });

  return (
    <ToastsWrapper>
      {transitions((style, item: IToastMessage) => (
        <animated.div key={item.id} style={style}>
          <SingleToastMessage toast={item} remove={removeToast} />
        </animated.div>
      ))}
    </ToastsWrapper>
  );
  // In your return statement, use both transitions:
}
