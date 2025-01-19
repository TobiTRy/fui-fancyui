import React from 'react';

import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';
import ClipBoardIconCheck from '../../components/icons/SVGClipBoardIconChecked/SVGClipBoardIconChecked';
import { Card } from '@/components/molecules/Card';
import ChipList from '../../components/molecules/ChipList/ChipList';
import FancyChipList from '../../components/organisms/FancyChipList/FancyChipList';
import FancyChip from '@/components/templates/FancyChip/FancyChip';
import { TChip } from '@/components/organisms/FancyChipList';

const chipList = [
  { label: 'Item 1', id: '1' },
  { label: 'Item 2', id: '2' },
  { label: 'Item 3', id: '3' },
  { label: 'Item 4', id: '4' },
  { label: 'Item 5', id: '5' },
];

export default function ChipsRoute() {
  const [isActive, setIsActive] = React.useState(false);
  const [chipList, setChipList] = React.useState<TChip[]>([]);

  const handleChipChange = (chips: TChip[]) => {
    setChipList(chips);
  };

  const clickHandler = (id: string) => {
    console.log(id);
    setIsActive(!isActive);
  };

  return (
    <Card>
      <DesignWrapper>
        <DesignArea title="ChipList">
          <ChipList />
          <FancyChipList sizeC="sm" layer={2} chips={chipList} onChange={handleChipChange} />
        </DesignArea>
        <DesignArea title="FancyChip">
          <FancyChip
            label="Heyyjoo"
            isActive={isActive}
            onClick={() => clickHandler('hi')}
            image={
              <img src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg" />
            }
          />
          <FancyChip label="Heyyjoo" onClick={() => clickHandler('hi')} onDelete={() => console.log('DELETE')} />
          <FancyChip label="Heyyjoo" onClick={() => console.log('hii')} />
        </DesignArea>
        <DesignArea title="FancyChip">
          <FancyChip
            label="Heyyjoo"
            sizeC="sm"
            image={
              <img src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg" />
            }
          />
          <FancyChip label="Heyyjoo" sizeC="md" onDelete={() => console.log('DELETE')} />
          <FancyChip
            label="Heyyjoo"
            sizeC="lg"
            onClick={() => console.log('hii')}
            image={
              <img src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg" />
            }
          />
        </DesignArea>
        <DesignArea title="FancyChip">
          <FancyChip
            label="Heyyjoo"
            sizeC="lg"
            image={
              <img src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg" />
            }
          />
          <FancyChip label="Heyyjoo" sizeC="lg" onDelete={() => console.log('DELETE')} />
          <FancyChip
            label="Heyyjoo"
            sizeC="lg"
            onClick={() => console.log('hii')}
            image={
              <img src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg" />
            }
          />
        </DesignArea>
        <DesignArea title="FancyChip">
          <FancyChip label="Heyyjoo" icon={<ClipBoardIconCheck />} sizeC="sm" />
          <FancyChip label="Heyyjoo" icon={<ClipBoardIconCheck />} sizeC="md" onDelete={() => console.log('DELETE')} />
          <FancyChip label="Heyyjoo" icon={<ClipBoardIconCheck />} sizeC="lg" onClick={() => console.log('hii')} />
        </DesignArea>
        <DesignArea title="FancyChip Outlined">
          <FancyChip
            label="Heyyjoo"
            isActive={isActive}
            outlined
            themeType={'primary'}
            layer={5}
            icon={<ClipBoardIconCheck />}
            sizeC="sm"
          />
          <FancyChip
            label="Heyyjoo"
            outlined
            icon={<ClipBoardIconCheck />}
            sizeC="md"
            onDelete={() => console.log('DELETE')}
          />
          <FancyChip
            label="Heyyjoo"
            outlined
            icon={<ClipBoardIconCheck />}
            sizeC="lg"
            onClick={() => console.log('hii')}
          />
        </DesignArea>
        <DesignArea title="FancyChip Colored">
          <FancyChip label="Heyyjoo" outlined themeType="accent" icon={<ClipBoardIconCheck />} sizeC="sm" />
          <FancyChip
            label="Heyyjoo"
            outlined
            themeType="secondary"
            icon={<ClipBoardIconCheck />}
            sizeC="md"
            onDelete={() => console.log('DELETE')}
          />
          <FancyChip
            label="Heyyjoo"
            outlined
            textColor="accent"
            icon={<ClipBoardIconCheck />}
            sizeC="lg"
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
            sizeC="sm"
          />
          <FancyChip
            label="Heyyjoo"
            themeType="primary"
            icon={<ClipBoardIconCheck />}
            sizeC="md"
            onDelete={() => console.log('DELETE')}
          />
          <FancyChip
            label="Heyyjoo"
            themeType="secondary"
            textColor="accent"
            sizeC="lg"
            onClick={() => console.log('hii')}
          />
          <FancyChip textColor="accent" sizeC="lg" onClick={() => console.log('hii')} />
        </DesignArea>
      </DesignWrapper>
    </Card>
  );
}
