import React, { useEffect, useState } from 'react';
import { animated, useTransition } from '@react-spring/web';

import useWindowDimensions from '../../utils/hooks/useWindowDimensions/useWindowDimensions';
import SwipeUpContainer from '../../atoms/SwipeUpContainer/SwipeUpContainer';
import BackDrop from '../../atoms/BackDrop/BackDrop';
import UseDelay from '../../utils/components/UseDelay/UseDelay';
import ScalingSection from '../ScalingSection/ScalingSection';
import { Content, ContentBox, WrapperAnimated, WrapperContent, WrapperModal } from './SwipeUpModal.style';
import { ISwipeUpModal } from './ISwipeUpModal.model';
import { TModalStatus } from '../../../interface/TModalStatus';

// --------------------------------------------------------------------------- //
// ----------- The Modal Molecule the displays the complete modal - ---------- //
// --------------------------------------------------------------------------- //
export default function SwipeUpModal(props: ISwipeUpModal) {
  const { children, isOpen, isCloseAble, isScalable, onClose, themeType, layer, backdrop = true } = { ...defaultProps, ...props };

  const [statusModal, setStatusModal] = useState<TModalStatus>('closed');
  const [modalPosition, setModalPosition] = useState({ height: '100%' });
  const [initialHeight, setInitialHeight] = useState<number | undefined>();
  const { height } = useWindowDimensions();

  //Opens the modal and set the overfolw to hidden
  const openModal = () => {
    document.body.style.overflow = 'hidden';
    setModalPosition({ height: 'auto' });
    setStatusModal('open');
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

  //Close the modal via the specific event and set the overflow  back
  //the closedBy is needed is needed to prevent the modal from closing -->
  //when the user is interacting with the modal and the modal is not closeable
  const closeModal = (cloesedBy: 'status' | 'intercation') => {
    if (cloesedBy === 'intercation' && !isCloseAble) return;

    //close the gobal modal state
    if (onClose) onClose();
    setStatusModal('closing');

    //wait for the animation and remove the modal from the store
    setTimeout(() => {
      setStatusModal('closed');
    }, 250);

    document.body.style.overflow = 'overlay';
  };

  // when the touchevent is active, can calucalte the height of the modal and close it
  const toutchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const getToutch = e.changedTouches[0].clientY;
    // this calulation is for good user experience
    if (initialHeight !== undefined && height - getToutch < initialHeight * 0.85) {
      closeModal('intercation');
    }
  };

  // the open transition for the modal via react-spring
  const openTransition = useTransition(statusModal === 'open', {
    from: { height: '0%' },
    enter: { height: '100%' },
    leave: { height: '0%' },
  });

  // if the modal is open, open the modal else close it
  useEffect(() => {
    if (isOpen) {
      openModal();
    } else {
      closeModal('status');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <UseDelay externalStateBool={statusModal === 'open'}>
      <WrapperModal>
        {openTransition(
          (styles, item) =>
            item && (
              <WrapperAnimated as={animated.div} style={styles}>
                <SwipeUpContainer style={modalPosition} isScalable={isScalable} themeType={themeType} layer={layer}>
                  {/*// ---------- The top of the modal is used for the scaling ---------- //*/}
                  {isScalable && isCloseAble && (
                    <ScalingSection
                      touchMove={(e) => {
                        moveModalHandler(e);
                      }}
                      touchEnd={toutchEnd}
                      click={() => closeModal('intercation')}
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
        {backdrop && <BackDrop isOpen={statusModal === 'open'} onClick={() => closeModal('intercation')} />}
      </WrapperModal>
    </UseDelay>
  );
}

const defaultProps: ISwipeUpModal = {
  isCloseAble: true,
  isScalable: true,
  isOpen: true,
};
