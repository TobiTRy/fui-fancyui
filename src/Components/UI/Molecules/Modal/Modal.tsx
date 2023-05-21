import React, { ReactNode, useEffect } from 'react';

import SimpleDialog from '../../Atoms/SimpleDialog/SimpleDialog';
import BackDrop from '../../Atoms/BackDrop/BackDrop';
import FancyPortal from '../../Atoms/functions/FancyPortal';

import { useModalStore } from './useModal.state';


// --------------------------------------------------------------------------- //
// ------  The main Modal Component to comstomize the Head/Bottomline  ------- //
// --------------------------------------------------------------------------- //
interface IModal {
  children?: ReactNode;
  currentlyOpen?: boolean;
};
export default function Modal({ children, currentlyOpen }: IModal) {
  const closeModal = useModalStore((state) => state.closeModal);
  const openModal = useModalStore((state) => state.openModal);
  const isOpen = useModalStore((state) => state.isOpen);

  useEffect(() => {
    if (currentlyOpen) 
     setTimeout(() => openModal(), 200) ;
  }, [currentlyOpen, openModal]);


  return (
    <div>
      <SimpleDialog isOpen={isOpen}>
        {children}
      </SimpleDialog>
      <BackDrop isOpen={isOpen} onClick={closeModal} />
    </div>
  );
}
