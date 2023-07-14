import React, { useEffect, useState } from 'react';
import { animated, useTransition } from '@react-spring/web';

import useWindowDimensions from '../../Atoms/functions/hooks/useWindowDimensions';
import SwipeUpContainer from '../../Atoms/SwipeUpContainer/SwipeUpContainer';
import BackDrop from '../../Atoms/BackDrop/BackDrop';
import UseDelay from '../../Atoms/functions/hooks/UseDelay';
import ScalingSection from '../ScalingSection/ScalingSection';
import { Content, ContentBox, WrapperAnimated, WrapperContent, WrapperModal } from './SwipeUpModal.style';

// --------------------------------------------------------------------------- //
// ----------- The Modal Molecule the displays the complete modal - ---------- //
// --------------------------------------------------------------------------- //
interface ISwipeUpModal {
  children?: React.ReactNode;
  isOpen: boolean;
  isCloseAble?: boolean;
  isScalable?: boolean;
  closeHandler?: () => void;
}
export default function SwipeUpModal(props: ISwipeUpModal) {
  const { children, isOpen, isCloseAble, isScalable, closeHandler } = { ...defaultProps, ...props };

  const [modalMobileVisible, setmodalMobileVisible] = useState(false);
  const [modalPosition, setModalPosition] = useState({ height: '100%' });
  const [backdropVisible, setBackdropVisible] = useState(false);
  const [initialHeight, setInitialHeight] = useState<number | undefined>();
  const { height } = useWindowDimensions();

  //Opens the modal and set the overfolw to hidden
  const openModal = () => {
    document.body.style.overflow = 'hidden';
    setBackdropVisible(true);
    setmodalMobileVisible(true);
    setModalPosition({ height: 'auto' });
  };

  const moveModalHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    document.body.style.overflowY = 'hidden';
    const getToutch = e.changedTouches[0].clientY;

    // sets the initial height of the modal on the auto height 
    // this is used for the close calculation 
    if (!initialHeight) setInitialHeight(height - getToutch);

    //from the to 100% = 0px to the buttom 0% 844px
    //height = 100% 844
    const onePercent = height / 100;
    const getPosition = getToutch / onePercent;
    const turnValue = 100 - getPosition;

    // update the modal position
    setModalPosition({ height: turnValue + '%' });
  };

  //Close the modal and set the overflow  back
  const closeModal = () => {
    if (!isCloseAble) {
      setModalPosition({ height: 'auto' });
      return;
    }
    setmodalMobileVisible(false);
    setBackdropVisible(false);

    //close the gobal modal state
    closeHandler && closeHandler();

    setTimeout(() => setModalPosition({ height: '100%' }), 300);
    document.body.style.overflow = 'overlay';
  };

  // when the touchevent is active, can calucalte the height of the modal and close it
  const toutchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const getToutch = e.changedTouches[0].clientY;
    // this calulation is for good user experience
    if (initialHeight !== undefined && height - getToutch < initialHeight * 0.85) {
      closeModal();
    }
  };

  // if the modal is open, open the modal else close it
  useEffect(() => {
    if (isOpen) {
      openModal();
    } else {
      closeModal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const openTransition = useTransition(modalMobileVisible, {
    from: { height: '0%' },
    enter: { height: '100%' },
    leave: { height: '0%' },
  });

  return (
    <UseDelay externalStateBool={isOpen}>
      <WrapperModal>
        {openTransition(
          (styles, item) =>
            item && (
              <WrapperAnimated as={animated.div} style={styles}>
                <SwipeUpContainer style={modalPosition} isScalable={isScalable}>
                  {/*// ---------- The top of the modal is used for the scaling ---------- //*/}
                  {isScalable && (
                    <ScalingSection
                      touchMove={(e) => {
                        moveModalHandler(e);
                      }}
                      touchEnd={toutchEnd}
                      click={closeModal}
                    />
                  )}
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

const defaultProps: ISwipeUpModal = {
  isOpen: false,
  isCloseAble: true,
  isScalable: false,
};
