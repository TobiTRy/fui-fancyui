import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react';

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
    themeType = 'primary',
    layer = 1,
    backdrop = true,
    externalStyle,
    onClose,
    ...htmlProps
  } = props;

  const modalId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocusedElement = useRef<HTMLElement | null>(null);

  const [statusModal, setStatusModal] = useState<TModalStatus | 'opening'>('closed');
  const [modalPosition, setModalPosition] = useState(120);
  const initialHeightRef = useRef(0);
  const { height } = useWindowDimensions();
  const contentRef = useRef<HTMLDivElement>(null);
  const scalingSection = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const scrollY = useRef(0);

  useLayoutEffect(() => {
    if (statusModal === 'opening' || statusModal === 'open') {
      if (window.scrollY > 0) {
        scrollY.current = window.scrollY;
        document.body.style.top = `-${scrollY.current}px`;
      }

      // Apply styles to prevent scrolling
      document.body.style.position = 'fixed';
      document.body.style.overflow = 'hidden'; // Prevent vertical scroll specifically
    }
  }, [statusModal]);

  useEffect(() => {
    if (statusModal === 'closing') {
      // Small delay to ensure styles are reset after the modal's animation is complete
      document.body.style.top = '';
      document.body.style.position = '';

      window.scrollTo(0, scrollY.current); // Restore scroll position

      document.body.style.overflow = ''; // Restore vertical scroll
    }
  }, [statusModal]);

  // ... your componen

  //Opens the modal and set the overfolw to hidden
  const openModal = () => {
    // if the content is higher than the window height, set the height to the window
    // fixes safari bug where the modal jumps back wehn it reaches the top
    const contentHeight = contentRef?.current?.offsetHeight ?? 0; // Get content height, defaulting to 0
    const scalingSectionHeight = scalingSection.current?.offsetHeight ?? 0; // Get the height of the scaling section
    const maxHeight = height; // reduce the height of the scaling section

    const minHeight = Math.min(contentHeight + scalingSectionHeight, maxHeight); // Return the smaller of the two
    const position = calcPositionInPercent(minHeight, height);

    initialHeightRef.current = minHeight;
    setModalPosition(position);
    setStatusModal('opening');
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
    if (statusModal === 'opening') {
      if (dialogRef.current) dialogRef.current.focus();

      setContentHeight(height - (contentRef?.current?.offsetHeight ?? 0));
      setStatusModal('open');
    } else {
      if (statusModal === 'closing') {
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
    const scalingSectionHeight = scalingSection.current?.offsetHeight ?? 0;

    const flipedPosition = height - currentPos + 15 + scalingSectionHeight / 2;

    // calculate the position in percent
    const position = calcPositionInPercent(flipedPosition, height);

    // if the user is moving the modal
    if (state === 'move') {
      setContentHeight(height - flipedPosition + scalingSectionHeight);

      setModalPosition(position);
      // if the user is done moving the modal
    } else if (state === 'end') {
      const inititialHeight = calcPositionInPercent(initialHeightRef.current, height) + 100;
      // this calulation is for good user experience.  Its closes the modal when the user is moving the modal down a specific amount
      if (initialHeightRef.current !== 0 && position > inititialHeight * 0.4) {
        closeModal('intercation');
      }
    }
  };

  return (
    <WrapperModal $externalStyle={externalStyle} {...htmlProps}>
      <SwipeUpContainer
        id={modalId}
        onTransitionEnd={handleOpeningAndClosing}
        isOpen={statusModal === 'opening'}
        ref={dialogRef}
        tabIndex={-1}
        isScalable={isScalable}
        themeType={themeType}
        layer={layer}
        style={{
          transform:
            statusModal === 'open' || statusModal === 'opening'
              ? `translateY(${Math.max(modalPosition, 0)}%)`
              : 'translateY(120%)', // 120% to make sure the modal is not visible iphone searchbar is transparent ...
          transition: statusModal !== 'open' ? 'transform 0.3s ease-in-out' : '',
        }}
      >
        {/*// ---------- The top of the modal is used for the scaling ---------- //*/}
        {isScalable && isCloseAble && (
          <ScalingSection
            ref={scalingSection}
            handleScaling={handleScaling}
            onClick={() => closeModal('intercation')}
          />
        )}
        {/*// ---------- Content Area ---------- //*/}
        <ContentBox
          style={{ height: height - (contentHeight ?? 0) + 'px' }}
          $spaceTop={scalingSection.current?.offsetHeight ?? 0}
        >
          {/*// ---------- Header ---------- //*/}
          <WrapperContent>
            <Content ref={contentRef}>{children}</Content>
          </WrapperContent>
        </ContentBox>
      </SwipeUpContainer>
      {backdrop && (
        <BackDrop
          isOpen={statusModal === 'opening' || statusModal === 'open'}
          onClick={() => closeModal('intercation')}
        />
      )}
    </WrapperModal>
  );
}

const calcPositionInPercent = (currentPos: number, height: number) => {
  const windowHeight = height;
  const position = windowHeight - currentPos;
  return (position / windowHeight) * 100;
};
