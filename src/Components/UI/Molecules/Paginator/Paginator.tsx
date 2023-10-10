import React, { useMemo } from 'react';

import SVGChevronLeft from '../../SVGIcons/SVGChevronLeft';
import SVGChevronRight from '../../SVGIcons/SVGChevronRight';

import FancyButton from '../FancyButton/FancyButton';
import { IconWrapper, NumberList, StyledPaginator } from './Paginator.style';
import PageNumberList from '../../Atoms/PageNumberList/PageNumberList';
import { TUiColorsType } from '../../Design/color/designColor';

// Define the props for the Paginator component
interface IPaginator {
  currentPage?: number;
  totalPages: number;
  themeType?: keyof TUiColorsType;
  outlinedButton?: boolean;
  onPageChange: (page: number) => void;
  pageLimits?: number;
}

// --------------------------------------------------------------------------- //
// ---------------- The Paginator for a List to siwtch pages ----------------- //
// --------------------------------------------------------------------------- //
export default function Paginator(props: IPaginator) {
  const { currentPage, totalPages, onPageChange, outlinedButton, themeType, pageLimits } = { ...defaultProps, ...props };

  // Define a function to handle page changes
  const pageHandler = (page: number) => {
    onPageChange(page);
  };

  // Memoize the PageNumberList component to avoid unnecessary re-renders
  const PageList = useMemo(
    () => PageNumberList({ totalPages, currentPage, onClick: pageHandler, pageLimits }),
    [totalPages, currentPage, onPageChange, pageLimits]
  );

  // Render the Paginator component with the appropriate props
  return (
    <StyledPaginator>
      {/* The left button for the Page Switch */}
      <FancyButton
        size="md"
        themeType={themeType ? themeType : 'accent'}
        outlined={outlinedButton ? true : false}
        wide={false}
        icon={<IconWrapper $align="left">{SVGChevronLeft}</IconWrapper>}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />
      {/* The numberlist */}
      <NumberList>{PageList}</NumberList>
      {/* The right button for the Page Switch */}
      <FancyButton
        wide={false}
        themeType={themeType ? themeType : 'accent'}
        outlined={outlinedButton ? true : false}
        icon={<IconWrapper $align="right">{SVGChevronRight}</IconWrapper>}
        size="md"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    </StyledPaginator>
  );
}

// Define the default props for the Paginator component
const defaultProps = {
  currentPage: 1 as number,
  totalPages: 1,
};
