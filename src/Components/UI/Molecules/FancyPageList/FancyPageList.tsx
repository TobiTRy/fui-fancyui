import React, { useState } from 'react';
import styled from 'styled-components';

import Paginator from '../Paginator/Paginator';
import { spacingPx } from '../../Design/design';

// The List with dymaic spacing between items
const StyledList = styled.div<{ $spacing?: string }>`
  display: flex;
  flex-direction: column; 
  gap: ${({ $spacing }) => $spacing ? $spacing : '0px'};
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacingPx.xl};
`


// Define the props for the FancyPageList component
interface IFancyPageList {
  itemsPerPage?: number;
  elements: React.ReactNode[];
  spacingBetweenItems?: string;
  pageLimits?: number;
  buttonDesign?: 'accent' | 'primary' | 'transparent';
  outlinedButton?: boolean;
}

// --------------------------------------------------------------------------- //
// ------- This Component renders a Paginator with the specific list --------- //
// --------------------------------------------------------------------------- //
export default function FancyPageList(props: IFancyPageList) {
  const { itemsPerPage, elements, spacingBetweenItems, buttonDesign, outlinedButton, pageLimits } = {...defaultProps, ...props};

  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages and the current items to display
  const totalPageCount  = Math.ceil(elements?.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = elements?.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Wrapper>
      {/* The List with the items to display */}
      <StyledList $spacing={spacingBetweenItems}>
        {currentItems?.map((item, i) => (
          <React.Fragment key={i}>
            {item}
          </React.Fragment>
        ))}
      </StyledList>
      {/* The Paginator for the Page switches*/}
      <Paginator
        currentPage={currentPage}
        totalPages={totalPageCount}
        pageLimits={pageLimits}
        onPageChange={(page) => setCurrentPage(page)}
        design={buttonDesign}
        outlinedButton={outlinedButton}
      />
    </Wrapper>
  );
}

// Define the default props for the FancyPageList component
const defaultProps = {
  itemsPerPage: 20,
}