/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import HeaderTitleWithLogo from '../../components/molecules/HeaderTitleWithLogo/HeaderTitleWithLogo';

import FancyLoadingSpinner from '../../components/atoms/FancyLoadingSpinner/FancyLoadingSpinner';
import FancyMiniProfile from '../../components/molecules/FancyMiniProfile/FancyMiniProfile';
import FancySearchBar from '../../components/organisms/FancySearchBar/FancySearchBar';

import styled from 'styled-components';
import FancyBar from '../../components/atoms/FancyBox/FancyBox';
import Header from '../../components/molecules/Header/Header';
import themeStore from '@/design/theme/themeStore/themeStore';
import { Typography } from '@/components/atoms/Typography';

import { FancyHeader } from '@/components/organisms/FancyHeader';

const Logo = () => (
  <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" height="30" version="1.1" viewBox="0 0 96.37 64.15" fill="#ff9800f0">
    <path d="M67.39,45.72c-.53,.27-.94,.52-1.39,.7-1.47,.57-2.99,1.03-4.64,1.2-.56,.06-1.11,.15-1.68,.19-1.34,.11-2.66-.08-3.91-.4-.89-.23-1.7-.65-2.51-1.03-1.12-.53-2.2-1.11-3.3-1.66-1.17-.59-2.33-1.18-3.51-1.76-1.09-.54-2.2-1.06-3.29-1.6-1.43-.71-2.84-1.43-4.27-2.14-1.07-.53-2.16-1.05-3.23-1.58-1.45-.72-2.88-1.44-4.33-2.16-1.02-.51-2.04-1.01-3.06-1.52-1.44-.72-2.87-1.45-4.32-2.16-1.05-.52-2.12-1.03-3.18-1.55-1.46-.73-2.91-1.46-4.37-2.19-1.05-.52-2.12-1.03-3.18-1.55-1.16-.57-2.3-1.16-3.46-1.73-1.07-.53-2.16-1.05-3.23-1.58-1.44-.72-2.88-1.44-4.32-2.16-.37-.19-.74-.39-1.13-.55-1.22-.53-1.36-1.57-.7-2.34,.42-.5,.99-.95,1.6-1.32,1.56-.94,3.17-1.83,4.77-2.73,1.24-.7,2.5-1.38,3.74-2.08,1.24-.7,2.46-1.41,3.69-2.12,.93-.53,1.86-1.04,2.79-1.57,1.28-.73,2.56-1.46,3.85-2.19,1.2-.68,2.42-1.35,3.62-2.04,1.28-.73,2.55-1.48,3.84-2.19,1.47-.81,2.97-1.57,4.85-1.71,.46-.03,.9-.17,1.36-.18,1.65-.06,3.09,.33,4.42,1.09,1.04,.59,2.18,1.07,3.27,1.61,1.1,.55,2.19,1.11,3.29,1.66,1.05,.52,2.11,1.04,3.17,1.56,1.17,.58,2.33,1.17,3.5,1.75,1.07,.53,2.17,1.03,3.23,1.58,.99,.51,2.08,.95,2.9,1.59,1.41,1.09,1.49,2.61,.5,3.98-.63,.87-1.5,1.57-2.48,2.21-.13,.08-.46,.11-.59,.04-1.38-.68-2.73-1.38-4.11-2.07-1.09-.54-2.2-1.06-3.28-1.6-1.43-.71-2.84-1.43-4.26-2.14-1.07-.53-2.16-1.05-3.23-1.58-1.44-.71-2.87-1.44-4.32-2.16-1.16-.57-2.34-1.12-3.49-1.69-.28-.14-.47-.1-.7,.03-1,.56-2,1.11-3,1.67-.98,.55-1.94,1.11-2.92,1.67-1.26,.72-2.53,1.45-3.8,2.17-1.21,.68-2.42,1.36-3.62,2.04-1.28,.73-2.56,1.47-3.84,2.2-1.27,.72-2.55,1.43-3.92,2.19,.36,.21,.65,.4,.98,.57,1.07,.53,2.16,1.05,3.23,1.58,1.44,.72,2.88,1.45,4.32,2.16,1.07,.53,2.16,1.05,3.23,1.58,1.44,.72,2.88,1.45,4.32,2.16,1.07,.53,2.16,1.05,3.23,1.58,1.46,.73,2.91,1.46,4.37,2.19,1.07,.53,2.16,1.05,3.23,1.58,1.44,.72,2.88,1.44,4.32,2.17,.97,.48,1.93,.97,2.9,1.45,1.49,.75,2.98,1.5,4.48,2.23,1.13,.55,2.27,1.08,3.4,1.64,1.41,.7,2.8,1.42,4.2,2.13,1.09,.54,2.2,1.06,3.29,1.6,1.43,.71,2.84,1.43,4.26,2.14,.75,.37,1.51,.73,2.43,1.17Z" />
    <path d="M27.19,17.79c.59-.29,1.06-.57,1.58-.78,1.33-.53,2.72-.92,4.2-1.16,1.38-.22,2.75-.39,4.15-.21,1.37,.17,2.7,.44,3.87,1.08,1.06,.58,2.2,1.06,3.31,1.6,1.23,.59,2.44,1.2,3.67,1.78,1.16,.56,2.34,1.09,3.49,1.65,1.49,.72,2.96,1.45,4.44,2.17,1.1,.54,2.22,1.05,3.33,1.59,1.22,.59,2.44,1.19,3.66,1.78,1.14,.55,2.3,1.08,3.44,1.63,1.51,.73,3,1.47,4.5,2.2,1.08,.53,2.18,1.03,3.26,1.56,1.49,.72,2.96,1.46,4.45,2.18,1.14,.55,2.3,1.07,3.43,1.62,1.17,.57,2.33,1.15,3.5,1.72,1.12,.54,2.26,1.06,3.38,1.6,1.52,.73,3.03,1.48,4.55,2.22,.68,.33,1.34,.7,2.05,.99,1.1,.44,1.15,1.82,.39,2.49-.61,.53-1.31,1.01-2.03,1.45-1.52,.93-3.08,1.81-4.63,2.71-1.15,.67-2.31,1.33-3.47,2.01-1.53,.89-3.05,1.79-4.58,2.68-1.22,.71-2.45,1.4-3.67,2.11-1.25,.72-2.5,1.46-3.75,2.19-.96,.55-1.92,1.1-2.88,1.65-1.27,.73-2.49,1.52-3.81,2.2-.92,.47-1.93,.85-2.95,1.18-1.4,.46-2.9,.62-4.4,.37-.77-.13-1.51-.4-2.21-.69-.8-.32-1.55-.73-2.32-1.1-1.24-.6-2.47-1.21-3.71-1.81-1.14-.55-2.29-1.07-3.43-1.62-1.17-.56-2.32-1.15-3.5-1.72-1.12-.54-2.26-1.06-3.38-1.6-1.33-.65-2.71-1.24-3.93-1.98-1.33-.81-1.82-1.96-1.21-3.56,.45-1.19,1.53-2.09,2.71-2.91,.52-.36,.94-.09,1.35,.11,1.23,.58,2.44,1.18,3.66,1.78,1.41,.69,2.81,1.4,4.22,2.09,1.12,.54,2.26,1.06,3.38,1.6,1.19,.57,2.37,1.16,3.56,1.73,1.12,.54,2.25,1.07,3.37,1.61,1.52,.73,3.03,1.48,4.56,2.2,.16,.08,.48,.12,.6,.06,1.45-.83,2.88-1.7,4.32-2.54,1.24-.72,2.5-1.41,3.74-2.13,1.24-.72,2.46-1.45,3.69-2.17,1.14-.66,2.28-1.32,3.41-1.98,1.56-.91,3.12-1.82,4.69-2.73,.43-.25,.88-.48,1.32-.72,.29-.15,.38-.28,.01-.46-1.72-.82-3.44-1.63-5.15-2.47-2.13-1.03-4.25-2.09-6.38-3.12-1.49-.72-3-1.41-4.49-2.13-1.82-.88-3.62-1.78-5.44-2.66-1.42-.69-2.85-1.35-4.27-2.04-1.82-.88-3.62-1.78-5.44-2.66-1.49-.72-3.01-1.41-4.5-2.13-1.82-.88-3.62-1.78-5.44-2.66-1.49-.72-3.01-1.41-4.5-2.13-1.8-.87-3.58-1.77-5.38-2.64-1.49-.72-3-1.41-4.5-2.13-.6-.28-1.18-.59-1.91-.95Z" />
  </svg>
);

const RightSlot = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div onClick={onClick} style={{ display: 'flex', alignItems: 'center' }}>
      <FancyMiniProfile
        alignText="left"
        headingText="@TobiTRy"
        imageURL="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
      />
    </div>
  );
};

const HeaderContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const HeaderContent = () => {
  return (
    <HeaderContentWrapper>
      <HeaderTitleWithLogo title="Let´sTryIt" logo={<Logo />} />
      <FancySearchBar searchListWidth="80vw" layer={1}>
        <FancyLoadingSpinner size="lg" />
      </FancySearchBar>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '100%' }}>
        <FancyMiniProfile
          alignText="left"
          headingText="@TobiTRy"
          imageURL="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
        />
      </div>
    </HeaderContentWrapper>
  );
};

export default function HeaderRoute() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <FancyHeader>
        <FancyHeader.Nav flexDirection="row" gap="12px" switchIndicator flexJustify="center">
          <p>mooin</p>
          <p>mooin</p>
          <p>mooin</p>
          <p>mooin</p>
        </FancyHeader.Nav>
        <h2>Mooin</h2>
      </FancyHeader>
      <div style={{ marginTop: '40px' }}>
        <FancyBar
          outlined
          layer={6}
          outlinedBackgroundStrength={0.95}
          externalStyle={{ padding: '5px 18px', borderRadius: '22px', width: '80%' }}
        >
          <HeaderContent />
        </FancyBar>
      </div>
      <div style={{ marginTop: '40px' }}>
        <FancyBar externalStyle={{ borderRadius: themeStore.getState().theme.borderRadius.lg, top: 0, width: '80%' }}>
          <Typography type="h1">FancyBar</Typography>
        </FancyBar>
      </div>
      <div style={{ marginTop: '40px' }}>
        <Header outlined externalStyle={{ padding: '5px 18px', borderRadius: '22px', width: '80%' }}>
          <HeaderContent />
        </Header>
      </div>
    </section>
  );
}
