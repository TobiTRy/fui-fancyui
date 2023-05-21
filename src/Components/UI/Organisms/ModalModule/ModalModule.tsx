import React from 'react';

import { useModalModuleStore } from './ModalModule.state';

import Modal from '../../Molecules/Modal/Modal';
import { CloseButtonWrapper, HeadLine } from '../../Molecules/Modal/Modal.style';
import ModalHeadLine from '../../Molecules/ModalHeadLine/ModalHeadLine';
import FancyXButton from '../../Atoms/FancyXButton';
import FancyHR from '../../Atoms/FancyHR';
import ModalBottomLine from '../../Molecules/ModalBottomLine/ModalBottomLine';
import FancyPortal from '../../Atoms/functions/FancyPortal';

// ---------- How to use the Module ------- //
// Append this module to the root of the app you dont need to pass any props
// just use the useModalModuleStore to open a modal
// useModalModuleStore.openModal('id', { headline: { title: 'title' }, content: () => <div>content</div>, bottomLine: { buttons: [{ title: 'title', onClick: () => {} }] } })
// useModalModuleStore.closeModal('id')


// TODO: Automatic id for the geneartion
// TODO: Remove content.content from the content  

// --------------------------------------------------------------------------- //
// ----------------- The modalModule to build up a Moadal  ------------------- //
// --------------------------------------------------------------------------- //
export default function ModalModule() {
  const modals = useModalModuleStore((state) => state.modals);
  const closeModal = useModalModuleStore((state) => state.closeModal);
  const closingModal = useModalModuleStore((state) => state.closingModal)

  const closeModalHandler = (id: string) => {
    // closing the modal is a two step process
    // first we set the status to "closing" with the closingModal function 
    // this will trigger the animation in the modal component
    closingModal(id)

    //wait for the animation and remove the modal from the store
    setTimeout(() => {
      closeModal(id)
    }, 300)
  }

  return (
    <>
      {/* ----- The FancModal Ports the Modal out of the root div in the spearte "modal" div ----- */}
      <FancyPortal appendToID='modal'>
        {modals.map((modal) => ( 
          <Modal key={modal.id} status={modal.status} id={modal.id} closeModal={() => closeModalHandler(modal.id)}>
            {/* ----- The Headline of the Modal  ----- */}
            <HeadLine>
              {/* ----- The Content of the headline when its provided ----- */}
              {modal.content.headline && <ModalHeadLine {...modal.content.headline} hr={false} />}
              <CloseButtonWrapper>
                <FancyXButton onClick={() => closeModalHandler(modal.id)} />
              </CloseButtonWrapper>
              <FancyHR />
            </HeadLine>
            {/* ----- The Content of the Modal ----- */}
            {modal.content.content && <>{ modal.content.content }</>}

            {/* ----- The BottomLine of the Modal whem its provided ----- */}
            {modal.content.bottomLine && <ModalBottomLine buttons={modal.content.bottomLine?.buttons} component={modal.content.bottomLine?.component} />}
          </Modal>
        ))}
      </FancyPortal>
    </>
  );
}