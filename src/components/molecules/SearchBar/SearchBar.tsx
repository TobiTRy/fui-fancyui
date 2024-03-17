import { useState } from 'react';

import { SVGSearch } from '@/components/icons/SVGSearch';
import { FancyTextInput } from '@/components/organisms/FancyTextInput';

import { InputWrapper, SizeWrapper, StyledSearchBar } from '@/components/molecules/SearchBar/SearchBar.style';
import { TSearchBarWithFancyInputAttrs } from '@/components/molecules/SearchBar/TSearchbar.model';
import { IconWrapper } from './SearchBar.style';

// --------------------------------------------------------------------------- //
// ---------- Seachbar like for a header to search something  ---------------- //
// --------------------------------------------------------------------------- //
export default function SearchBar(props: TSearchBarWithFancyInputAttrs) {
  const {
    activeHandler,
    searchValue,
    align = 'center',
    themeType = 'primary',
    layer = 0,
    sizeC = 'sm',
    ...htmlProps
  } = props;
  const [isActive, setIsActive] = useState(false); // The state for the isActive state of the search bar

  // Function to handle changes to the isActive state
  const focusHandler = (isFocused: boolean) => {
    activeHandler && activeHandler(isFocused);
    setIsActive(isFocused);
  };

  return (
    <SizeWrapper {...htmlProps}>
      <StyledSearchBar $sizeC={sizeC} $isActive={isActive}>
        {/* The search icon */}
        <InputWrapper $sizeC={sizeC}>
          <FancyTextInput
            layer={layer}
            themeType={themeType}
            icon={<IconWrapper $sizeC={sizeC}>{SVGSearch}</IconWrapper>}
            transparentBackground
            value={searchValue}
            align={align}
            aria-label="Searchbar"
            onFocus={(e) => {
              focusHandler(true);
              props.onFocus && props.onFocus(e);
            }}
            onBlur={(e) => {
              focusHandler(false);
              props.onBlur && props.onBlur(e);
            }}
            {...htmlProps}
          />
        </InputWrapper>
      </StyledSearchBar>
    </SizeWrapper>
  );
}
