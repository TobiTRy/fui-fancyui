import React from 'react';

import { useFancySwipeUpModalStore } from './FancySwipeUpModal.state';

import SwipeUpModal from '../../Molecules/SwipeUpModal/SwipeUpModal';
import FancyPortal from '../../HelperFunctions/FancyPortal';

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
        <SwipeUpModal
          key={key}
          id={modal.id}
          status={modal.status}
          layer={modal.settings?.layer}
          themeType={modal.settings?.themeType}
          isScalable={modal.settings?.isScalable}
          isCloseAble={modal.settings?.isCloseAble}
          closeHandler={() => closeModalHandler(modal.id)}
        >
          {/* render the content of the modal  */}
          {modal.children}
        </SwipeUpModal>
      ))}
    </FancyPortal>
  );
}
