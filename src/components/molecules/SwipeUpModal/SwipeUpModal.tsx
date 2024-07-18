import { useEffect, useId, useRef, useState } from 'react';

import { BackDrop } from '@/components/atoms/BackDrop';
import { ScalingSection } from '@/components/atoms/ScalingSection';
import { SwipeUpContainer } from '@/components/atoms/SwipeUpContainer';
import { useWindowDimensions } from '@/utils/hooks/useWindowDimensions';

import { TModalStatus } from '@/types/TModalStatus';
import { Content, ContentBox, WrapperContent, WrapperModal } from './SwipeUpModal.style';
import { TSwipeUpModalWithHTMLAttrs } from './TSwipeUpModal.model';

// --------------------------------------------------------------------------- //
// ----------- The Modal Molecule the displays the complete modal - ---------- //
// --------------------------------------------------------------------------- //
export default function SwipeUpModal(props: TSwipeUpModalWithHTMLAttrs) {
  const {
    children,
    isOpen = true,
    isCloseAble = true,
    isScalable = true,
    onClose,
    themeType = 'primary',
    layer = 1,
    backdrop = true,
    externalStyle,
    ...htmlProps
  } = props;

  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocusedElement = useRef<HTMLElement | null>(null);
  const modalId = useId();

  const [statusModal, setStatusModal] = useState<TModalStatus>('closed');
  const [modalPosition, setModalPosition] = useState({ height: 'auto' });
  const initialHeightRef = useRef(0);
  const { height } = useWindowDimensions();
  const contentRef = useRef<HTMLDivElement>(null);

  //Opens the modal and set the overfolw to hidden
  const openModal = () => {
    // if the content is higher than the window height, set the height to the window
    // fixes safari bug where the modal jumps back wehn it reaches the top
    const contentHeight = contentRef?.current?.offsetHeight ?? 0; // Get content height, defaulting to 0
    const maxHeight = window.innerHeight - 30; // Calculate max allowable height
    const minHeight = Math.min(contentHeight, maxHeight); // Return the smaller of the two

    document.body.style.overflow = 'hidden';
    setModalPosition({ height: minHeight + 'px' });
    setStatusModal('open');
  };

  //Close the modal via the specific event and set the overflow  back
  //the closedBy is needed is needed to prevent the modal from closing -->
  //when the user is interacting with the modal and the modal is not closeable
  const closeModal = (cloesedBy: 'status' | 'intercation') => {
    if (cloesedBy === 'intercation' && !isCloseAble) return;

    setStatusModal('closing');
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

  const handleOpeningAndClosing = (e: React.TransitionEvent<HTMLDivElement>) => {
    const targetElement = e.target as HTMLDivElement;
    if (targetElement.id !== modalId) return;
    // Focus the dialog when it is rendered
    if (statusModal === 'open') {
      if (dialogRef.current) dialogRef.current.focus();
    } else {
      if (statusModal === 'closing') {
        document.body.style.overflow = 'overlay';
        setStatusModal('closed');
        //close the gobal modal state
        if (onClose) onClose();
      }
      // Return focus to the last focused element when modal closes
      if (lastFocusedElement.current) {
        lastFocusedElement.current.focus();
      }
    }
  };

  const handleScaling = (state: 'move' | 'end', currentPos: number) => {
    if (state === 'move') {
      document.body.style.overflowY = 'hidden';
      setModalPosition({ height: height - currentPos + 'px' });
    } else if (state === 'end') {
      // this calulation is for good user experience
      if (initialHeightRef.current !== 0 && height - currentPos < initialHeightRef.current * 0.6) {
        closeModal('intercation');
      }
    }
  };

  return (
    <WrapperModal $externalStyle={externalStyle} {...htmlProps}>
      <SwipeUpContainer
        id={modalId}
        onTransitionEnd={handleOpeningAndClosing}
        isOpen={statusModal === 'open'}
        ref={dialogRef}
        tabIndex={-1}
        isScalable={isScalable}
        themeType={themeType}
        layer={layer}
      >
        {/*// ---------- The top of the modal is used for the scaling ---------- //*/}
        {isScalable && isCloseAble && (
          <ScalingSection handleScaling={handleScaling} onClick={() => closeModal('intercation')} />
        )}
        {/*// ---------- Content Area ---------- //*/}
        <ContentBox style={modalPosition}>
          {/*// ---------- Header ---------- //*/}
          <WrapperContent>
            <Content ref={contentRef}>{children}</Content>
          </WrapperContent>
        </ContentBox>
      </SwipeUpContainer>
      {backdrop && <BackDrop isOpen={statusModal === 'open'} onClick={() => closeModal('intercation')} />}
    </WrapperModal>
  );
}
