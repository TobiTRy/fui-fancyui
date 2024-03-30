/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';

import FancySwipeUpModal from '../../components/organisms/FancySwipeUpModal/FancySwipeUpModal';
import FancyButton from '../../components/organisms/FancyButton/FancyButton';

import { FancyTextInput } from '../../components/organisms/FancyTextInput';
import SwipeUpModal from '../../components/molecules/SwipeUpModal/SwipeUpModal';

import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper';
import { useFancySwipeUpModalStore } from '../../components/organisms/FancySwipeUpModal/FancySwipeUpModal.state';

export default function SwipeUpModalRoute() {
  const [isVisible, setIsVisible] = React.useState(false);
  const openModal = useFancySwipeUpModalStore((state) => state.openSwipeUpModal);
  const closeModal = useFancySwipeUpModalStore((state) => state.closeSwipeUpModal);

  const [stateSwipeUp, setStateSwipeUp] = React.useState(false);

  const openModalHandler = () => {
    openModal(
      'modalTest',
      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        <FancyTextInput label="Email" />
        <FancyButton onClick={() => closeModal('modalTest')} label="Close Modal"></FancyButton>
      </div>,
      {
        isCloseAble: true,
        isScalable: true,
      }
    );
  };

  const toggleModal = () => {
    setStateSwipeUp(!stateSwipeUp);
  };

  return (
    <DesignWrapper>
      <DesignArea title="Swipe Up Modals">
        <FancyButton onClick={() => openModalHandler()} label="Open Modal"></FancyButton>
        <FancyButton onClick={() => setIsVisible(false)} label="Close Modal "></FancyButton>
        <FancyButton onClick={toggleModal} label="Open Swipe Up Modal"></FancyButton>

        <SwipeUpModal isOpen={stateSwipeUp}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <FancyTextInput label="Email" />
            <FancyTextInput label="Email" />
            <FancyTextInput label="Email" />
            <FancyButton onClick={() => setIsVisible(false)} label="Close Modal"></FancyButton>
          </div>
        </SwipeUpModal>
      </DesignArea>
    </DesignWrapper>
  );
}
