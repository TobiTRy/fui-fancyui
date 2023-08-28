import React from 'react';

import Chip from '../../Components/UI/Molecules/Chip/Chip';

import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';
import ClipBoardIconCheck from '../../Components/UI/SVGIcons/SVGClipBoardIconChecked';

export default function ChipsRoute() {
  return (
    <DesignWrapper>
      <DesignArea title="Chip">
        <Chip label="Heyyjoo" image="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg" />
        <Chip label="Heyyjoo" deleteButton onDelete={() => console.log('DELETE')} />
        <Chip label="Heyyjoo" onClick={() => console.log('hii')} />
      </DesignArea>
      <DesignArea title="Chip">
        <Chip
          label="Heyyjoo"
          size="small"
          image="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
        />
        <Chip label="Heyyjoo" size="medium" deleteButton onDelete={() => console.log('DELETE')} />
        <Chip
          label="Heyyjoo"
          deleteButton
          size="large"
          onClick={() => console.log('hii')}
          image="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
        />
      </DesignArea>
      <DesignArea title="Chip">
        <Chip
          label="Heyyjoo"
          size="large"
          image="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
        />
        <Chip label="Heyyjoo" size="large" deleteButton onDelete={() => console.log('DELETE')} />
        <Chip
          label="Heyyjoo"
          deleteButton
          size="large"
          onClick={() => console.log('hii')}
          image="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
        />
      </DesignArea>
      <DesignArea title="Chip">
        <Chip label="Heyyjoo" icon={<ClipBoardIconCheck />} size="small" deleteButton />
        <Chip label="Heyyjoo" icon={<ClipBoardIconCheck />} size="medium" deleteButton onDelete={() => console.log('DELETE')} />
        <Chip label="Heyyjoo" icon={<ClipBoardIconCheck />} deleteButton size="large" onClick={() => console.log('hii')} />
      </DesignArea>
      <DesignArea title="Chip Outlined">
        <Chip label="Heyyjoo" outlined icon={<ClipBoardIconCheck />} size="small" deleteButton />
        <Chip label="Heyyjoo" outlined icon={<ClipBoardIconCheck />} size="medium" deleteButton onDelete={() => console.log('DELETE')} />
        <Chip label="Heyyjoo" outlined icon={<ClipBoardIconCheck />} deleteButton size="large" onClick={() => console.log('hii')} />
      </DesignArea>
      <DesignArea title="Chip Colored">
        <Chip label="Heyyjoo" outlined color='accent' icon={<ClipBoardIconCheck />} size="small" deleteButton />
        <Chip label="Heyyjoo" outlined color='secondary' icon={<ClipBoardIconCheck />} size="medium" deleteButton onDelete={() => console.log('DELETE')} />
        <Chip label="Heyyjoo" outlined color='transparent' icon={<ClipBoardIconCheck />} deleteButton size="large" onClick={() => console.log('hii')} />
      </DesignArea>
      <DesignArea title="Chip Colored">
        <Chip label="Heyyjoo" color='accent' textColor='primary' icon={<ClipBoardIconCheck />} size="small" deleteButton />
        <Chip label="Heyyjoo" color='primary' icon={<ClipBoardIconCheck />} size="medium" deleteButton onDelete={() => console.log('DELETE')} />
        <Chip label="Heyyjoo" color='secondary' textColor="accent" size="large" onClick={() => console.log('hii')} />
      </DesignArea>
    </DesignWrapper>
  );
}
