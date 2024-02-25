/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import FancyImage from '../../components/atoms/FancyImageWrapper/FancyImageWrapper';
import Typography from '../../components/atoms/Typography/Typography';

import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper';
import { css } from 'styled-components';
import FancyImageWrapper from '../../components/atoms/FancyImageWrapper/FancyImageWrapper';
import { FancyTextOverlay } from '@/components/atoms/FancyTextOverlay';
import { FancyVideo } from '@/components/atoms/FancyVideo';

export default function FancyImageRoute() {
  return (
    <DesignWrapper>
      <DesignArea
        title="Fancy Image"
        style={css`
          flex-direction: column;
        `}
      >
        <FancyImageWrapper borderRadius="complete" aspectRatio="1/1" sizeW="100px">
          <img src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg" />
        </FancyImageWrapper>

        <FancyTextOverlay
          position="center"
          textChildren={
            <>
              <Typography variant="sectionSubtitle">Hello</Typography>
              <Typography variant="sectionSubsectionTitle">Hello</Typography>
            </>
          }
        >
          <FancyImageWrapper sizeW="800px" filter={{ brightness: 0.5 }} aspectRatio="16/9">
            <img src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg" />
          </FancyImageWrapper>
        </FancyTextOverlay>

        <FancyTextOverlay
          position="center"
          textChildren={
            <>
              <Typography variant="sectionTitle">Hello</Typography>
              <Typography variant="sectionSubtitle">Hello</Typography>
            </>
          }
        >
          <FancyVideo>
            <FancyVideo.Source width={'1920px'} src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          </FancyVideo>
        </FancyTextOverlay>

        {/* <FancyImage imageUrl='https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg' darken={true} alt='Fanncy'/> */}
      </DesignArea>
    </DesignWrapper>
  );
}
