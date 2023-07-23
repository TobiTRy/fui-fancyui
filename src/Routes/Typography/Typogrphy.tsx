import React from 'react'
import Typography from '../../Components/UI/Atoms/Typography'

import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper'

export default function Typogrphy() {
  return (
    <DesignWrapper>
      <DesignArea title='Typography'>
        <Typography type='h1'>h1. Heading</Typography>
      </DesignArea>
    </DesignWrapper>
  )
}
