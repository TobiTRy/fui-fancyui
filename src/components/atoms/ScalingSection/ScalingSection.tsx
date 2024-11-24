'use client';

import {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useId,
  TouchEvent as ReactTouchEvent,
  MouseEvent as ReactMouseEvent,
} from 'react';
import { styled } from 'styled-components';

import { SwipeUpDash } from '@/components/atoms/SwipeUpDash';

interface IScalingSection {
  handleScaling: (state: 'move' | 'end', currentPos: number) => void;
  onClick?: () => void;
}

// --------------------------------------------------------------------------- //
//the ScalingSection is for conroling events on the swipe up dash for better UX //
// --------------------------------------------------------------------------- //
const ScalingSection = forwardRef<HTMLDivElement, IScalingSection>((props, ref) => {
  const { handleScaling, onClick } = props;

  const [isDragging, setIsDragging] = useState(false);
  const touchStartTime = useRef<number>(0);
  const id = useId();

  const handleStart = (elementId: string) => {
    if (elementId !== id) return;
    setIsDragging(true);
    touchStartTime.current = Date.now();
  };

  const handleStartMouse = (event: ReactMouseEvent<HTMLDivElement>) => {
    const element = event.target as HTMLElement;
    handleStart(element.id);
  };

  const handleStartTouch = (event: ReactTouchEvent<HTMLDivElement>) => {
    const element = event.target as HTMLElement;
    handleStart(element.id);
  };

  const handleMoveMouse = (event: MouseEvent) => {
    if (!isDragging) return;

    const currentY = event.clientY;
    const deltaY = currentY + 15;
    handleScaling('move', deltaY);
  };

  const handleMoveTouch = (event: TouchEvent) => {
    if (!isDragging) return;

    const currentY = event.touches[0].clientY;
    const deltaY = currentY;
    handleScaling('move', deltaY);
  };

  const handleEnd = (event: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    setIsDragging(false);

    const touchDuration = Date.now() - touchStartTime.current;
    if (touchDuration < 150) {
      // Threshold for short tap (adjust as needed)
      onClick?.(); // Call onClick if it's a short tap
    }
    const currentY = isTouchEvent(event) ? event.changedTouches[0].clientY : event.clientY;

    handleScaling('end', currentY); // Notify parent of drag end
  };

  useEffect(() => {
    const options = { passive: false };
    document.addEventListener('mousemove', handleMoveMouse, options);
    document.addEventListener('mouseup', handleEnd, options);
    document.addEventListener('touchmove', handleMoveTouch, options);
    document.addEventListener('touchend', handleEnd, options);

    return () => {
      document.removeEventListener('mousemove', handleMoveMouse);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleMoveTouch);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging]);

  return (
    <SytledScalingSection id={id} ref={ref} onTouchStart={handleStartTouch} onMouseDown={handleStartMouse}>
      <SwipeUpDash onClick={onClick} />
    </SytledScalingSection>
  );
});

// ------------------------------------------- //
// ------- The style for the component ------- //
// ------------------------------------------- //
const SytledScalingSection = styled.div`
  position: sticky;
  height: 30px;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ns-resize;
  z-index: 100;
`;

//check if the event is a touch event or a mouse event
const isTouchEvent = (e: MouseEvent | TouchEvent): e is TouchEvent => {
  return 'changedTouches' in e;
};

export default ScalingSection;
