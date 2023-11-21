import React, { useState } from 'react';

import FancyRadio from '@/Components/UI/Organisms/FancyRadio/FancyRadio';
import { FancyBox } from '../../Atoms/FancyBox';

interface Item {
  title: string;
  description: string;
  key: string;
}

interface FancyRadioListProps {
  items: Item[];
  name: string;
}

export default function FancyRadioList(props: FancyRadioListProps) {
  const { items, name } = props;
  const [selected, setSelected] = useState('');

  return (
    <FancyBox>
      {items.map((item, index) => (
        <FancyRadio
          name={name}
          key={index}
          id={item.key}
          value={item.title}
          label={item.title}
          description={item.description}
          checked={selected === item.key}
          onChange={() => setSelected(item.key)}
        />
      ))}
    </FancyBox>
  );
}
