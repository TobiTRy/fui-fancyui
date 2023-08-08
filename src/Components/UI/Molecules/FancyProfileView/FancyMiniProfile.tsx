import React from 'react'
import styled from 'styled-components'

import { borderRadius, spacingPx, uiColors } from '../../Design/design'

import FancyProfilePicture, { IFancyProfilePicture } from '../../Atoms/FancyProfilePicture/FancyProfilePicture'
import Typography from '../../Atoms/Typography/Typography'

const Wrapper = styled.div`
  display: flex;
  padding: ${spacingPx.sm};
  gap: ${spacingPx.sm};
  background-color: ${uiColors.primary.light};
  border-radius: ${borderRadius.complete};
`
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default function FancyMiniProfile() {
  return (
    <Wrapper>
      <FancyProfilePicture rounded='complete' size='xs' src='https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg' />
      <TextWrapper>
        <Typography type='inlineElement'>Max Mustermann</Typography>
        <Typography type='inlineElement' variant='smallText'>Max Mustermann</Typography>
      </TextWrapper>
    </Wrapper>
  )
}
