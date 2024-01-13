import { ChangeEvent, useState } from 'react';
import { styled, css } from 'styled-components';

import { FancyTextInput } from '@/components/organisms/FancyTextInput';
import { SVGSearch } from '@/components/icons/SVGSearch';
import { FancySVGAtom } from '@/components/atoms/FancySVGAtom';
import { TThemeTypes } from '@/types/TThemeTypes';

import { TLayer } from '@/types/TLayer';
import { TTheme } from '@/types/TTheme';
import { TTextAlignLC } from '@/types/TTextAlignLC';

// Props for the SearchBar component
interface ISearchBar {
  searchValue?: string;
  align?: TTextAlignLC;
  activeHandler?: (isActive: boolean) => void;
  handler?: (value: string) => void;
  themeType?: TThemeTypes;
  layer?: TLayer;
  placerholder?: string;
}
// --------------------------------------------------------------------------- //
// ---------- Seachbar like for a header to search something  ---------------- //
// --------------------------------------------------------------------------- //
export default function SearchBar(props: ISearchBar) {
  const { activeHandler, handler, searchValue, align = 'center', themeType, layer } = props;
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
        align={align}
        aria-label="Searchbar"
        onFocus={() => focusHandler(true)}
        onBlur={() => focusHandler(false)}
        onChange={onChangeValueHandler}
      />
    </StyledSearchBar>
  );
}

// ------------------------------------------- //
// ------- The style for the component ------- //
// ------------------------------------------- //
// Styled component for the search bar
const StyledSearchBar = styled.div<{ $isActive?: boolean; theme: TTheme }>`
  display: flex;
  align-items: center;
  border-radius: ${({ $isActive, theme }) =>
    $isActive
      ? `${theme.borderRadius.lg} ${theme.borderRadius.lg} 0px 0px`
      : theme.borderRadius.lg}; // Set the border radius based on whether the search bar list is active
  gap: ${({ theme }) => theme.spacing.sm};
  z-index: 1;

  input {
    padding: 0 0 4px;
  }
`;
