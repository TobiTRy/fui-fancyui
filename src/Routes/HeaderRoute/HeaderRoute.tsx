import React, { useState } from 'react';
import FancyHeader from '../../Components/UI/Organisms/FancyHeader/FancyHeader';
import HeaderTitleWithLogo from '../../Components/UI/Molecules/HeaderTitleWithLogo/HeaderTitleWithLogo';
import FancyDropDownMenue from '../../Components/UI/Organisms/FancyDropDownMenue/FancyDropDownMenue';

import FancySearchBar from '../../Components/UI/Organisms/FancySearchBar/FancySearchBar';
import FancyLiItem from '../../Components/UI/Atoms/FancyLI/FancyLI';
import { FancyA, FancySVGAtom } from '../../lib';
import FancyProfilePicture from '../../Components/UI/Atoms/FancyProfilePicture/FancyProfilePicture';
import FancyLoadingSpinner from '../../Components/UI/Atoms/FancyLoadingSpinner/FancyLoadingSpinner';
import FancyMiniProfile from '../../Components/UI/Molecules/FancyMiniProfile/FancyMiniProfile';

import SVGChevronLeft from '../../Components/UI/SVGIcons/SVGChevronLeft';

const RightSlot = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div onClick={onClick} style={{display: 'flex', alignItems: 'center'}}>
    <FancyMiniProfile alignText="left" headingText='@TobiTRy'  imageURL='https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg'/>
    </div>
  );
};

const Slot = {
  component: <FancySearchBar searchListWidth="80vw" themeType='secondary' layer={1}>
    <FancyLoadingSpinner size='lg'  />
  </FancySearchBar>,
  scale: 1,
};

interface More {
  title: string;
}
const MoreContent = (props: More) => {
  return (
    <>
      <div style={{ position: 'absolute', width: '100px', top: '44px', height: '100px' }}>More Content {props.title}</div>
    </>
  );
};

const headerTitele = {
  component: <HeaderTitleWithLogo title="Let´sTryIt" />,
};

export default function HeaderRoute() {
  const [isOpen, setIsOpen] = useState(false);

  const Slot2 = {
    toOpenComponent: (
      <FancyDropDownMenue isOpen={isOpen} alignHorizontal="right" alignVertical="top" width="auto">
        <FancyLiItem size="lg">
          <FancyA
            wide={true}
            align="left"
            icon={<FancySVGAtom>{SVGChevronLeft}</FancySVGAtom>}
            design="transparent"
            hoverColor="primary"
            roundedCompletly={false}
            label="test"
            size="sm"
          />
        </FancyLiItem>
        <FancyLiItem size="lg">
          <FancyA
            wide={true}
            align="left"
            icon={<FancySVGAtom>{SVGChevronLeft}</FancySVGAtom>}
            design="transparent"
            hoverColor="primary"
            roundedCompletly={false}
            label="testsasadefsddfdfsdsf "
            size="sm"
          />
        </FancyLiItem>
        <FancyLiItem size="lg">
          <FancyA
            wide={true}
            align="left"
            icon={<FancySVGAtom>{SVGChevronLeft}</FancySVGAtom>}
            design="transparent"
            hoverColor="primary"
            roundedCompletly={false}
            label="test"
            size="sm"
          />
        </FancyLiItem>
      </FancyDropDownMenue>
    ),
    component: <RightSlot onClick={() => setIsOpen(!isOpen)} />,
    scale: 1,
  };

  return (
    <>
      <section>
        <FancyHeader rightSlot={Slot2} leftSlot={headerTitele} middeSlot={Slot} themeType='secondary'/>
      </section>
    </>
  );
}
