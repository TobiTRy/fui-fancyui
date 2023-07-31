import React from 'react';

import FancyImage from '../../Components/UI/Atoms/FancyImage/FancyImage';

import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper';

export default function FancyImageRoute() {
  return (
    <DesignWrapper>
      <DesignArea title='Fancy Image'>
        <FancyImage aspectRatio='1:1' imageUrl='https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg' darken={true}/>
      </DesignArea>
    </DesignWrapper>
  );
}
