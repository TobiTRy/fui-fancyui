/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';

import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';
import FancyCheckbox from '../../Components/UI/Molecules/FancyCheckbox/FancyCheckbox';
import { FancyCard } from '../../lib';
import RawRadio from '@/Components/UI/Atoms/RawRadio/RawRadio';
import FancyRadio from '@/Components/UI/Organisms/FancyRadio/FancyRadio';
import CustomRadio from '@/Components/UI/Atoms/RawRadio/RawRadio';

export default function CheckboxRoute() {
  const [checked, setChecked] = useState(false);
  const [radio, setRadio] = useState(false);

  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value, 'dsds');
    setSelectedValue(event.target.value);
  };

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value, 'dsds');
    setRadio(!radio);
  };

  return (
    <FancyCard>
      <DesignWrapper>
        <DesignArea title="checkbox" style={{ alignItems: 'flex-start' }}>
          <FancyCheckbox
            defaultChecked={checked}
            onChange={handleCheckboxChange}
            description="There is some description in this checkbox"
            label="Testt ttets sakjkas akllaksa klaas lllksaks askklalks ajdssjkadjsk ajkkjsajk jkkjsa jkjaksj kka jalw "
          />
          <FancyCheckbox description="There is some description in this checkbox" label="Testt ttets sakjkas sdosodo a sdsdsdsjalw " />
          <FancyCheckbox label="Testt ttets sakjkas sdosodo a sdsdsdsjalw " />
          <FancyCheckbox label="Testt ttets sakjkas sdosodo a sdsdsdsjalw " alignCheckbox="right" />
          <FancyCheckbox />

          <FancyRadio
            id="radio2"
            name="customRadio"
            description="asasassaasasas sadsdsdds"
            value="option2"
            label="Option 2"
            checked={selectedValue === 'option2'}
            onChange={handleChange}
          ></FancyRadio>
          <FancyRadio
            id="radio3"
            name="customRadio"
            value="option3"
            label="Option 3"
            checked={selectedValue === 'option3'}
            onChange={handleChange}
          ></FancyRadio>

          <div>
            <RawRadio
              id="radio1"
              name="customRadio"
              value="option1"
              label="Option 1"
              checked={selectedValue === 'option1'}
              onChange={handleChange}
            />
            <CustomRadio
              id="radio2"
              name="customRadio"
              value="option2"
              label="Option 2"
              checked={selectedValue === 'option2'}
              onChange={handleChange}
            />
          </div>
        </DesignArea>
      </DesignWrapper>
    </FancyCard>
  );
}
