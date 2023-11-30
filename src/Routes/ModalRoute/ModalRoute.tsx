/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import FancyModal from '../../Components/organisms/FancyModal/FancyModal';
import { useFancyModalStore } from '../../Components/organisms/FancyModal/FancyModal.state';
import FancyButton from '../../Components/organisms/FancyButton/FancyButton';

export default function ModalRoute() {
  const createModal = useFancyModalStore((state) => state.openModal);
  const closeModal = useFancyModalStore((state) => state.closeModal);

  const handleModalCreation = () => {
    createModal('hi', <div>hi</div>, { isCloseable: true });
  };
  return (
    <section>
      <FancyButton onClick={handleModalCreation} label="open modal"></FancyButton>
    </section>
  );
}
