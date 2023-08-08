import React from 'react'

import FancyMiniProfile from '../../Components/UI/Molecules/FancyProfileView/FancyMiniProfile'

import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper'

export default function MiniProfileroute() {
  return (
    <DesignWrapper>
      <DesignArea title='MiniProfile'>
        <FancyMiniProfile  />
      </DesignArea>
    </DesignWrapper>
  )
}
