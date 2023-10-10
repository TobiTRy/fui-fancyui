import { useState, useEffect } from 'react';
import useIntersectionObserver from '../../../HelperFunctions/hooks/useIntersectionObserver';


// the hook for handle the visible months and add the next and previous months
export default function useVisibleMonths(isScrolled: boolean) {
  const [lastMonthRef, isInView] = useIntersectionObserver();
  const [firstMonthRef, isFirstInView] = useIntersectionObserver();

  // calulate the visible months based on the current month
  const [visibleMonths, setVisibleMonths] = useState<number[]>(() => {
    const currentMonth = new Date().getMonth();
    const startMonth = Math.max(currentMonth - 2, 0);
    const endMonth = Math.min(currentMonth + 2, 11);
    return Array.from({ length: endMonth - startMonth + 1 }, (_, i) => i + startMonth);
  });

  // When the last visible month enters the viewport, add the next two months
  useEffect(() => {
    if (isInView) {
      setVisibleMonths((prevMonths) => {
        const nextMonth1 = prevMonths[prevMonths.length - 1] + 1;
        const nextMonth2 = prevMonths[prevMonths.length - 1] + 2;
        if (nextMonth1 < 12) prevMonths.push(nextMonth1);
        if (nextMonth2 < 12) prevMonths.push(nextMonth2);
        return [...prevMonths];
      });
    }
  }, [isInView]);

  // When the first visible month enters the viewport, add the previous two months
  useEffect(() => {
    if (isFirstInView && isScrolled) {
      setVisibleMonths((prevMonths) => {
        const prevMonth1 = prevMonths[0] - 1;
        const prevMonth2 = prevMonths[0] - 2;
        if (prevMonth1 >= 0) prevMonths.unshift(prevMonth1);
        if (prevMonth2 >= 0) prevMonths.unshift(prevMonth2);
        return [...prevMonths];
      });
    }
  }, [isFirstInView, isScrolled]);

  return { visibleMonths, firstMonthRef, lastMonthRef };
}
