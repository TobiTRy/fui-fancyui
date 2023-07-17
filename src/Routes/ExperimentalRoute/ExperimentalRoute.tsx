import React from 'react'

import FancyHueSlider from '../../Components/UI/Molecules/FancyHueSlider/FancyHueSlider';

import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper';

export default function ExperimentalRoute() {
  return (
    <DesignWrapper>
      <DesignArea title='Experimental'>
        <FancyHueSlider />
      </DesignArea>
    </DesignWrapper>
  )
}
