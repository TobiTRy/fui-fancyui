import React from 'react';

import FancyModal from '../../Components/UI/Organisms/FancyModal/FancyModal';
import { useFancyModalStore } from '../../Components/UI/Organisms/FancyModal/FancyModal.state';
import FancyButton from '../../Components/UI/Molecules/FancyButton/FancyButton';


export default function ModalRoute() {
  const createModal = useFancyModalStore((state) => state.openModal);
  const closeModal = useFancyModalStore((state) => state.closeModal);

  const handleModalCreation = () => {
    createModal(
      {
        headline: { title: 'test', subTitle: 'test' },
        content: <div>hi</div>,
        bottomLine: {
          buttons: [
            {
              title: 'submit me',
              onClick: () => {
                closeModal('test111');
              },
              secondaryButton: false,
            },
          ],
        },
      },
      'test111'
    );
  };
  return (
    <section>
      <FancyModal appendToDomID='modal' />
      <FancyButton onClick={handleModalCreation} label='open modal'></FancyButton>
    </section>
  );
}
