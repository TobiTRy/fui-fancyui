/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import FancyModal from '../../components/organisms/FancyModal/FancyModal';
import { useFancyModalStore } from '../../components/organisms/FancyModal/FancyModal.state';
import FancyButton from '../../components/organisms/FancyButton/FancyButton';

export default function ModalRoute() {
  const createModal = useFancyModalStore((state) => state.openModal);
  const closeModal = useFancyModalStore((state) => state.closeModal);

  const handleModalCreation = () => {
    createModal('hi', <div>hi</div>, { isCloseable: true });
  };
  return (
    <section>
      <FancyButton onClick={handleModalCreation} size='sm' label="open modal"></FancyButton>
      <FancyButton onClick={handleModalCreation} size='md' label="open modal"></FancyButton>
      <FancyButton onClick={handleModalCreation} size='lg' label="open modal"></FancyButton>
    </section>
  );
}
