import { ChangeEvent, useState } from 'react';
import { styled, css } from 'styled-components';

import { FancyTextInput } from '@/components/organisms/FancyTextInput';
import { SVGSearch } from '@/components/icons/SVGSearch';
import { FancySVGAtom } from '@/components/atoms/FancySVGAtom';

import { TLayer } from '@/types/TLayer';
import { TTheme } from '@/types/TTheme';
import { TTextAlignLC } from '@/types/TTextAlignLC';
import { TThemeTypesNotTransparent } from 'lib';

// Props for the SearchBar component
interface ISearchBar {
  searchValue?: string;
  align?: TTextAlignLC;
  activeHandler?: (isActive: boolean) => void;
  handler?: (value: string) => void;
  themeType?: TThemeTypesNotTransparent;
  layer?: TLayer;
  placerholder?: string;
}
// --------------------------------------------------------------------------- //
// ---------- Seachbar like for a header to search something  ---------------- //
// --------------------------------------------------------------------------- //
export default function SearchBar(props: ISearchBar) {
  const { activeHandler, handler, searchValue, align = 'center', themeType, layer } = props;
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
      <StyledSearchBar $isActive={isActive}>
        {/* The search icon */}
        <FancySVGAtom
          themeType={themeType}
          layer={layer}
          isActive={isActive}
          externalStyle={css`
            flex-shrink: 0;
            transition: 0.5s;
          `}
        >
          {SVGSearch}
        </FancySVGAtom>
        {/* The search input */}
        <FancyTextInput
          transparentBackground
          value={searchValue}
          placeholder="Search"
          align={align}
          aria-label="Searchbar"
          onFocus={() => focusHandler(true)}
          onBlur={() => focusHandler(false)}
          onChange={onChangeValueHandler}
        />
      </StyledSearchBar>
    </SizeWrapper>
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
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.primary[0]};
  padding: 0 12px;
  input {
    padding: 0 0 4px;
  }
`;

const SizeWrapper = styled.div`
  width: auto;
`;
