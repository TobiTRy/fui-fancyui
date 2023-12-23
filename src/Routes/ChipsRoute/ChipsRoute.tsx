import React from 'react';

import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';
import ClipBoardIconCheck from '../../components/icons/SVGClipBoardIconChecked/SVGClipBoardIconChecked';
import { FancyCard } from '@/components/atoms/FancyCard';
import ChipList from '../../components/molecules/ChipList/ChipList';
import FancyChipList from '../../components/organisms/FancyChipList/FancyChipList';
import FancyChip from '@/components/templates/FancyChip/FancyChip';

const chipList = [
  { label: 'Item 1', id: '1' },
  { label: 'Item 2', id: '2' },
  { label: 'Item 3', id: '3' },
  { label: 'Item 4', id: '4' },
  { label: 'Item 5', id: '5' },
];

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
          <FancyChipList size="sm" layer={2} chips={chipList} />
        </DesignArea>
        <DesignArea title="FancyChip">
          <FancyChip
            label="Heyyjoo"
            isActive={isActive}
            onClick={() => clickHandler('hi')}
            image="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
          />
          <FancyChip label="Heyyjoo" onClick={() => clickHandler('hi')} onDelete={() => console.log('DELETE')} />
          <FancyChip label="Heyyjoo" onClick={() => console.log('hii')} />
        </DesignArea>
        <DesignArea title="FancyChip">
          <FancyChip
            label="Heyyjoo"
            size="sm"
            image="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
          />
          <FancyChip label="Heyyjoo" size="md" onDelete={() => console.log('DELETE')} />
          <FancyChip
            label="Heyyjoo"
            size="lg"
            onClick={() => console.log('hii')}
            image="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
          />
        </DesignArea>
        <DesignArea title="FancyChip">
          <FancyChip
            label="Heyyjoo"
            size="lg"
            image="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
          />
          <FancyChip label="Heyyjoo" size="lg" onDelete={() => console.log('DELETE')} />
          <FancyChip
            label="Heyyjoo"
            size="lg"
            onClick={() => console.log('hii')}
            image="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
          />
        </DesignArea>
        <DesignArea title="FancyChip">
          <FancyChip label="Heyyjoo" icon={<ClipBoardIconCheck />} size="sm" />
          <FancyChip label="Heyyjoo" icon={<ClipBoardIconCheck />} size="md" onDelete={() => console.log('DELETE')} />
          <FancyChip label="Heyyjoo" icon={<ClipBoardIconCheck />} size="lg" onClick={() => console.log('hii')} />
        </DesignArea>
        <DesignArea title="FancyChip Outlined">
          <FancyChip
            label="Heyyjoo"
            isActive={isActive}
            outlined
            themeType={'primary'}
            layer={5}
            icon={<ClipBoardIconCheck />}
            size="sm"
          />
          <FancyChip
            label="Heyyjoo"
            outlined
            icon={<ClipBoardIconCheck />}
            size="md"
            onDelete={() => console.log('DELETE')}
          />
          <FancyChip
            label="Heyyjoo"
            outlined
            icon={<ClipBoardIconCheck />}
            size="lg"
            onClick={() => console.log('hii')}
          />
        </DesignArea>
        <DesignArea title="FancyChip Colored">
          <FancyChip label="Heyyjoo" outlined themeType="accent" icon={<ClipBoardIconCheck />} size="sm" />
          <FancyChip
            label="Heyyjoo"
            outlined
            themeType="secondary"
            icon={<ClipBoardIconCheck />}
            size="md"
            onDelete={() => console.log('DELETE')}
          />
          <FancyChip
            label="Heyyjoo"
            outlined
            themeType="transparent"
            textColor="accent"
            icon={<ClipBoardIconCheck />}
            size="lg"
            onClick={() => console.log('hii')}
          />
        </DesignArea>
        <DesignArea title="FancyChip Colored">
          <FancyChip
            label="Heyyjoo"
            isActive={isActive}
            themeType="accent"
            layer={1}
            textColor="primary"
            icon={<ClipBoardIconCheck />}
            size="sm"
          />
          <FancyChip
            label="Heyyjoo"
            themeType="primary"
            icon={<ClipBoardIconCheck />}
            size="md"
            onDelete={() => console.log('DELETE')}
          />
          <FancyChip
            label="Heyyjoo"
            themeType="secondary"
            textColor="accent"
            size="lg"
            onClick={() => console.log('hii')}
          />
          <FancyChip textColor="accent" size="lg" onClick={() => console.log('hii')} />
        </DesignArea>
      </DesignWrapper>
    </FancyCard>
  );
}
