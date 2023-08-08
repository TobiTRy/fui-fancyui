import React from 'react';
import styled from 'styled-components';
import FancyCard from '../../Atoms/FancyCard/FancyCard';

import LoadingSpinner from '../../Atoms/FancyLoadingSpinner/FancyLoadingSpinner';

import { borderRadius, spacingPx } from '../../Design/design';

// Styled component for the search bar list
const StyledSearchBarList = styled.div`
  border-radius: ${borderRadius.extraLarge};
  z-index: 100;
`;



// Styled component for the inner card of the search bar list
const InnerCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`;

// Props for the SearchBarList component
interface ISearchBarList {
  isActive?: boolean; // Whether the search bar list is active
  children?: React.ReactNode; // List of items to display in the search bar list
  alignTop?: string;
}

// The SearchBarList component
export default function SearchBarList(props: ISearchBarList) {
  const { isActive, children } = props;

  return (
    <StyledSearchBarList>
      {/* If the search bar list is active, display the list */}
      {isActive && (
        <FancyCard backgroundColor="lightest" radius="xxl">
          <InnerCard>
            {/* If there are items to display, display them */}
            {children && <div>{children}</div>}
          </InnerCard>
        </FancyCard>
      )}
    </StyledSearchBarList>
  );
}