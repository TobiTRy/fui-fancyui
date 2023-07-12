import React, { useEffect, useState } from 'react';
import { animated, useTransition } from '@react-spring/web';
import useWindowDimensions from '../../Atoms/functions/hooks/useWindowDimensions';

import SwipeUpContainer from '../../Atoms/SwipeUpContainer/SwipeUpContainer';
import BackDrop from '../../Atoms/BackDrop/BackDrop';

import UseDelay from '../../Atoms/functions/hooks/UseDelay';
import { Content, ContentBox, WrapperAnimated, WrapperContent, WrapperModal } from './SwipeUpModal.style';
import ScalingSection from '../ScalingSection/ScalingSection';

// --------------------------------------------------------------------------- //
// ----------- The Modal Molecule the displays the complete modal - ---------- //
// --------------------------------------------------------------------------- //
interface ISwipeUpModal {
  children?: React.ReactNode;
  isOpen: boolean;
  closeHandler?: () => void;
}
export default function SwipeUpModal({ children, isOpen = false, closeHandler }: ISwipeUpModal) {
  const [modalMobileVisible, setmodalMobileVisible] = useState(false);
  const [modalPosition, setModalPosition] = useState({ height: '100%' });
  const [backdropVisible, setBackdropVisible] = useState(false);
  const { height } = useWindowDimensions();

  //Opens the modal and set the overfolw to hidden
  const openModal = () => {
    document.body.style.overflow = 'hidden';
    setBackdropVisible(true);
    setmodalMobileVisible(true);
    setModalPosition({ height: 'auto' });
  };

  //Close the modal and set the overflow  back
  const closeModal = () => {
    setmodalMobileVisible(false);
    setBackdropVisible(false);

    //close the gobal modal state
    closeHandler && closeHandler();

    setTimeout(() => setModalPosition({ height: '100%' }), 300);
    document.body.style.overflow = 'overlay';
  };

  const openMobileModal = () => {
    //Opens the modal and set the overfolw to hiddem
    document.body.style.overflow = 'hidden';
  };

  const mobileMoveModal = (e: React.TouchEvent<HTMLDivElement>) => {
    document.body.style.overflowY = 'hidden';
    //from the to 100% = 0px to the buttom 0% 844px
    //height = 100% 844
    const getToutch = e.changedTouches[0].clientY;
    const onePercent = height / 100;
    const getPosition = getToutch / onePercent;
    const turnValue = 100 - getPosition;

    //Close the modal at 2 percent of
    if (turnValue < 35) {
      closeModal();
      return;
    }
    // update the modal position
    setModalPosition({ height: turnValue + '%' });
  };

  const mobileOpenTransition = useTransition(modalMobileVisible, {
    from: { height: '0%' },
    enter: { height: '100%' },
    leave: { height: '0%' },
  });

  useEffect(() => {
    if (isOpen) {
      openModal();
    } else {
      closeModal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <UseDelay externalStateBool={isOpen}>
      <WrapperModal>
        {mobileOpenTransition(
          (styles, item) =>
            item && (
              <WrapperAnimated as={animated.div} style={styles}>
                <SwipeUpContainer style={modalPosition}>
                  {/*// ---------- The top of the modal is used for the scaling ---------- //*/}
                  <ScalingSection
                    touchStart={openMobileModal}
                    touchMove={(e) => {
                      mobileMoveModal(e);
                    }}
                    click={closeModal}
                  />
                  {/*// ---------- Content Area ---------- //*/}
                  <ContentBox>
                    {/*// ---------- Header ---------- //*/}
                    <WrapperContent>
                      <Content>{children}</Content>
                    </WrapperContent>
                  </ContentBox>
                </SwipeUpContainer>
              </WrapperAnimated>
            )
        )}
        <BackDrop isOpen={backdropVisible} onClick={closeModal} />
      </WrapperModal>
    </UseDelay>
  );
}
