import { useEffect, useRef, useState } from 'react';

import { SearchBar } from '@/components/molecules/SearchBar';
import { TFancySearchBar } from '@/components/organisms/FancySearchBar/TFancySearchBar.model';
import { Background, WrapperList, WrapperListInput } from './FancySearchBar.style';

// The FancySearchBar component
export default function FancySearchBar(props: TFancySearchBar) {
  const {
    handlerSearchValue,
    children,
    searchListWidth,
    searchValue,
    themeType,
    layer = 0,
    sizeC = 'sm',
    borderRadius,
  } = props;
  const [isActive, setIsActive] = useState(false);

  // is needed to give the Wrapper a height with the child is position absolute
  const [height, setHeight] = useState(0);
  const inputWraperRef = useRef<HTMLDivElement>(null);

  // Function to handle changes to the isActive state
  const activeHandler = (isActive: boolean) => {
    setIsActive(isActive);
  };

  // Function to handle changes to the search value
  const searchValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;

    handlerSearchValue && handlerSearchValue(searchValue);
  };

  // Set the height of the wrapper
  useEffect(() => {
    if (inputWraperRef.current) {
      setHeight(inputWraperRef.current.offsetHeight);
    }
  }, []);

  return (
    <WrapperListInput style={{ minHeight: `${height}px` }}>
      {/* The background of the search bar and list to scale the background */}
      <Background $sizeC={sizeC} $borderRadius={borderRadius} $themeType={themeType} $layer={layer}>
        {/* The search bar where something can be searched */}
        <div ref={inputWraperRef}>
          <SearchBar
            sizeC={sizeC}
            activeHandler={activeHandler}
            searchValue={searchValue}
            onChange={searchValueHandler}
          />
        </div>
        {/* The search bar list */}
        {isActive && (searchValue?.length ?? 0) > 0 && (
          <WrapperList $sizeC={sizeC} $borderRadius={borderRadius} $width={searchListWidth}>
            {children}
          </WrapperList>
        )}
      </Background>
    </WrapperListInput>
  );
}
