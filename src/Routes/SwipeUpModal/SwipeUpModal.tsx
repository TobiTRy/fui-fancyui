/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';

import FancySwipeUpModal from '../../Components/Organisms/FancySwipeUpModal/FancySwipeUpModal';
import FancyButton from '../../Components/Organisms/FancyButton/FancyButton';

import { FancyTextInput } from '../../Components/Organisms/FancyTextInput';

import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper';
import { useFancySwipeUpModalStore } from '../../Components/Organisms/FancySwipeUpModal/FancySwipeUpModal.state';

export default function SwipeUpModal() {
  const [isVisible, setIsVisible] = React.useState(false);
  const openModal = useFancySwipeUpModalStore((state) => state.openSwipeUpModal);
  const closeModal = useFancySwipeUpModalStore((state) => state.closeSwipeUpModal);

  const openModalHandler = () => {
    openModal(
      'modalTest',
      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        <FancyTextInput label="Email" />
        <FancyButton onClick={() => closeModal('modalTest')} label="Close Modal"></FancyButton>
      </div>,
      {
        isCloseAble: false,
        isScalable: true,
      }
    );
  };

  return (
    <DesignWrapper>
      <DesignArea title="Swipe Up Modals">
        <FancyButton onClick={() => openModalHandler()} label="Open Modal"></FancyButton>
        <FancyButton onClick={() => setIsVisible(false)} label="Close Modal "></FancyButton>

        {/* <FancySwipeUpModal appendToDomID="modal">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <FancyTextInput label="Email" />
            <FancyTextInput label="Email" />
            <FancyTextInput label="Email" />
            <FancyButton onClick={() => setIsVisible(false)} label="Close Modal"></FancyButton>
          </div>
        </FancySwipeUpModal> */}
      </DesignArea>
    </DesignWrapper>
  );
}
