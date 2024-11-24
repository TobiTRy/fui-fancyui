'use client';

import { useEffect, useId, useRef, useState } from 'react';

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
  useBodyOverflow('hidden');
  // Store initial window height
  const initialWindowHeight = useRef(window.innerHeight);

  // Add visual viewport change handler
  useEffect(() => {
    const handleVisualViewportResize = () => {
      if (window.visualViewport) {
        const viewportHeight = window.visualViewport.height;
        const heightDiff = initialWindowHeight.current - viewportHeight;

        if (contentRef.current && heightDiff > 0) {
          // Adjust content container height when keyboard or search bar appears
          contentRef.current.style.height = `${viewportHeight - (scalingSection.current?.offsetHeight ?? 0)}px`;
          contentRef.current.style.maxHeight = `${viewportHeight - (scalingSection.current?.offsetHeight ?? 0)}px`;
        }
      }
    };

    window.visualViewport?.addEventListener('resize', handleVisualViewportResize);
    return () => {
      window.visualViewport?.removeEventListener('resize', handleVisualViewportResize);
    };
  }, []);

  const openModal = () => {
    // Store initial window height when opening
    initialWindowHeight.current = window.innerHeight;

    const contentHeight = contentRef?.current?.offsetHeight ?? 0;
    const scalingSectionHeight = scalingSection.current?.offsetHeight ?? 0;
    const maxHeight = initialWindowHeight.current;

    const minHeight = Math.min(contentHeight + scalingSectionHeight, maxHeight);
    const position = calcPositionInPercent(minHeight, maxHeight);

    initialHeightRef.current = minHeight;
    setModalPosition(position);
    setStatusModal('opening');
  };

  const closeModal = (closedBy: 'status' | 'interaction') => {
    if (closedBy === 'interaction' && !isCloseAble) return;

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
  };

  useEffect(() => {
    if (isOpen) {
      lastFocusedElement.current = document.activeElement as HTMLElement;
      openModal();
    } else {
      closeModal('status');
    }
  }, [isOpen]);

  const handleOpeningAndClosing = (e: React.TransitionEvent<HTMLDivElement>) => {
    const targetElement = e.target as HTMLDivElement;
    if (targetElement.id !== modalId) return;

    if (statusModal === 'opening') {
      if (dialogRef.current) dialogRef.current.focus();

      // Store scroll position before fixing position
      scrollY.current = window.scrollY;

      // Apply fixed positioning in a way that works better with iOS
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY.current}px`;
      document.body.style.width = '100%'; // Prevent horizontal shift

      setContentHeight(initialWindowHeight.current - (contentRef?.current?.offsetHeight ?? 0));
      setStatusModal('open');
    } else if (statusModal === 'closing') {
      setStatusModal('closed');
      if (onClose) onClose();

      if (lastFocusedElement.current) {
        lastFocusedElement.current.focus();
      }
    }
  };

  const handleScaling = (state: 'move' | 'end', currentPos: number) => {
    const scalingSectionHeight = scalingSection.current?.offsetHeight ?? 0;
    const currentHeight = window.visualViewport?.height ?? initialWindowHeight.current;

    const flippedPosition = currentHeight - currentPos + scalingSectionHeight;
    const position = calcPositionInPercent(flippedPosition, currentHeight);

    if (state === 'move') {
      setContentHeight(currentHeight - flippedPosition + scalingSectionHeight);
      setModalPosition(position);
    } else if (state === 'end') {
      const initialHeight = calcPositionInPercent(initialHeightRef.current, currentHeight) + 100;
      if (initialHeightRef.current !== 0 && position > initialHeight * 0.4) {
        closeModal('interaction');
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
              : 'translateY(120%)',
          transition: statusModal !== 'open' ? 'transform 0.3s ease-in-out' : '',
        }}
      >
        {isScalable && isCloseAble && (
          <ScalingSection
            ref={scalingSection}
            handleScaling={handleScaling}
            onClick={() => closeModal('interaction')}
          />
        )}
        <ContentBox
          style={{
            height: `${height - (contentHeight ?? 0)}px`,
            maxHeight: `${window.visualViewport?.height ?? height}px`,
          }}
          $spaceTop={scalingSection.current?.offsetHeight ?? 0}
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
