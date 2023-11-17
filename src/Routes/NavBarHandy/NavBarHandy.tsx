import React from 'react';

import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper';
import BottomBar from '../../Components/UI/Molecules/BottomBar/BottomBar';
import { FancyBottomBarIcon } from '../../lib';
import FancyHandyNav from '../../Components/UI/Templates/FancyHandyNav/FancyHandyNav';
import { IFancyBottomBarIcon } from '../../Components/UI/Templates/FancyBottomBarIcon/FancyBottomBarIcon';
import { css } from 'styled-components';

const svg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z" />
    <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z" />
  </svg>
);

const clickHandler = (test: string) => console.log(test);

const items: IFancyBottomBarIcon[] = [
  { label: 'TRY', icon: svg, type: 'button', onClick: () => clickHandler('asas'), hideLabel: true },
  { label: 'SOME', icon: svg, type: 'button', hideLabel: true },
  { label: 'HOT', icon: svg, type: 'button', hideLabel: true },
  { label: 'CHICKS', icon: svg, type: 'button', hideLabel: true },
];
const items2: IFancyBottomBarIcon[] = [
  { icon: svg, type: 'button', label: 'myButton', onClick: () => clickHandler('asas') },
  { icon: svg, type: 'button', label: 'myButton', href: 'http://google.de' },
  { icon: svg, type: 'button', label: 'myButton', href: 'http://google.de' },
  { icon: svg, type: 'button', label: 'myButton', href: 'http://google.de' },
];


const NavBarStyle = css`
  position: fixed;
  bottom: 12px;
  margin: 0 12px;
  width: 80%;

  & > :first-child {
    border-radius: 12px;
  }

`;


export default function NavBarHandy() {
  return (
    <DesignWrapper>
      <DesignArea title="NavBarHandy">
        <BottomBar>
          <FancyBottomBarIcon icon={svg} label='hii'/>
          <FancyBottomBarIcon type="a" href="http://google.de" icon={svg} label='hiii' />
          <FancyBottomBarIcon icon={svg} type='button' label='Hii' />
          <FancyBottomBarIcon icon={svg} label='hiii'/>
        </BottomBar>
      </DesignArea>
      <DesignArea title="FancyHandyNav">
        <FancyHandyNav outlined items={items} />
      </DesignArea>
      <DesignArea title="FancyHandyNav">
        <FancyHandyNav outlined outlinedBackgroundStrength={0.9} externalStyle={NavBarStyle} items={items2}  />
      </DesignArea>
    </DesignWrapper>
  );
}

const defaultProps = {
  buttons: [
    { label: 'TRY', icon: svg, id: '1' },
    { label: 'SOME', icon: svg, id: '2' },
    { label: 'HOT', icon: svg, id: '3' },
    { label: 'CHICKS', icon: svg, id: '4' },
  ],
};
