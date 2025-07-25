'use client';

import React, { useState } from 'react';

import { Paginator } from '@/components/molecules/Paginator';
import { Wrapper, StyledList } from './FancyPageList.style';
import { TFancyPageList } from '@/components/molecules/FancyPageList/TFancyPageList.model';

// --------------------------------------------------------------------------- //
// ------- This Component renders a Paginator with the specific list --------- //
// --------------------------------------------------------------------------- //
export default function FancyPageList(props: TFancyPageList) {
  const { itemsPerPage = 20, elements, spacingBetweenItems, buttonDesign, outlinedButton, showPages = 3 } = props;

  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages and the current items to display
  const totalPageCount = Math.ceil(elements?.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = elements?.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Wrapper>
      {/* The List with the items to display */}
      <StyledList $spacing={spacingBetweenItems}>
        {currentItems?.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}
      </StyledList>
      {/* The Paginator for the Page switches*/}
      <Paginator
        currentPage={currentPage}
        showPages={showPages}
        pageLimits={totalPageCount}
        onPageChange={(page) => setCurrentPage(page)}
        themeType={buttonDesign}
        outlinedButton={outlinedButton}
      />
    </Wrapper>
  );
}
