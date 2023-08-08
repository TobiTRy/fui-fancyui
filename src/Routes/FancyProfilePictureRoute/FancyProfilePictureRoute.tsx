import React from 'react'

import FancyProfilePicture from '../../Components/UI/Atoms/FancyProfilePicture/FancyProfilePicture'

import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper'

export default function FancyProfilePictureRoute() {
  return (
    <DesignWrapper>
      <DesignArea title='ProfilePictures'>
        <FancyProfilePicture src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"/>
      </DesignArea>
    </DesignWrapper>
  )
}
