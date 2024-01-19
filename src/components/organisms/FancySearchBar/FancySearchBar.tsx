import React, { useState } from 'react';

import { TLayer } from '@/types/TLayer';
import { SearchBar } from '@/components/molecules/SearchBar';
import { SearchBarList } from '@/components/molecules/SearchBarList';
import { StyledFancySearchBar, WrapperList, WrapperListInput } from './FancySearchBar.style';
import { TThemeTypesNotTransparent } from '@/types/TThemeTypesNotTransparent';

// Props for the FancySearchBar component
interface IFancySearchBar {
  handlerSearchValue?: (searchValue: string) => void;
  children?: React.ReactNode;
  searchListWidth?: string;
  searchValue?: string;
  themeType?: TThemeTypesNotTransparent;
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
