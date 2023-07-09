import React, { ChangeEvent } from 'react';
import RawInput from '../../Atoms/RawInput';
import styled, { css } from 'styled-components';

import { spacingPx, uiColors, borderRadius } from '../../Design/design';
import SVGSearch from '../../SVGIcons/SVGSearch';
import SVGAtom from '../../Atoms/SVGAtom/SVGAtom';

const StyledSearchBar = styled.div<{$isActive?: boolean}>`
  display: flex;
  align-items: center;
  background-color: ${uiColors.primary.lighter};
  padding: ${spacingPx.md} ${spacingPx.xl} ${spacingPx.md};
  border-radius: ${({ $isActive }) => ($isActive ? `${borderRadius.extraLarge} ${borderRadius.extraLarge} 0px 0px` : borderRadius.extraLarge)};
  gap: ${spacingPx.sm};
  z-index: 1;
  
  input {
    padding: 0;
  }
`;

interface ISearchBar {
  isActive?: boolean;
  activeHandler?: (isActive: boolean) => void;
  searchValueHandler?: (value: string) => void;
}
export default function SearchBar(props: ISearchBar) {
  const { activeHandler, searchValueHandler, isActive } = props;
  
  const focusHandler = (isFocused: boolean) => {
    activeHandler && activeHandler(isFocused);
  };
  
  const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    searchValueHandler && searchValueHandler(e.target.value);
  };

  return (
    <StyledSearchBar $isActive={isActive}>
      <SVGAtom
        externalStyle={
        css`
          color: ${uiColors.secondary.main};
        `}
      >
        {SVGSearch}
      </SVGAtom>
      <RawInput type="text" onFocus={() => focusHandler(true)} onBlur={() => focusHandler(false)} onChange={onChangeValueHandler}/>
    </StyledSearchBar>
  );
}
