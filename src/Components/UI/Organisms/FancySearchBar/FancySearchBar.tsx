import React, { useState } from 'react'
import styled from 'styled-components'

import SearchBar from '../../Molecules/SearchBar/SearchBar'
import SearchBarList from '../../Molecules/SearchBarList/SearchBarList'

const StyledFancySearchBar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`



export default function FancySearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const [isActive, setIsActive] = useState(false);

  const activeHandler = (isActive: boolean) => { 
    setIsActive(isActive);
  }

  const searchValueHandler = (searchValue: string) => {
    setSearchValue(searchValue);
  }

  return (
    <StyledFancySearchBar>
      <SearchBar activeHandler={activeHandler}  isActive={isActive} />
      <SearchBarList isActive={isActive}/>
    </StyledFancySearchBar>
  )
}
