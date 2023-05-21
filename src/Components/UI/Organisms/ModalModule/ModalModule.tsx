import React, { ComponentType, useEffect, useRef } from 'react';

import { useModalModuleStore } from './ModalModule.state';

import Modal from '../../Molecules/Modal/Modal';
import { CloseButtonWrapper, HeadLine } from '../../Molecules/Modal/Modal.style';
import ModalHeadLine from '../../Molecules/ModalHeadLine/ModalHeadLine';
import FancyXButton from '../../Atoms/FancyXButton';
import FancyHR from '../../Atoms/FancyHR';
import ModalBottomLine from '../../Molecules/ModalBottomLine/ModalBottomLine';
import IModalModule from '../../Molecules/Modal/Modal.model';
import FancyPortal from '../../Atoms/functions/FancyPortal';



export default function ModalModule(props: IModalModule) {
  const modals = useModalModuleStore((state) => state.modals);
  const closeModal = useModalModuleStore((state) => state.closeModal);
  const closingModal = useModalModuleStore((state) => state.closingModal)

  const closeModalHandler = (id: string) => {
    closingModal(id)
    setTimeout(() => {
      closeModal(id)
    }, 300)
  }

  return (
    <>
      <FancyPortal appendToID='modal'>
        {modals.map((modal) => (
          <Modal key={modal.id} status={modal.status} id={modal.id} closeModal={() => closeModalHandler(modal.id)}>
            <>{modal.id}</>
            <HeadLine>
              {modal.content.headline && <ModalHeadLine {...modal.content.headline} hr={false} />}
              <CloseButtonWrapper>
                <FancyXButton onClick={() => closeModalHandler(modal.id)} />
              </CloseButtonWrapper>
              <FancyHR />
            </HeadLine>
            {modal.content.content && <modal.content.content />}
            {(modal.content.bottomLine || true) && (
              <ModalBottomLine buttons={modal.content.bottomLine?.buttons} component={modal.content.bottomLine?.component} />
            )}
          </Modal>
        ))}
      </FancyPortal>
    </>
  );
}