import React, { ChangeEvent, useState } from 'react';
import { styled, css } from 'styled-components';
import FancyTextInput from '../../Organisms/FancyTextInput/FancyTextInput';

import SVGSearch from '../../SVGIcons/SVGSearch';
import FancySVGAtom from '../../Atoms/FancySVGAtom/FancySVGAtom';
import { TRawInputAlign } from '../../Atoms/RawInput/RawInput';
import { TUiColors } from '@/Components/UI/Interface/TUiColors';
import { TLayer } from '../../Design/color/generateColorSteps';
import { TTheme } from '@/Components/UI/Design/color/themeStore';

// Styled component for the search bar
const StyledSearchBar = styled.div<{ $isActive?: boolean, theme: TTheme }>`
  display: flex;
  align-items: center;
  border-radius: ${({ $isActive, theme }) =>
    $isActive
      ? `${theme.borderRadius.lg} ${theme.borderRadius.lg} 0px 0px`
      : theme.borderRadius.lg}; // Set the border radius based on whether the search bar list is active
  gap: ${({theme}) => theme.spacing.sm};
  z-index: 1;

  input {
    padding: 0 0 4px;
  }
`;

// Props for the SearchBar component
interface ISearchBar {
  searchValue?: string;
  align?: TRawInputAlign;
  activeHandler?: (isActive: boolean) => void;
  handler?: (value: string) => void;
  themeType?: TUiColors;
  layer?: TLayer;
  placerholder?: string;
}
// The SearchBar component
export default function SearchBar(props: ISearchBar) {
  const { activeHandler, handler, searchValue, align, themeType, layer } = { ...defaultProps, ...props };
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
    <StyledSearchBar $isActive={isActive}>
      {/* The search icon */}
      <FancySVGAtom
        themeType={themeType}
        layer={layer}
        isActive={isActive}
        externalStyle={css`
          transition: 0.5s;
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
};
