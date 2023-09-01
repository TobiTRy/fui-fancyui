import React from 'react';

import { styled } from 'styled-components';

import { useFancyModalStore } from './FancyModal.state';

import Modal from '../../Molecules/Modal/Modal';
import { CloseButtonWrapper, HeadLine } from '../../Molecules/Modal/Modal.style';
import ModalHeadLine from '../../Molecules/FancyModalHeadLine/FancyModalHeadLine';
import FancyXButton from '../../Atoms/FancyXButton/FancyXButton';
import ModalBottomLine from '../../Molecules/ModalBottomLine/ModalBottomLine';
import FancyPortal from '../../HelperFunctions/FancyPortal';

import { borderRadius } from '../../Design/design';


// ---------- How to use the Module ------- //
//--- use it
// Append this module to the root of the app you dont need to pass any props
// just use the useModalModuleStore to open a modal
//--- open modal
// useModalModuleStore.openModal( { headline: { title: 'title' }, content: () => <div>content</div>, bottomLine: { buttons: [{ title: 'title', onClick: () => {} }] } }, 'ID')
//--- close modal
// when you want to close the modal with a custom button just use the closeModal function with the "ID" of the modal
// useModalModuleStore.closeModal('id')

const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5em 0 1em 0;
  overflow: hidden;
  border-radius: ${borderRadius.md};
`;

// --------------------------------------------------------------------------- //
// ----------------- The modalModule to build up a Moadal  ------------------- //
// --------------------------------------------------------------------------- //
interface IFancyModal {
  appendToDomID: string;
}
export default function FancyModal({appendToDomID}: IFancyModal) {
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
          <Modal key={key} status={modal.status} id={modal.id} closeModal={() => closeModalHandler(modal.id)}>
            {/* ----- The Headline of the Modal  ----- */}
            <HeadLine>
              {/* ----- The Content of the headline when its provided ----- */}
              {modal.content.headline && <ModalHeadLine {...modal.content.headline} hr={true} />}
              <CloseButtonWrapper>
                <FancyXButton onClick={() => closeModalHandler(modal.id)} />
              </CloseButtonWrapper>

            </HeadLine>
            {/* ----- The Content of the Modal ----- */}
            <WrapperContent>{modal.content.content && <>{modal.content.content}</>}</WrapperContent>
            
            {/* ----- The BottomLine of the Modal whem its provided ----- */}
            {modal.content.bottomLine && (
              <ModalBottomLine buttons={modal.content.bottomLine?.buttons} component={modal.content.bottomLine?.component} />
            )}
          </Modal>
        ))}
      </FancyPortal>
    </>
  );
}
