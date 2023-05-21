import React, { ReactNode, useEffect } from 'react';

import SimpleDialog from '../../Atoms/SimpleDialog/SimpleDialog';
import BackDrop from '../../Atoms/BackDrop/BackDrop';
import FancyPortal from '../../Atoms/functions/FancyPortal';
import { ModalStatus } from './ModalStatus';

import { useModalStore } from './useModal.state';


// --------------------------------------------------------------------------- //
// ------  The main Modal Component to comstomize the Head/Bottomline  ------- //
// --------------------------------------------------------------------------- //
interface IModal {
  id?: string;
  children?: ReactNode;
  status: ModalStatus;
  closeModal?: (id: string) => void;
};

function Modal({ children, closeModal, id, status }: IModal) {
  const closeModalState = useModalStore((state) => state.closeModal);
  const openModal = useModalStore((state) => state.openModal);
  const isOpen = useModalStore((state) => state.isOpen);

  const closeModalHanlder = () => {
    closeModalState()

    //if a components needs controle from outside
    if (closeModal && id) closeModal(id)   
  }

  useEffect(() => {
    switch (status) {
      case ModalStatus.Open:
        openModal();
        break;
      case ModalStatus.Closing:
        closeModalState();
        break;
    }
  }, [status])

  return (
    <>
      <SimpleDialog isOpen={isOpen}>
        {children}
      </SimpleDialog>
      <BackDrop isOpen={isOpen} onClick={closeModalHanlder} />
    </>
  );
}

export default React.memo(Modal);