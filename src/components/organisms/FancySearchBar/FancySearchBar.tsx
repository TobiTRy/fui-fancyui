import { useState } from 'react';

import { SearchBar } from '@/components/molecules/SearchBar';
import { TFancySearchBar } from '@/components/organisms/FancySearchBar/TFancySearchBar.model';
import { WrapperList, WrapperListInput } from './FancySearchBar.style';

// The FancySearchBar component
export default function FancySearchBar(props: TFancySearchBar) {
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
    <WrapperListInput $size={size} $borderRadius={borderRadius} $themeType={themeType} $layer={layer}>
      {/* The search bar where something can be searched */}
      <SearchBar size={size} activeHandler={activeHandler} searchValue={searchValue} handler={searchValueHandler} />
      {/* The search bar list */}
      {isActive && (searchValue?.length ?? 0) > 0 && <WrapperList $width={searchListWidth}>{children}</WrapperList>}
    </WrapperListInput>
  );
}
