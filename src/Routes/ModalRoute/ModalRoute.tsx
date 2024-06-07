/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import FancyModal from '../../components/organisms/FancyModal/FancyModal';
import { useFancyModalStore } from '../../components/organisms/FancyModal/FancyModal.state';
import FancyButton from '../../components/organisms/FancyButton/FancyButton';
import { FancyModalHeadLine } from '@/components/molecules/FancyModalHeadLine';
import { Typography } from '@/components/atoms/Typography';

export default function ModalRoute() {
  const createModal = useFancyModalStore((state) => state.openModal);
  const closeModal = useFancyModalStore((state) => state.closeModal);

  const handleModalCreation = () => {
    createModal(
      'hi',
      <div>
        <FancyModalHeadLine title={'Test'} subTitle={<Typography variant="bodytextSm">Test</Typography>} />
        <FancyButton />
      </div>,
      { isCloseable: true }
    );
  };
  return (
    <section>
      <FancyButton onClick={handleModalCreation} sizeC="sm" label="open modal"></FancyButton>
      <FancyButton onClick={handleModalCreation} sizeC="md" label="open modal"></FancyButton>
      <FancyButton onClick={handleModalCreation} sizeC="lg" label="open modal"></FancyButton>
    </section>
  );
}
