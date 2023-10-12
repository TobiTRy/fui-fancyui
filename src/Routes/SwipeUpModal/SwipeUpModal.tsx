import React from 'react';

import FancySwipeUpModal from '../../Components/UI/Organisms/FancySwipeUpModal/FancySwipeUpModal';
import { useFancySwipeUpModalStore } from '../../Components/UI/Organisms/FancySwipeUpModal/FancySwipeUpModal.state';
import FancyButton from '../../Components/UI/Molecules/FancyButton/FancyButton';

import { FancyTextInput } from '../../Components/UI/Organisms/FancyTextInput';

import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper';

export default function SwipeUpModal() {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <DesignWrapper>
      <DesignArea title="Swipe Up Modals">
        <FancyButton onClick={() => setIsVisible(true)} label="Open Modal"></FancyButton>
        <FancyButton onClick={() => setIsVisible(false)} label="Close Modal "></FancyButton>
        <FancySwipeUpModal appendToDomID="modal" isOpen={isVisible} onClose={() => setIsVisible(false)} isScalable isCloseAble>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <FancyTextInput label="Email" />
            <FancyTextInput label="Email" />
            <FancyTextInput label="Email" />
            <FancyButton onClick={() => setIsVisible(false)} label="Close Modal"></FancyButton>
          </div>
        </FancySwipeUpModal>
        <FancySwipeUpModal appendToDomID="modal">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <FancyTextInput label="Email" />
            <FancyTextInput label="Email" />
            <FancyTextInput label="Email" />
            <FancyButton onClick={() => setIsVisible(false)} label="Close Modal"></FancyButton>
          </div>
        </FancySwipeUpModal>
      </DesignArea>
    </DesignWrapper>
  );
}
