import React from 'react';

import ModalModule from '../../Components/UI/Organisms/ModalModule/ModalModule';
import { useModalModuleStore } from '../../Components/UI/Organisms/ModalModule/ModalModule.state';
import FancyButton from '../../Components/UI/Molecules/FancyButton/FancyButton';

const Test = () => <div>Hi</div>

export default function ModalRoute() {
  const createModal = useModalModuleStore((state) => state.openModal);
  const closeModal = useModalModuleStore((state) => state.closeModal);

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
      <ModalModule />
      <FancyButton onClick={handleModalCreation} label='open modal'></FancyButton>
    </section>
  );
}
