import React from 'react';

import { useFancySwipeUpModalStore } from './FancySwipeUpModal.state';

import SwipeUpModal from '../../Molecules/SwipeUpModal/SwipeUpModal';
import FancyPortal from '../../Atoms/functions/FancyPortal';
import ModalHeadLine from '../../Molecules/FancyModalHeadLine/FancyModalHeadLine';

// --------------------------------------------------------------------------- //
// ----------- The main FancySwipeUpModal to handle all everything ----------- //
// --------------------------------------------------------------------------- //
interface IFancySwipeUpModal {
  children?: React.ReactNode;
  headline?: { title: string, subTitle: string },
};
export default function FancySwipeUpModal({ children, headline }: IFancySwipeUpModal) {
  // get the global states and actions from the store to handle the modal
  const isOpen = useFancySwipeUpModalStore((state) => state.isOpen);
  const closeModal = useFancySwipeUpModalStore((state) => state.close);

  return (
    <FancyPortal appendToID="modal">
      {/* The Mobile Modal Component  */}
      <SwipeUpModal isOpen={isOpen} closeHandler={closeModal}>
        {/* if there is a headline, render it */}
        { headline && <ModalHeadLine {...headline} /> }
        {/* render the children of the modal  */}
        {children}
      </SwipeUpModal>
    </FancyPortal>
  );
}
