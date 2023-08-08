import React, { ChangeEvent } from 'react';
import styled, { css } from 'styled-components';
import FancyTextInput from '../../Organisms/FancyTextInput/FancyTextInput';

import { spacingPx, uiColors, borderRadius } from '../../Design/design';
import SVGSearch from '../../SVGIcons/SVGSearch';
import FancySVGAtom from '../../Atoms/FancySVGAtom/FancySVGAtom';

// Styled component for the search bar
const StyledSearchBar = styled.div<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  border-radius: ${({ $isActive }) => ($isActive ? `${borderRadius.large} ${borderRadius.large} 0px 0px` : borderRadius.large)}; // Set the border radius based on whether the search bar list is active
  gap: ${spacingPx.sm};
  z-index: 1;

  input {
    padding: 0 0 4px;
  }
`;

// Props for the SearchBar component
interface ISearchBar {
  searchValue?: string; // The search value
  isActive?: boolean; // Whether the search bar list is active
  activeHandler?: (isActive: boolean) => void; // Function to handle changes to the isActive state
  handler?: (value: string) => void; // Function to handle changes to the search value
}

// The SearchBar component
export default function SearchBar(props: ISearchBar) {
  const { activeHandler, handler, isActive, searchValue } = props;

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
          color: ${uiColors.secondary.main};
        `}
      >
        {SVGSearch}
      </FancySVGAtom>
      {/* The search input */}
      <FancyTextInput value={searchValue} ariaLabel="Searchbar" activeHandler={focusHandler} handler={(value, e) => onChangeValueHandler(e)} />
    </StyledSearchBar>
  );
}