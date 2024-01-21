import { ChangeEvent, useState } from 'react';
import { css } from 'styled-components';

import { FancySVGAtom } from '@/components/atoms/FancySVGAtom';
import { SVGSearch } from '@/components/icons/SVGSearch';
import { FancyTextInput } from '@/components/organisms/FancyTextInput';

import { InputWrapper, SizeWrapper, StyledSearchBar } from '@/components/molecules/SearchBar/SearchBar.style';
import { TSearchBar } from '@/components/molecules/SearchBar/TSeachbar.model';
import { RawInput } from '@/components/atoms/RawInput';
import { TextInput } from '@/components/atoms/TextInput';
import { InputUnderline } from '@/components/atoms/InputUnderline';

// --------------------------------------------------------------------------- //
// ---------- Seachbar like for a header to search something  ---------------- //
// --------------------------------------------------------------------------- //
export default function SearchBar(props: TSearchBar) {
  const { activeHandler, handler, searchValue, align = 'center', themeType, layer = 0, size = 'sm' } = props;
  const [isActive, setIsActive] = useState(false); // The state for the isActive state of the search bar
  const [isOpen, setIsOpen] = useState(false); // The state for the isOpen state of the search bar

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
      <StyledSearchBar size={size} $isActive={isActive}>
        {/* The search icon */}
        <InputWrapper>
          <FancyTextInput
            icon={<span>{SVGSearch}</span>}
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
