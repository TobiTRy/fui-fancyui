import React from 'react';
import Typography from '../../components/atoms/Typography/Typography';

import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper';
import Card from '../../components/molecules/Card/Card';

export default function Typogrphy() {
  return (
    <Card>
      <DesignWrapper>
        <DesignArea title="Typography">
          <div style={{ flexDirection: 'column' }}>
            <Typography variant="displayHero">h1. Heading Lorem ipsum dolor sit amet, </Typography>
            <Typography variant="displayHeadline">h1. Heading Heading Lorem ipsum dolor sit amet,</Typography>
            <Typography variant="displayTitle">h2. Headin Heading Lorem ipsum dolor sit amet, </Typography>
            <Typography variant="sectionTitle">h3. Heading Heading Lorem ipsum dolor sit amet, </Typography>
            <Typography variant="sectionSubtitle">h4. Heading Heading Lorem ipsum dolor sit amet, </Typography>
            <Typography variant="sectionSubsectionTitle">h5. Heading Heading Lorem ipsum dolor sit amet, </Typography>
            <Typography variant="bodytextLg">h6. Heading Heading Lorem ipsum dolor sit amet, </Typography>
            <Typography variant="bodytextMd">
              content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            </Typography>
            <Typography variant="subTextCaption">
              smText. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            </Typography>
            <Typography variant="subTextFootnote">
              smText. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            </Typography>
            <Typography variant="subTextLegal">
              smText. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            </Typography>
            <Typography variant="interactiveLg">
              smText. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            </Typography>
            <Typography variant="interactiveMd">
              smText. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            </Typography>

            <Typography variant="interactiveSm">
              smText. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            </Typography>
          </div>
        </DesignArea>
        <DesignArea title="Typography">
          <div style={{ flexDirection: 'column' }}></div>
        </DesignArea>
      </DesignWrapper>
    </Card>
  );
}
