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

export default function ModalModule({}: IModalModule) {
  const modals = useModalModuleStore((state) => state.modals);
  const openDialog = useModalModuleStore((state) => state.openModal);
  const closeModal = useModalModuleStore((state) => state.closeModal);

  const openNewDialog = () => {
    const id = Math.random().toString(36).substr(2, 9);
    //openDialog(id);
  };

  console.log(modals);

  return (
    <>
      <FancyPortal appendToID='modal'>
        {modals.map((modal, index) => (
          <Modal key={index} currentlyOpen={true}>
            <HeadLine>
              {modal.content.headline && <ModalHeadLine {...modal.content.headline} hr={false} />}
              <CloseButtonWrapper>
                <FancyXButton onClick={() => closeModal(modal.id)} />
              </CloseButtonWrapper>
              <FancyHR />
            </HeadLine>
            {/* {Content && <Content />} */}
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
