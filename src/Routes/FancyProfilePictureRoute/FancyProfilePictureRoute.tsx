import React from 'react'

import FancyProfilePicture from '../../Components/UI/Atoms/FancyProfilePicture/FancyProfilePicture'

import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper'

export default function FancyProfilePictureRoute() {
  return (
    <DesignWrapper>
      <DesignArea title='ProfilePictures'>
        <FancyProfilePicture size='xxs' src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"/>
        <FancyProfilePicture size='xs' src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"/>
        <FancyProfilePicture size='sm' src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"/>
        <FancyProfilePicture size='md' src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"/>
        <FancyProfilePicture size='lg' src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"/>
        <FancyProfilePicture size='xl' src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"/>
        <FancyProfilePicture size='xxl' src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"/>
      </DesignArea>
      <DesignArea title='ProfilePictures Rounded'>
        <FancyProfilePicture size='sm' rounded='sm'  src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"/>
        <FancyProfilePicture size='md' rounded='md' src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"/>
        <FancyProfilePicture size='lg' rounded='lg' src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"/>
        <FancyProfilePicture size='xl' rounded='complete' src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"/>
      </DesignArea>
    </DesignWrapper>
  )
}
