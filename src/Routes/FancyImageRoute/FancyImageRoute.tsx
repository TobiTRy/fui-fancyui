import React from 'react';

import FancyImage from '../../Components/UI/Atoms/FancyImage/FancyImage';
import FancyImageText from '../../Components/UI/Molecules/FancyImageText/FancyImageText';
import FancyVideoText from '../../Components/UI/Molecules/FancyVideoText/FancyVideoText';
import Typography from '../../Components/UI/Atoms/Typography/Typography';

import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper';
import { css } from 'styled-components';

export default function FancyImageRoute() {
  return (
    <DesignWrapper>
      <DesignArea title='Fancy Image' style={css`flex-direction: column;`}>
        <FancyVideoText src='https://www.w3schools.com/html/mov_bbb.mp4' autoPlay={true} aspectRatio='16/9' position='top-right'>
          <Typography type='h1'>Top Right</Typography>
          <Typography type='h2'>Top Right sub an more</Typography>
        </FancyVideoText>

        <FancyImageText imageUrl='https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg' aspectRatio='1/1' alt='Fannncy'>
          <Typography type='h1'>Top Left</Typography>
          <Typography type='h2'>Top Left sub an more</Typography>
        </FancyImageText>



        {/* <FancyImage imageUrl='https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg' darken={true} alt='Fanncy'/> */}
        
      </DesignArea>
    </DesignWrapper>
  );
}
