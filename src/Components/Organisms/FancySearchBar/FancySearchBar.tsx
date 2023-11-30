import React, { useState } from 'react';
import { styled } from 'styled-components';

import SearchBar from '../../molecules/SearchBar/SearchBar';
import SearchBarList from '../../molecules/SearchBarList/SearchBarList';
import { TLayer } from '@/Components/Interface/TLayer';
import { TThemeTypes } from '@/Components/Interface/TUiColors';

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
  handlerSearchValue?: (searchValue: string) => void;
  children?: React.ReactNode;
  searchListWidth?: string;
  searchValue?: string;
  themeType?: TThemeTypes;
  layer?: TLayer;
}

// The FancySearchBar component
export default function FancySearchBar(props: IFancySearchBar) {
  const { handlerSearchValue, children, searchListWidth, searchValue, themeType, layer } = props;
  const [isActive, setIsActive] = useState(false); // State for whether the search bar list is active

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
        <SearchBar activeHandler={activeHandler} searchValue={searchValue} handler={searchValueHandler} />
        {/* The search bar list */}
        <WrapperList $width={searchListWidth}>
          <SearchBarList isActive={isActive} themeType={themeType} layer={layer}>
            {children}
          </SearchBarList>
        </WrapperList>
      </WrapperListInput>
    </StyledFancySearchBar>
  );
}
