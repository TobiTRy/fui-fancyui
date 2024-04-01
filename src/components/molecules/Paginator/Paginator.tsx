import { useMemo } from 'react';

import { SVGChevronLeft } from '@/components/icons/SVGChevronLeft';
import { SVGChevronRight } from '@/components/icons/SVGChevronRight';

import { PageNumberList } from '@/components/atoms/PageNumberList';
import { TPaginatorWithHTMLAttrs } from '@/components/molecules/Paginator/TPaginator.model';
import { FancyButton } from '@/components/organisms/FancyButton';
import { IconWrapper, NumberList, StyledPaginator } from './Paginator.style';

// --------------------------------------------------------------------------- //
// ---------------- The Paginator for a List to siwtch pages ----------------- //
// --------------------------------------------------------------------------- //
export default function Paginator(props: TPaginatorWithHTMLAttrs) {
  const {
    currentPage = 1,
    showPages = 3,
    onPageChange,
    outlinedButton,
    themeType,
    pageLimits,
    numberButtonStyle,
    ...htmlProps
  } = props;

  // Memoize the PageNumberList component to avoid unnecessary re-renders
  const PageList = useMemo(
    () => PageNumberList({ showPages, currentPage, pageHandler: onPageChange, pageLimits, numberButtonStyle }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [showPages, currentPage, onPageChange, pageLimits]
  );

  // Render the Paginator component with the appropriate props
  return (
    <StyledPaginator {...htmlProps}>
      {/* The left button for the Page Switch */}
      <FancyButton
        sizeC="md"
        themeType={themeType ?? 'accent'}
        outlined={outlinedButton}
        wide={false}
        oneToOne
        icon={<IconWrapper $align="left">{SVGChevronLeft}</IconWrapper>}
        onClick={() => onPageChange?.(currentPage - 1)}
        disabled={currentPage === 1}
      />
      {/* The numberlist */}
      <NumberList>{PageList}</NumberList>
      {/* The right button for the Page Switch */}
      <FancyButton
        wide={false}
        oneToOne
        themeType={themeType ?? 'accent'}
        outlined={outlinedButton}
        icon={<IconWrapper $align="right">{SVGChevronRight}</IconWrapper>}
        sizeC="md"
        onClick={() => onPageChange?.(currentPage + 1)}
        disabled={currentPage === pageLimits}
      />
    </StyledPaginator>
  );
}
