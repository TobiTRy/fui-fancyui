/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import FancyImage from '../../components/atoms/FancyImage/FancyImage';
import FancyVideoText from '../../components/molecules/FancyVideoText/FancyVideoText';
import Typography from '../../components/atoms/Typography/Typography';

import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper';
import { css } from 'styled-components';
import FancyImageWrapper from '../../components/atoms/FancyImage/FancyImage';

export default function FancyImageRoute() {
  return (
    <DesignWrapper>
      <DesignArea
        title="Fancy Image"
        style={css`
          flex-direction: column;
        `}
      >
        <FancyImageWrapper borderRadius="complete" darken aspectRatio="1/1" sizeW="100px">
          <img src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg" />
        </FancyImageWrapper>
        <FancyVideoText
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          autoPlay={true}
          aspectRatio="16/9"
          position="top-right"
        >
          <Typography type="h1">Top Right</Typography>
          <Typography type="h2">Top Right sub an more</Typography>
        </FancyVideoText>

        {/* <FancyImage imageUrl='https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg' darken={true} alt='Fanncy'/> */}
      </DesignArea>
    </DesignWrapper>
  );
}
