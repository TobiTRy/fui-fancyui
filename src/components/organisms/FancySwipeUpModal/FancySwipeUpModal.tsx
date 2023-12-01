import React from 'react';

import SwipeUpModal from '../../molecules/SwipeUpModal/SwipeUpModal';
import FancyPortal from '../../../utils/components/FancyPortal/FancyPortal';

import { useFancySwipeUpModalStore } from './FancySwipeUpModal.state';

// --------------------------------------------------------------------------- //
// ----------- The main FancySwipeUpModal to handle all everything ----------- //
// --------------------------------------------------------------------------- //
interface IFancySwipeUpModal {
  appendToDomID?: string;
}
export default function FancySwipeUpModal({ appendToDomID }: IFancySwipeUpModal) {
  // get the global states and actions from the store to handle the modal
  const modals = useFancySwipeUpModalStore((state) => state.modals);
  const removeSwipeUpModal = useFancySwipeUpModalStore((state) => state.removeSwipeUpModal);
  const closeSwipeUpModal = useFancySwipeUpModalStore((state) => state.closeSwipeUpModal);

  const closeModalHandler = (id: string) => {
    // closing the modal is a two step process
    // first we set the status to "closing" with the closeModal function
    // this will trigger the animation in the modal component
    closeSwipeUpModal(id);

    //wait for the animation and remove the modal from the store
    setTimeout(() => {
      removeSwipeUpModal(id);
    }, 250);
  };

  return (
    <FancyPortal appendToID={appendToDomID}>
      {/* The Mobile Modal Component  */}
      {modals.map((modal, key) => (
        <SwipeUpModal key={key} {...modal.config} onClose={() => closeModalHandler(modal.id)} isOpen={modal.status === 'open'}>
          {/* render the content of the modal  */}
          {modal.children}
        </SwipeUpModal>
      ))}
    </FancyPortal>
  );
}
