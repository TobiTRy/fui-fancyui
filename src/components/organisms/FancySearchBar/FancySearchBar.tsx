import React, { useState } from 'react';

import { TLayer } from '@/types/TLayer';
import { SearchBar } from '@/components/molecules/SearchBar';
import { SearchBarList } from '@/components/molecules/SearchBarList';
import { WrapperList, WrapperListInput } from './FancySearchBar.style';
import { TThemeTypesNotTransparent } from '@/types/TThemeTypesNotTransparent';
import { TComponentSizes } from '@/types/TComponentSizes';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';

// Props for the FancySearchBar component
interface IFancySearchBar {
  handlerSearchValue?: (searchValue: string) => void;
  children?: React.ReactNode;
  searchListWidth?: string;
  searchValue?: string;
  themeType?: TThemeTypesNotTransparent;
  layer?: TLayer;
  size?: TComponentSizes;
  borderRadius?: TBorderRadiusSizes;
}

// The FancySearchBar component
export default function FancySearchBar(props: IFancySearchBar) {
  const {
    handlerSearchValue,
    children,
    searchListWidth,
    searchValue,
    themeType,
    layer = 0,
    size = 'sm',
    borderRadius,
  } = props;
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
    <WrapperListInput size={size} borderRadius={borderRadius}>
      {/* The search bar where something can be searched */}
      <SearchBar size={size} activeHandler={activeHandler} searchValue={searchValue} handler={searchValueHandler} />
      {/* The search bar list */}
      {isActive && (searchValue?.length ?? 0) > 0 && (
        <WrapperList $width={searchListWidth}>
          <SearchBarList isActive={isActive} themeType={themeType} layer={layer}>
            {children}
          </SearchBarList>
        </WrapperList>
      )}
    </WrapperListInput>
  );
}
