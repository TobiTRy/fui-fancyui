import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';
import { spacing, spacingPx } from '../../Design/design';

import SVGChevronLeft from '../../SVGIcons/SVGChevronLeft';
import SVGChevronRight from '../../SVGIcons/SVGChevronRight';

import FancyButton from '../../Molecules/FancyButton/FancyButton';
import { uiColors } from '../../Design/design';

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

const ButtonWrapper = styled.div<{ $isActive: boolean }>`
  button {
    color: ${(props) => props.$isActive && uiColors.accent.light};

    transition: color 0.1s ease-in-out;
    &:hover {
      color: ${(props) => props.$isActive && uiColors.accent.light};
    }
  }
`;

const IconWrapper = styled.div<{ $align: 'left' | 'right' }>`
  display: flex;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  ${({ $align }) =>
    $align === 'right'
      ? css`
          margin-left: ${spacing.xs + 0.5 + 'px'};
        `
      : css`
          margin-right: ${spacing.xs + 0.5 + 'px'};
        `}
`;

interface ICreatePageList {
  totalPages: number;
  currentPage: number;
  onClick: (page: number) => void;
}
const createPageList = (props: ICreatePageList) => {
  const { totalPages, currentPage, onClick } = props;

  return (
    <>
      {Array.from({ length: totalPages }).map((_, index) => (
        <ButtonWrapper $isActive={index + 1 === currentPage} key={index}>
          <FancyButton
            key={index}
            label={`${index + 1}`}
            onClick={() => onClick(index + 1)}
            size="medium"
            design="transparent"
            wide={false}
          />
        </ButtonWrapper>
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

  const pageHandler = (page: number) => {
    onPageChange(page);
  };
  const PageList = useMemo(
    () => createPageList({ totalPages, currentPage, onClick: pageHandler }),
    [totalPages, currentPage, onPageChange]
  );

  return (
    <StyledPaginator>
      <FancyButton
        design="accent"
        size="medium"
        outlined
        wide={false}
        icon={
          <IconWrapper $align="left">
            {SVGChevronLeft}
          </IconWrapper>}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />
      <NumberList>{PageList}</NumberList>
      <FancyButton
        wide={false}
        design="accent"
        outlined
        icon={<IconWrapper $align="right">{SVGChevronRight}</IconWrapper>}
        size="medium"
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
