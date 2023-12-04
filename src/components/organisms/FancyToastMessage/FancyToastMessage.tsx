import React, { useMemo } from 'react';
import { useTransition, animated } from '@react-spring/web';

import { useFancyToastMessageStore } from './FancyToastMessage.state';
import SingleToastMessage from '@/components/molecules/SingleToastMessage/SingleToastMessage';
import IToastMessage from '@/components/molecules/SingleToastMessage/IToastMessage.model';

import { ToastsWrapper } from './FancyToastMessage.style';
//this comonent should be used as overlay in the application to make sure the toast messages are always displaey on top

// to use this component in the application you have to add this component to the dom (Main Component) of the application
// to add the toast messages you have to import the useToastMessageStore and addToast function  const addToast = useToastMessageStore((state) => state.addToast);
// addToast({
//   title: 'My Title of the titel ',
//   message: 'This is my toast message hjsadhjgdshjag.',
//   time: 50500,
//   type: 'error',
// });

// --------------------------------------------------------------------------- //
// ------- The Main Toast Message Module to displayed multible messages ------ //
// --------------------------------------------------------------------------- //
export default function FancyToastMessage() {
  const toastQueue = useFancyToastMessageStore((state) => state.toastQueue);
  const removeToast = useFancyToastMessageStore((state) => state.removeToast);

  // create a refMap to store the height of each toast message
  const refMap = useMemo(() => new WeakMap(), []);

  // create the transitions for the toast messages
  const transitions = useTransition(toastQueue, {
    from: { opacity: 0, height: '0px', transform: 'translateX(200%)', marginBottom: '0px' },
    keys: (item: IToastMessage) => item.id,
    enter: (item: IToastMessage) => async (next) => {
      const getItem = refMap.get(item) as HTMLDivElement;
      await next({
        opacity: 1,
        transform: 'translateX(0%)',
        marginBottom: '16px',
        height: getItem.offsetHeight + 'px',
        //config: { duration: refMap.get(item).time },
      });
    },
    leave: [
      { transform: 'translateX(60%)', opacity: 0, config: { duration: 220, tension: 250, friction: 125, precision: 0.1 } },
      { height: '0px', marginBottom: '0px', config: { duration: 265, tension: 250, friction: 125, precision: 0.8 } },
    ],
    onDestroyed: (item: IToastMessage) => removeToast(item.id),
  });

  return (
    <ToastsWrapper>
      {transitions(({ ...style }, item: IToastMessage) => (
        <animated.div key={item.id} style={style}>
          <SingleToastMessage ref={(ref: HTMLDivElement) => ref && refMap.set(item, ref)} toast={item} remove={removeToast} />
        </animated.div>
      ))}
    </ToastsWrapper>
  );
}
