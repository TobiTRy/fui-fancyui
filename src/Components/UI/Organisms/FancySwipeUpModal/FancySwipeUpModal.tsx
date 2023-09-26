import React from 'react';

import { useFancySwipeUpModalStore } from './FancySwipeUpModal.state';

import SwipeUpModal from '../../Molecules/SwipeUpModal/SwipeUpModal';
import FancyPortal from '../../HelperFunctions/FancyPortal';
import ModalHeadLine from '../../Molecules/FancyModalHeadLine/FancyModalHeadLine';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';

// --------------------------------------------------------------------------- //
// ----------- The main FancySwipeUpModal to handle all everything ----------- //
// --------------------------------------------------------------------------- //
interface IFancySwipeUpModal {
  appendToDomID?: string;
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
}
export default function FancySwipeUpModal({ appendToDomID, themeType, layer }: IFancySwipeUpModal) {
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
          status={modal.status}
          id={modal.id}
          isCloseAble={modal.content.settings?.isCloseAble}
          isScalable={modal.content.settings?.isScalable}
          themeType={themeType}
          layer={layer}
          closeHandler={() => closeModalHandler(modal.id)}
        >
          {/* if there is a headline, render it */}
          {modal.content.headline && <ModalHeadLine {...modal.content.headline} />}
          {/* render the children of the modal  */}
          {modal.content.content}
        </SwipeUpModal>
      ))}
    </FancyPortal>
  );
}
