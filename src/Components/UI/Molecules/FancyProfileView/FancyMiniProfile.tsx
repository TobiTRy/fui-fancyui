import React from 'react'
import styled from 'styled-components'

import FancyProfilePicture, { IFancyProfilePicture } from '../../Atoms/FancyProfilePicture/FancyProfilePicture'

const Wrapper = styled.div`
  display: flex;
  flex-shrink: 0;

`

export default function FancyMiniProfile() {
  return (
    <Wrapper>
      <FancyProfilePicture size='xs' src='https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg' />
      <div>
        <h3>Max Mustermann</h3>
      </div>
    </Wrapper>
  )
}
