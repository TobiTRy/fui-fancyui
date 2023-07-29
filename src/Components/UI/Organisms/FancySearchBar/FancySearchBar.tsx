import React, { useState } from 'react';
import styled from 'styled-components';

import SearchBar from '../../Molecules/SearchBar/SearchBar';
import SearchBarList from '../../Molecules/SearchBarList/SearchBarList';
import { FancyHR } from '../../Atoms/FancyHR';

// Styled component for the entire search bar
const StyledFancySearchBar = styled.div`
  height: 90%;
  width: 100%;
  max-height: 50px;
  position: relative;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

// Styled component for the wrapper around the search bar list
const WrapperListInput = styled.div`
  position: relative;
`;

// Styled component for the search bar list
const WrapperList = styled.div<{ $width?: string }>`
  position: absolute;
  top: calc(100% + 4px);

  width: ${({ $width }) => $width || '100%'}; // Set the width of the search bar list
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
`;

// Props for the FancySearchBar component
interface IFancySearchBar {
  handlerSearchValue?: (searchValue: string) => void; // Function to handle search value changes
  items?: React.ReactNode; // List of items to display in the search bar list
  searchListWidth?: string; // Width of the search bar list
}

// The FancySearchBar component
export default function FancySearchBar(props: IFancySearchBar) {
  const { handlerSearchValue, items, searchListWidth } = props;
  const [isActive, setIsActive] = useState(true); // State for whether the search bar list is active

  // Function to handle changes to the isActive state
  const activeHandler = (isActive: boolean) => {
    setIsActive(isActive);
  };

  // Function to handle changes to the search value
  const searchValueHandler = (searchValue: string) => {
    handlerSearchValue && handlerSearchValue(searchValue);
  };

  return (
    <StyledFancySearchBar>
      <WrapperListInput>
        {/* The search bar where something can be searched */}
        <SearchBar activeHandler={activeHandler} isActive={isActive} handler={searchValueHandler} />
        {/* The search bar list */}
        <WrapperList $width={searchListWidth}>
          <SearchBarList isActive={isActive}>{items}</SearchBarList>
        </WrapperList>
      </WrapperListInput>
    </StyledFancySearchBar>
  );
}