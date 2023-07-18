import React from 'react'

import FancyHueSlider from '../../Components/UI/Molecules/FancyHueSlider/FancyHueSlider';
import ScrollableBar from '../../Components/UI/Atoms/ScrollableBar/ScrollableBar';
import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper';

export default function ExperimentalRoute() {
  return (
    <DesignWrapper>
      <DesignArea title='Experimental'>
        <ScrollableBar />
        <FancyHueSlider />
      </DesignArea>
    </DesignWrapper>
  )
}
