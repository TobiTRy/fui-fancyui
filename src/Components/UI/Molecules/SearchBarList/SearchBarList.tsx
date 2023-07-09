import React from 'react';
import styled from 'styled-components';

import FancyHR from '../../Atoms/FancyHR';

import LoadingSpinner from '../../Atoms/LoadingSpinner';

import { borderRadius, uiColors, spacingPx } from '../../Design/design';

const StyledSearchBarList = styled.div`
  background-color: ${uiColors.primary.lighter};
  border-radius: 0 0 ${borderRadius.extraLarge} ${borderRadius.extraLarge};
`;

const WrapperList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px ${spacingPx.xl} ${spacingPx.md};
`

const SearchBarContent = styled.div`
  padding: ${spacingPx.md} 0;
` 

interface ISearchBarList {
  isActive?: boolean;
}
export default function SearchBarList(props: ISearchBarList) {
  const { isActive } = props;

  return (
    <StyledSearchBarList>
      {isActive && (
        <WrapperList>
          <FancyHR $design='secondary' />
          <SearchBarContent>SearchBarList</SearchBarContent>
          <LoadingSpinner />
        </WrapperList>
      )}
    </StyledSearchBarList>
  );
}
