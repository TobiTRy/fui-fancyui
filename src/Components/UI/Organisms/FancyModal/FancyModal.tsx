import React from 'react';

import { useFancyModalStore } from './FancyModal.state';
import Modal from '../../../Molecules/Modal/Modal';
import FancyPortal from '../../../utils/FancyPortal/FancyPortal';

// ---------- How to use the Module ------- //
//--- use it
// Append this module to the root of the app you dont need to pass any props
// just use the useModalModuleStore to open a modal
//--- open modal
// useModalModuleStore.openModal( 'ID', <JSXComponent/> , '{CONFIG OBJECT})
//--- close modal
// when you want to close the modal with a custom button just use the closeModal function with the "ID" of the modal
// useModalModuleStore.closeModal('id')

// --------------------------------------------------------------------------- //
// ----------------- The modalModule to build up a Moadal  ------------------- //
// --------------------------------------------------------------------------- //
interface IFancyModal {
  appendToDomID: string;
}
export default function FancyModal({ appendToDomID }: IFancyModal) {
  const modals = useFancyModalStore((state) => state.modals);
  const closeModal = useFancyModalStore((state) => state.closeModal);
  const removeModal = useFancyModalStore((state) => state.removeModal);

  const closeModalHandler = (id: string) => {
    // closing the modal is a two step process
    // first we set the status to "closing" with the closeModal function
    // this will trigger the animation in the modal component
    closeModal(id);

    //wait for the animation and remove the modal from the store
    setTimeout(() => {
      removeModal(id);
    }, 300);
  };

  return (
    <>
      {/* ----- The FancModal Ports the Modal out of the root div in the spearte "modal" div ----- */}
      <FancyPortal appendToID={appendToDomID}>
        {modals.map((modal, key) => (
          <Modal key={key} isOpen={modal.status === 'open'} onClose={() => closeModalHandler(modal.id)} {...modal.config}>
            {/* ----- The Content of the Modal ----- */}
            {modal.children}
          </Modal>
        ))}
      </FancyPortal>
    </>
  );
}
