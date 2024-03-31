import { useEffect, useRef, useState } from 'react';

import { SearchBar } from '@/components/molecules/SearchBar';
import { TFancySearchBarWithHTMLProps } from '@/components/organisms/FancySearchBar/TFancySearchBar.model';
import { Background, WrapperList, WrapperListInput } from './FancySearchBar.style';

// The FancySearchBar component
export default function FancySearchBar(props: TFancySearchBarWithHTMLProps) {
  const {
    children,
    searchListWidth,
    value,
    openListWhenFocused,
    themeType = 'primary',
    layer = 0,
    sizeC = 'md',
    borderRadius,
    externalStyle,
    className,
    ...htmlInputProps
  } = props;
  const [isActive, setIsActive] = useState(false);

  // is needed to give the Wrapper a height with the child is position absolute
  const [height, setHeight] = useState(0);
  const inputWraperRef = useRef<HTMLDivElement>(null);

  // Function to handle changes to the isActive state
  const activeHandler = (isActive: boolean) => {
    setIsActive(isActive);
  };

  // Set the height of the wrapper
  useEffect(() => {
    if (inputWraperRef.current) {
      setHeight(inputWraperRef.current.offsetHeight);
    }
  }, []);

  return (
    <WrapperListInput style={{ minHeight: `${height}px` }} className={className} $externalStyle={externalStyle}>
      {/* The background of the search bar and list to scale the background */}
      <Background $sizeC={sizeC} $borderRadius={borderRadius} $themeType={themeType} $layer={layer}>
        {/* The search bar where something can be searched */}
        <div ref={inputWraperRef}>
          <SearchBar
            themeType={themeType}
            layer={layer}
            sizeC={sizeC}
            activeHandler={activeHandler}
            searchValue={value}
            {...htmlInputProps}
          />
        </div>
        {/* The search bar list */}
        {isActive && (openListWhenFocused || (value?.length ?? 0) > 0) && (
          <WrapperList
            $sizeC={sizeC}
            $themeType={themeType}
            $layer={layer}
            $borderRadius={borderRadius}
            $width={searchListWidth}
          >
            {children}
          </WrapperList>
        )}
      </Background>
    </WrapperListInput>
  );
}
