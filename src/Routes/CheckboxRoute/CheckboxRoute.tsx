import React, { useState } from 'react';

import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';
import FancyCheckbox from '../../Components/UI/Molecules/FancyCheckbox/FancyCheckbox';

export default function CheckboxRoute() {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <DesignWrapper>
      <DesignArea title="checkbox" style={{ alignItems: 'flex-start'}}>
        <FancyCheckbox
          defaultChecked={checked}
          onChange={handleCheckboxChange}
          description="There is some description in this checkbox"
          label="Testt ttets sakjkas akllaksa klaas lllksaks askklalks ajdssjkadjsk ajkkjsajk jkkjsa jkjaksj kka jalw "
        />
        <FancyCheckbox description="There is some description in this checkbox" label="Testt ttets sakjkas sdosodo a sdsdsdsjalw " />
        <FancyCheckbox label="Testt ttets sakjkas sdosodo a sdsdsdsjalw " />
        <FancyCheckbox label="Testt ttets sakjkas sdosodo a sdsdsdsjalw " alignCheckbox='right' />
        <FancyCheckbox />
      </DesignArea>
    </DesignWrapper>
  );
}
