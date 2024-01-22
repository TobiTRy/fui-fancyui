import { ChangeEvent, useState } from 'react';

import { SVGSearch } from '@/components/icons/SVGSearch';
import { FancyTextInput } from '@/components/organisms/FancyTextInput';

import { InputWrapper, SizeWrapper, StyledSearchBar } from '@/components/molecules/SearchBar/SearchBar.style';
import { TSearchBar } from '@/components/molecules/SearchBar/TSeachbar.model';
import { IconWrapper } from './SearchBar.style';

// --------------------------------------------------------------------------- //
// ---------- Seachbar like for a header to search something  ---------------- //
// --------------------------------------------------------------------------- //
export default function SearchBar(props: TSearchBar) {
  const { activeHandler, handler, searchValue, align = 'center', themeType, layer = 0, size = 'sm' } = props;
  const [isActive, setIsActive] = useState(false); // The state for the isActive state of the search bar

  // Function to handle changes to the isActive state
  const focusHandler = (isFocused: boolean) => {
    activeHandler && activeHandler(isFocused);
    setIsActive(isFocused);
  };

  // Function to handle changes to the search value
  const onChangeValueHandler = (e?: ChangeEvent<HTMLInputElement>) => {
    handler && handler(e!.target.value);
  };

  return (
    <SizeWrapper>
      <StyledSearchBar $size={size} $isActive={isActive}>
        {/* The search icon */}
        <InputWrapper $size={size}>
          <FancyTextInput
            layer={layer}
            themeType={themeType}
            icon={<IconWrapper $size={size}>{SVGSearch}</IconWrapper>}
            transparentBackground
            value={searchValue}
            placeholder="Search"
            align={align}
            aria-label="Searchbar"
            onFocus={() => focusHandler(true)}
            onBlur={() => focusHandler(false)}
            onChange={onChangeValueHandler}
          />
        </InputWrapper>
      </StyledSearchBar>
    </SizeWrapper>
  );
}
