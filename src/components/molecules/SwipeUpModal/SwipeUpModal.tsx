import React, { useEffect, useRef, useState } from 'react';

import { BackDrop } from '@/components/atoms/BackDrop';
import { ScalingSection } from '@/components/atoms/ScalingSection';
import { SwipeUpContainer } from '@/components/atoms/SwipeUpContainer';
import { useWindowDimensions } from '@/utils/hooks/useWindowDimensions';

import { TModalStatus } from '@/types/TModalStatus';
import { Content, ContentBox, WrapperContent, WrapperModal } from './SwipeUpModal.style';
import { TSwipeUpModal } from './TSwipeUpModal.model';

// --------------------------------------------------------------------------- //
// ----------- The Modal Molecule the displays the complete modal - ---------- //
// --------------------------------------------------------------------------- //
export default function SwipeUpModal(props: TSwipeUpModal) {
  const {
    children,
    isOpen = true,
    isCloseAble = true,
    isScalable = true,
    onClose,
    themeType = 'primary',
    layer = 1,
    backdrop = true,
    ...htmlProps
  } = props;

  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocusedElement = useRef<HTMLElement | null>(null);

  const [statusModal, setStatusModal] = useState<TModalStatus>('closed');
  const [modalPosition, setModalPosition] = useState({ height: 'auto' });
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
    console.log('cloesedBy', cloesedBy);
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

  // if the modal is open, open the modal else close it
  useEffect(() => {
    if (isOpen) {
      // Store the currently focused element (before modal opens)
      lastFocusedElement.current = document.activeElement as HTMLElement;
      openModal();
    } else {
      closeModal('status');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // Handle the focus of the modal
  useEffect(() => {
    // Focus the dialog when it is rendered
    if (statusModal === 'open') {
      const timer = setTimeout(() => {
        if (dialogRef.current) dialogRef.current.focus();
      }, 10);
      return () => clearTimeout(timer);
    } else {
      // Return focus to the last focused element when modal closes
      if (lastFocusedElement.current) {
        lastFocusedElement.current.focus();
      }
    }
  }, [statusModal]);

  return (
    <>
      <WrapperModal {...htmlProps}>
        <SwipeUpContainer
          isOpen={statusModal === 'open'}
          ref={dialogRef}
          style={modalPosition}
          tabIndex={-1}
          isScalable={isScalable}
          themeType={themeType}
          layer={layer}
        >
          {/*// ---------- The top of the modal is used for the scaling ---------- //*/}
          {isScalable && isCloseAble && (
            <ScalingSection
              touchMove={moveModalHandler}
              touchEnd={toutchEnd}
              onClick={() => closeModal('intercation')}
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
      </WrapperModal>
      {backdrop && <BackDrop isOpen={statusModal === 'open'} onClick={() => closeModal('intercation')} />}
    </>
  );
}
