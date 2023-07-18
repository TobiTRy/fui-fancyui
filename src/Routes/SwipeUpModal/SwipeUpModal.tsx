import React from 'react';

import FancySwipeUpModal from '../../Components/UI/Organisms/FancySwipeUpModal/FancySwipeUpModal';
import { useFancySwipeUpModalStore } from '../../Components/UI/Organisms/FancySwipeUpModal/FancySwipeUpModal.state';
import FancyButton from '../../Components/UI/Molecules/FancyButton/FancyButton';

import { FancyTextInput } from '../../Components/UI/Organisms/FancyTextInput';

import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper';

export default function SwipeUpModal() {
  const closeSwipeUpModal = useFancySwipeUpModalStore((state) => state.closeSwipeUpModal);
  const openSwipeUpModal = useFancySwipeUpModalStore((state) => state.openSwipeUpModal);

  const openModalHandler = () => {
    openSwipeUpModal(
      {
        content: 
          <div style={{display: 'flex', flexDirection: 'column', gap: '18px'}}>
          <FancyTextInput label="Email" />
          <FancyTextInput label="Email" />
          <FancyTextInput label="Email" />
          <FancyButton onClick={() => closeSwipeUpModal('test')} label="Close Modal"></FancyButton>
        </div>
      ,
      headline: { title: 'test', subTitle: 'test' },
      settings: { isCloseAble: true, isScalable: true}
    },
    'test'
    )
  };

  
  const openModalHandler2 = () => {
    openSwipeUpModal(
      {
        content: 
          <div style={{display: 'flex', flexDirection: 'column', gap: '18px'}}>
          <FancyTextInput label="Email" />
          <FancyTextInput label="Email" />
          <FancyTextInput label="Email" />
          <FancyButton onClick={() => closeSwipeUpModal('test1')} label="Close Modal"></FancyButton>
        </div>
      ,
      headline: { title: 'test', subTitle: 'test' },
      settings: { isCloseAble: true, isScalable: true}
    },
    'test1'
    )
  };

  return (
    <DesignWrapper>
      <DesignArea title='Swipe Up Modals'>

        <FancyButton onClick={openModalHandler} label="Open Modal" ></FancyButton>
        <FancyButton onClick={openModalHandler2} label="Open Modal Scalable" ></FancyButton>
        <FancySwipeUpModal appendToDomID="modal"></FancySwipeUpModal>
      </DesignArea>
    </DesignWrapper>
  );
}
