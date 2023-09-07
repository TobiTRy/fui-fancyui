import React, { ChangeEvent } from 'react';
import { styled, css } from 'styled-components';
import FancyTextInput from '../../Organisms/FancyTextInput/FancyTextInput';

import { spacingPx, uiColors, borderRadius } from '../../Design/design';
import SVGSearch from '../../SVGIcons/SVGSearch';
import FancySVGAtom from '../../Atoms/FancySVGAtom/FancySVGAtom';
import { TRawInputAlign } from '../../Atoms/RawInput/RawInput';

// Styled component for the search bar
const StyledSearchBar = styled.div<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  border-radius: ${({ $isActive }) =>
    $isActive
      ? `${borderRadius.lg} ${borderRadius.lg} 0px 0px`
      : borderRadius.lg}; // Set the border radius based on whether the search bar list is active
  gap: ${spacingPx.sm};
  z-index: 1;

  input {
    padding: 0 0 4px;
  }
`;

// Props for the SearchBar component
interface ISearchBar {
  searchValue?: string; 
  isActive?: boolean; 
  align?: TRawInputAlign;
  activeHandler?: (isActive: boolean) => void;
  handler?: (value: string) => void;
}
// The SearchBar component
export default function SearchBar(props: ISearchBar) {
  const { activeHandler, handler, isActive, searchValue, align } = {...defaultProps, ...props};

  // Function to handle changes to the isActive state
  const focusHandler = (isFocused: boolean) => {
    activeHandler && activeHandler(isFocused);
  };

  // Function to handle changes to the search value
  const onChangeValueHandler = (e?: ChangeEvent<HTMLInputElement>) => {
    handler && handler(e!.target.value);
  };

  return (
    <StyledSearchBar $isActive={isActive}>
      {/* The search icon */}
      <FancySVGAtom
        externalStyle={css`
          color: ${uiColors.secondary[0]};
        `}
      >
        {SVGSearch}
      </FancySVGAtom>
      {/* The search input */}
      <FancyTextInput
        value={searchValue}
        placeholder="Search"
        align={align as TRawInputAlign}
        aria-label="Searchbar"
        activeHandler={focusHandler}
        onChange={onChangeValueHandler}
      />
    </StyledSearchBar>
  );
}

const defaultProps = {
  align: 'center',
}
