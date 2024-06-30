import React from 'react';
import { DesignArea, DesignWrapper } from '@/Routes/DesignWrapper/Wrapper';
import { SwitchActiveIndicator } from '@/components/atoms/SwitchActiveIndicator';
import { RawUL } from '@/components/atoms/RawUL';
import { RawLI } from '@/components/atoms/RawLI';

export default function SwitchActiveIndicatorRoute() {
  const [active, setActive] = React.useState(0);

  const handleActive = (index: number) => {
    setActive(index);
  };

  return (
    <DesignWrapper>
      <DesignArea title="SwitchActiveIndicator">
        <RawUL>
          <RawLI style={{ position: 'relative' }} onClick={() => handleActive(0)}>
            <div>Moooinn</div>
            <SwitchActiveIndicator type="underline" itemNumber={active} direction="vertical" borderRadius={'20px'} />
          </RawLI>
          <RawLI style={{ position: 'relative' }} onClick={() => handleActive(1)}>
            <div>Moooinn</div>
          </RawLI>
          <RawLI style={{ position: 'relative' }} onClick={() => handleActive(2)}>
            <div>Moooinn</div>
          </RawLI>
        </RawUL>
        <RawUL>
          <RawLI style={{ position: 'relative' }} onClick={() => handleActive(0)}>
            <div>Moooinn</div>
            <SwitchActiveIndicator
              type="bolb"
              itemNumber={active}
              style={{ zIndex: '-1' }}
              direction="vertical"
              borderRadius={'20px'}
            />
          </RawLI>
          <RawLI style={{ position: 'relative' }} onClick={() => handleActive(1)}>
            <div>Moooinn</div>
          </RawLI>
          <RawLI style={{ position: 'relative' }} onClick={() => handleActive(2)}>
            <div>Moooinn</div>
          </RawLI>
        </RawUL>
        <RawUL>
          <RawLI style={{ position: 'relative' }} onClick={() => handleActive(0)}>
            <div>Moooinn</div>
            <SwitchActiveIndicator type="leftline" itemNumber={active} direction="vertical" borderRadius={'20px'} />
          </RawLI>
          <RawLI style={{ position: 'relative' }} onClick={() => handleActive(1)}>
            <div>Moooinn</div>
          </RawLI>
          <RawLI style={{ position: 'relative' }} onClick={() => handleActive(2)}>
            <div>Moooinn</div>
          </RawLI>
        </RawUL>
        <RawUL style={{ display: 'flex' }}>
          <RawLI style={{ position: 'relative' }} onClick={() => handleActive(0)}>
            <div>Moooinn</div>
            <SwitchActiveIndicator type="underline" itemNumber={active} direction="horizontal" borderRadius={'20px'} />
          </RawLI>
          <RawLI style={{ position: 'relative' }} onClick={() => handleActive(1)}>
            <div>Moooinn</div>
          </RawLI>
          <RawLI style={{ position: 'relative' }} onClick={() => handleActive(2)}>
            <div>Moooinn</div>
          </RawLI>
        </RawUL>
      </DesignArea>
    </DesignWrapper>
  );
}
