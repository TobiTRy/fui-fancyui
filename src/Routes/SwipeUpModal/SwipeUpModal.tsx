import React from 'react';

import FancySwipeUpModal from '../../Components/UI/Organisms/FancySwipeUpModal/FancySwipeUpModal';
import { useFancySwipeUpModalStore } from '../../Components/UI/Organisms/FancySwipeUpModal/FancySwipeUpModal.state';
import FancyButton from '../../Components/UI/Molecules/FancyButton/FancyButton';

import FancyInput from '../../Components/UI/Molecules/FancyInput/FancyInput';
import ModalHeadLine from '../../Components/UI/Molecules/ModalHeadLine/ModalHeadLine';


export default function SwipeUpModal() {
  const openModal = useFancySwipeUpModalStore((state) => state.open);
  const closeModal = useFancySwipeUpModalStore((state) => state.close);

  return (
    <section>
      <FancyButton onClick={openModal} label="Open Modal"></FancyButton>
      <FancySwipeUpModal headline={{title: 'test', subTitle: 'test'}}>

        <FancyInput label="Email" />
        <FancyInput label="Email" />
        <FancyInput label="Email" />
        <FancyButton onClick={closeModal} label="Close Modal"></FancyButton>
      </FancySwipeUpModal>
    </section>
  );
}
