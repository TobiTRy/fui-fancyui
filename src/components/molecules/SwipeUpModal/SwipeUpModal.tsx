'use client';
import { useCallback, useEffect, useId, useRef, useState } from 'react';

import { BackDrop } from '@/components/atoms/BackDrop';
import { ScalingSection } from '@/components/atoms/ScalingSection';
import { SwipeUpContainer } from '@/components/atoms/SwipeUpContainer';
import { useWindowDimensions } from '@/utils/hooks/useWindowDimensions';

import { TModalStatus } from '@/types/TModalStatus';
import { Content, ContentBox, WrapperContent, WrapperModal } from './SwipeUpModal.style';
import { TSwipeUpModalWithHTMLAttrs } from './TSwipeUpModal.model';
import { useBodyOverflow } from '@/utils/hooks/useBodyOverflow';

export default function SwipeUpModal(props: TSwipeUpModalWithHTMLAttrs) {
  const {
    children,
    isOpen = true,
    isCloseable = true,
    isScalable = true,
    themeType = 'primary',
    layer = 1,
    backdrop = true,
    externalStyle,
    onClose,
    ...htmlProps
  } = props;

  const modalId = useId();
  const initialHeightRef = useRef(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocusedElement = useRef<HTMLElement | null>(null);
  const wrapperModal = useRef<HTMLDivElement>(null);
  const scalingSection = useRef<HTMLDivElement>(null);

  const { height: windowHeight } = useWindowDimensions();
  const [contentHeight, setContentHeight] = useState(0);
  const [statusModal, setStatusModal] = useState<TModalStatus | 'opening'>('closed');
  const [modalPosition, setModalPosition] = useState(120);
  const scrollY = useRef(0);

  useBodyOverflow('hidden');

  const openModal = useCallback(() => {
    // Store initial window height when opening
    const contentHeight = contentRef?.current?.offsetHeight ?? 0;
    const scalingSectionHeight = scalingSection.current?.offsetHeight ?? 0;

    const minHeight = Math.min(contentHeight + scalingSectionHeight, windowHeight);
    const position = calcPositionInPercent(minHeight, windowHeight);

    initialHeightRef.current = minHeight;
    setModalPosition(position);
    setStatusModal('opening');
  }, [windowHeight]);

  const closeModal = useCallback(
    (closedBy: 'status' | 'interaction') => {
      if (closedBy === 'interaction' && !isCloseable) return;

      // Reset any viewport-specific styles
      if (contentRef.current) {
        contentRef.current.style.height = '';
        contentRef.current.style.maxHeight = '';
      }

      // Remove fixed positioning
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';

      window.scrollTo(0, scrollY.current);
      setStatusModal('closing');
    },
    [isCloseable]
  );

  useEffect(() => {
    if (isOpen) {
      lastFocusedElement.current = document.activeElement as HTMLElement;
      openModal();
    } else {
      closeModal('status');
    }
  }, [isOpen, openModal, closeModal]);

  const handleOpeningAndClosing = useCallback(
    (e: React.TransitionEvent<HTMLDivElement>) => {
      const targetElement = e.target as HTMLDivElement;
      if (targetElement.id !== modalId) return;
      const contentHeight = contentRef?.current?.offsetHeight ?? 0;
      const scalingSectionHeight = scalingSection.current?.offsetHeight ?? 0;

      if (statusModal === 'opening') {
        if (dialogRef.current) dialogRef.current.focus();

        // Store scroll position before fixing position
        scrollY.current = window.scrollY;

        // Apply fixed positioning in a way that works better with iOS
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY.current}px`;
        document.body.style.width = '100%'; // Prevent horizontal shift

        setContentHeight(windowHeight - contentHeight + scalingSectionHeight / 2);
        setStatusModal('open');
      } else if (statusModal === 'closing') {
        setStatusModal('closed');

        if (onClose) onClose();
        lastFocusedElement?.current?.focus();
      }
    },
    [modalId, onClose, statusModal, windowHeight]
  );

  const handleScaling = useCallback(
    (state: 'move' | 'end', currentPos: number) => {
      const scalingSectionHeight = scalingSection.current?.offsetHeight ?? 0;
      const flippedPosition = windowHeight - currentPos + scalingSectionHeight / 2;
      const position = calcPositionInPercent(flippedPosition, windowHeight);

      if (state === 'move') {
        setContentHeight(windowHeight - (flippedPosition + scalingSectionHeight));
        setModalPosition(position);
      } else if (state === 'end') {
        const initialHeight = calcPositionInPercent(initialHeightRef.current, windowHeight) + 100;
        if (initialHeightRef.current !== 0 && position > initialHeight * 0.4) {
          closeModal('interaction');
        }
      }
    },
    [windowHeight, closeModal]
  );

  useEffect(() => {
    // recalculate content height when window height changes
    setContentHeight(
      windowHeight - ((contentRef?.current?.offsetHeight ?? 0) + (scalingSection.current?.offsetHeight ?? 0))
    );
  }, [windowHeight]);

  return (
    <WrapperModal ref={wrapperModal} $externalStyle={externalStyle} {...htmlProps}>
      <SwipeUpContainer
        ref={dialogRef}
        tabIndex={-1}
        id={modalId}
        isOpen={statusModal === 'opening'}
        onTransitionEnd={handleOpeningAndClosing}
        isScalable={isScalable}
        themeType={themeType}
        layer={layer}
        style={{
          transform:
            statusModal === 'open' || statusModal === 'opening'
              ? `translateY(${Math.max(modalPosition, 0)}%)`
              : 'translateY(120%)',
          transition: statusModal !== 'open' ? 'transform 0.3s ease-in-out' : '',
        }}
      >
        {isScalable && isCloseable && (
          <ScalingSection
            ref={scalingSection}
            handleScaling={handleScaling}
            onClick={() => closeModal('interaction')}
          />
        )}
        <ContentBox
          $spaceTop={scalingSection.current?.offsetHeight ?? 0}
          style={{
            height: `${windowHeight - (contentHeight ?? 0)}px`,
          }}
        >
          <WrapperContent>
            <Content ref={contentRef}>{children}</Content>
          </WrapperContent>
        </ContentBox>
      </SwipeUpContainer>
      {backdrop && (
        <BackDrop
          isOpen={statusModal === 'opening' || statusModal === 'open'}
          onClick={() => closeModal('interaction')}
        />
      )}
    </WrapperModal>
  );
}

const calcPositionInPercent = (currentPos: number, height: number) => {
  return ((height - currentPos) / height) * 100;
};
