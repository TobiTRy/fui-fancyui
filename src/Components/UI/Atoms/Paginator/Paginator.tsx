import React, { useMemo } from 'react';
import styled from 'styled-components';

import SVGChevronLeft from '../../SVGIcons/SVGChevronLeft';
import SVGChevronRight from '../../SVGIcons/SVGChevronRight';

import FancyButton from '../../Molecules/FancyButton/FancyButton';
import { uiColors } from '../../Design/design';
import { Typography } from '../Typography';

const NumberButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${uiColors.secondary.main};
  &:hover {
    color: ${uiColors.secondary.light};
  }
`;

const StyledPaginator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const NumberList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const createPageList = (totalPages: number, currentPage: number) => {
  console.log('createPageList', totalPages, currentPage);
  return (
    <>
      {Array.from({ length: totalPages }).map((_, index) => (
        <NumberButton key={index}>
          <Typography type="button">{`${index + 1}`}</Typography>
        </NumberButton>
      ))}
    </>
  );
};

interface IPaginator {
  currentPage?: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
export default function Paginator(props: IPaginator) {
  const { currentPage, totalPages, onPageChange } = { ...defaultProps, ...props };

  const PageList = useMemo(() => createPageList(totalPages, currentPage), [totalPages, currentPage, onPageChange]);

  return (
    <StyledPaginator>
      <FancyButton design="transparent" wide={false} icon={SVGChevronLeft} onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} />
      <NumberList>{PageList}</NumberList>
      <FancyButton
        wide={false}
        design="transparent"
        icon={SVGChevronRight}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    </StyledPaginator>
  );
}

const defaultProps = {
  currentPage: 1 as number,
  totalPages: 1,
};
