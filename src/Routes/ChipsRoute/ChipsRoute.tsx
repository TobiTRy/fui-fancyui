/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import Chip from '../../Components/UI/Organisms/FancyChip/FancyChip';

import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';
import ClipBoardIconCheck from '../../Components/SVGIcons/SVGClipBoardIconChecked/SVGClipBoardIconChecked';
import { FancyCard } from '@/Components/Atoms/FancyCard';
import ChipList from '../../Components/UI/Molecules/ChipList/ChipList';
import FancyChipList from '../../Components/UI/Organisms/FancyChipList/FancyChipList';

const chipList = ['12', '1212', '1212', '121221', '121212211', '12121212', '12121212'];

export default function ChipsRoute() {
  const [isActive, setIsActive] = React.useState(false);

  const clickHandler = (id: string) => {
    console.log(id);
    setIsActive(!isActive);
  };

  return (
    <FancyCard>
      <DesignWrapper>
        <DesignArea title="ChipList">
          <ChipList />
          <FancyChipList size="sm" chips={chipList} />
        </DesignArea>
        {/* <DesignArea title="Chip">
        <Chip label="Heyyjoo" isActive={isActive} onClick={() => clickHandler('hi')} image="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg" />
        <Chip label="Heyyjoo"  onClick={() => clickHandler('hi')} onDelete={() => console.log('DELETE')} />
        <Chip label="Heyyjoo" onClick={() => console.log('hii')} />
      </DesignArea>
      <DesignArea title="Chip">
        <Chip
          label="Heyyjoo"
          size="sm"
          image="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
        />
        <Chip label="Heyyjoo" size="md"  onDelete={() => console.log('DELETE')} />
        <Chip
          label="Heyyjoo"
          
          size="lg"
          onClick={() => console.log('hii')}
          image="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
        />
      </DesignArea>
      <DesignArea title="Chip">
        <Chip
          label="Heyyjoo"
          size="lg"
          image="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
        />
        <Chip label="Heyyjoo" size="lg"  onDelete={() => console.log('DELETE')} />
        <Chip
          label="Heyyjoo"
          
          size="lg"
          onClick={() => console.log('hii')}
          image="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
        />
      </DesignArea>
      <DesignArea title="Chip">
        <Chip label="Heyyjoo" icon={<ClipBoardIconCheck />} size="sm"  />
        <Chip label="Heyyjoo" icon={<ClipBoardIconCheck />} size="md"  onDelete={() => console.log('DELETE')} />
        <Chip label="Heyyjoo" icon={<ClipBoardIconCheck />}  size="lg" onClick={() => console.log('hii')} />
      </DesignArea>
      <DesignArea title="Chip Outlined">
        <Chip label="Heyyjoo" isActive={isActive} outlined themeType={'primary'} layer={5} icon={<ClipBoardIconCheck />} size="sm"  />
        <Chip label="Heyyjoo" outlined icon={<ClipBoardIconCheck />} size="md"  onDelete={() => console.log('DELETE')} />
        <Chip label="Heyyjoo" outlined icon={<ClipBoardIconCheck />}  size="lg" onClick={() => console.log('hii')} />
      </DesignArea>
      <DesignArea title="Chip Colored">
        <Chip label="Heyyjoo" outlined themeType='accent' icon={<ClipBoardIconCheck />} size="sm"  />
        <Chip label="Heyyjoo" outlined themeType='secondary' icon={<ClipBoardIconCheck />} size="md"  onDelete={() => console.log('DELETE')} />
        <Chip label="Heyyjoo" outlined themeType='transparent' textColor='accent' icon={<ClipBoardIconCheck />}  size="lg" onClick={() => console.log('hii')} />
      </DesignArea>
      <DesignArea title="Chip Colored">
        <Chip label="Heyyjoo" isActive={isActive} themeType='accent' layer={1} textColor='primary' icon={<ClipBoardIconCheck />} size="sm"  />
        <Chip label="Heyyjoo" themeType='primary' icon={<ClipBoardIconCheck />} size="md"  onDelete={() => console.log('DELETE')} />
        <Chip label="Heyyjoo" themeType='secondary' textColor="accent" size="lg" onClick={() => console.log('hii')} />
        <Chip textColor="accent" size="lg" onClick={() => console.log('hii')} />
      </DesignArea> */}
      </DesignWrapper>
    </FancyCard>
  );
}
