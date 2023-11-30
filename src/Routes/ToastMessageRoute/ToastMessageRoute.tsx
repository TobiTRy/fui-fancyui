import React from 'react';
import FancyToastMessage from '../../Components/organisms/FancyToastMessage/FancyToastMessage';
import FancyButton from '../../Components/organisms/FancyButton/FancyButton';

import { useFancyToastMessageStore } from '../../Components/organisms/FancyToastMessage/FancyToastMessage.state';

const messageType = ['success', 'warning', 'error'];

const handler = () => {
  const randomType = Math.floor(Math.random() * messageType.length);

  useFancyToastMessageStore.getState().addToast({
    title: 'My Title of the titel ',
    message: 'This is my toast message hjsadhjgdshjag.',
    time: 50050,
    themeType: messageType[randomType] as 'success' | 'warning' | 'error',
  });
};

export default function ToastMessageRoute() {
  return (
    <section>
      <FancyToastMessage />
      <FancyButton onClick={handler} label="Add Message" />
    </section>
  );
}
