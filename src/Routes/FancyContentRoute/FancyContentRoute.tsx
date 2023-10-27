import React from 'react'

import FancyContent from '../../Components/UI/Molecules/FancyContent/FancyContent'

import SVGCheckMark from '../../Components/UI/SVGIcons/SVGCheckMark'
import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper'

export default function FancyContentRoute() {
  return (
    <DesignWrapper>
      <DesignArea title='FancyContent'>
        <FancyContent icon={<SVGCheckMark/>} text='Hiii' flexDirection='column'></FancyContent>

      </DesignArea>
    </DesignWrapper>
  )
}
