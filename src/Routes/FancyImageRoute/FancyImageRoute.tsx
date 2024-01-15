/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import FancyImage from '../../components/atoms/FancyImage/FancyImage';
import Typography from '../../components/atoms/Typography/Typography';

import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper';
import { css } from 'styled-components';
import FancyImageWrapper from '../../components/atoms/FancyImage/FancyImage';
import { ImageVideoOverlay } from '@/components/atoms/ImageVideoOverlay';

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
        <ImageVideoOverlay
          position="center"
          textChildren={
            <>
              <Typography variant="h1" weight="bold">
                Hello
              </Typography>
              <Typography variant="h2">Hello</Typography>
            </>
          }
        >
          <FancyImageWrapper darken aspectRatio="16/9" sizeW="500px">
            <img src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg" />
          </FancyImageWrapper>
        </ImageVideoOverlay>

        {/* <FancyImage imageUrl='https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg' darken={true} alt='Fanncy'/> */}
      </DesignArea>
    </DesignWrapper>
  );
}
