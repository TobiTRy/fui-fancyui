import React from 'react';
import { useToastMessageStore } from './ToastMessage.state';
import SingleToastMessage from '../../Molecules/SingleToastMessage/SingleToastMessage';
import { ToastsWrapper } from './ToastMessage.style';
import { useTransition, animated } from 'react-spring';
import IToastMessage from '../../Molecules/SingleToastMessage/IToastMessage.model';

export default function ToastMessage() {
  const toastQueue = useToastMessageStore((state) => state.toastQueue);
  const removeToast = useToastMessageStore((state) => state.removeToast);

  const containerRef = React.useRef<HTMLDivElement>(null);

  const transitions = useTransition(toastQueue, {
    from: { opacity: 0, maxHeight: '0px', transform: 'translateX(200%)', marginBottom: '16px' },
    enter: { opacity: 1, maxHeight: '80px', transform: 'translateX(0%)', marginBottom: '16px' },
    leave: [
      { opacity: 0, transform: 'translateX(60%)', config: { duration: 300 } },
      { maxHeight: '0px', marginBottom: '0px', config: { delay: 300 } },
    ],
    onDestroyed: (item: IToastMessage) => removeToast(item.id),
    keys: (item: IToastMessage) => item.id,
    trail: 50,
  });

  console.log('containerRef', containerRef?.current?.offsetHeight);
  
  return (
    <ToastsWrapper>
      {transitions((style, item: IToastMessage) => (
        <animated.div key={item.id} style={style}>
          <SingleToastMessage ref={containerRef} toast={item} remove={removeToast} />
        </animated.div>
      ))}
    </ToastsWrapper>
  );
}
