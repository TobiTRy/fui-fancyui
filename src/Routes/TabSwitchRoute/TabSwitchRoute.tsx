import React from 'react';

import FancyTabSwitch from '../../components/organisms/FancyTabSwitch/FancyTabSwitch';
import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper';
import { css } from 'styled-components';
import { Card } from '@/components/molecules/Card';

const Icon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm11.666 1.89c.682 0 1.139.47 1.187 1.107H14v-.11c-.053-1.187-1.024-2-2.342-2-1.604 0-2.518 1.05-2.518 2.751v.747c0 1.7.905 2.73 2.518 2.73 1.314 0 2.285-.792 2.342-1.939v-.114h-1.147c-.048.615-.497 1.05-1.187 1.05-.839 0-1.318-.62-1.318-1.727v-.742c0-1.112.488-1.754 1.318-1.754zm-6.188.926h.044L6.542 11h1.006L9 5.001H7.818l-.82 4.355h-.056L5.97 5.001h-.94l-.972 4.355h-.053l-.827-4.355H2L3.452 11h1.005l1.02-4.184z" />
  </svg>
);

const switchValues = [
  { itemKey: '1', value: 'Tab 1', label: 'Tab 1 djkjk dklkdd' },
  { itemKey: '2', value: 'Tab 2', label: 'Tab 2' },
  { itemKey: '3', value: 'Tab 3', label: 'Tab 3' },
];
const switchValues1 = [
  { itemKey: '1', value: 'Tab 2', label: 'Tab 2', icon: Icon },
  {
    itemKey: '2',
    value: 'Tab 1',
    label:
      'Tab 1 asksk aklsaklskl klaskl aklas aklkl  asuiasuiui uiasui asiuui asuiausi u asasuaui suaiausu asuusau isasuus ',
    icon: Icon,
  },
  { itemKey: '3', value: 'Tab 3', label: 'Tab 3', icon: Icon },
];
const switchValues2 = [
  { itemKey: '1', value: 'Tab 1', icon: Icon },
  { itemKey: '2', value: 'Tab 2', icon: Icon },
  { itemKey: '3', value: 'Tab 3', icon: Icon },
  { itemKey: '4', value: 'Tab 1', icon: Icon },
  { itemKey: '5', value: 'Tab 2', icon: Icon },
  { itemKey: '6', value: 'Tab 3', icon: Icon },
];

const switchValues3 = [
  { itemKey: '1', value: 'Tab 1', label: 'Tab 1' },
  { itemKey: '2', value: 'Tab 2', label: 'Tab 1' },
  { itemKey: '3', value: 'Tab 3', label: 'Tab 1' },
  { itemKey: '4', value: 'Tab 1', label: 'Tab 1' },
  { itemKey: '5', value: 'Tab 2', label: 'Tab 1' },
  { itemKey: '6', value: 'Tab 3', label: 'Tab 1' },
];

export default function TabSwitchRoute() {
  const [test, setTest] = React.useState('1');

  return (
    <>
      <FancyTabSwitch
        label="test"
        sizeC="sm"
        values={switchValues1}
        borderRadius={'xxl'}
        currentSelect={test}
        handler={(id: string) => setTest(id)}
      />
      {/* <Card layer={1}>
        <DesignWrapper>
          <DesignArea
            title="TabSwitch"
            style={css`
              flex-direction: column;
            `}
          >
            <FancyTabSwitch
              wide
              sizeC="sm"
              label="test"
              borderRadius="xxl"
              themeType="secondary"
              layer={3}
              values={switchValues1}
              currentSelect={test}
              handler={(id: string) => setTest(id)}
            />
            <FancyTabSwitch
              wide
              sizeC="md"
              label="test"
              borderRadius="xxl"
              themeType="secondary"
              layer={3}
              values={switchValues1}
              currentSelect={test}
              handler={(id: string) => setTest(id)}
            />
            <FancyTabSwitch
              wide
              sizeC="lg"
              label="test"
              borderRadius="xxl"
              themeType="secondary"
              layer={3}
              values={switchValues1}
              currentSelect={test}
              handler={(id: string) => setTest(id)}
            />
            <FancyTabSwitch
              label="test"
              values={switchValues1}
              themeType="transparent"
              sizeC="sm"
              indicatorType="underline"
              borderRadius="md"
              currentSelect={test}
              handler={(id: string) => setTest(id)}
            />

            <FancyTabSwitch
              label="test"
              wide
              outlined
              borderRadius="complete"
              sizeC="sm"
              layer={3}
              values={switchValues1}
              currentSelect={test}
              handler={(id: string) => setTest(id)}
            />
            <FancyTabSwitch
              label="test"
              sizeC="sm"
              themeType="transparent"
              values={switchValues2}
              borderRadius={'complete'}
              currentSelect={test}
              handler={(id: string) => setTest(id)}
            />
            <FancyTabSwitch
              label="test"
              sizeC="sm"
              themeType="transparent"
              values={switchValues3}
              borderRadius={'complete'}
              currentSelect={test}
              handler={(id: string) => setTest(id)}
            />

            <FancyTabSwitch
              sizeC="lg"
              label="test"
              wide
              outlined
              direction="vertical"
              values={switchValues}
              borderRadius={'xl'}
              layer={3}
              currentSelect={test}
              handler={(id: string) => setTest(id)}
            />
            <FancyTabSwitch
              label="test"
              wide
              values={switchValues}
              layer={2}
              borderRadius={'xl'}
              currentSelect={test}
              handler={(id: string) => setTest(id)}
            />
          </DesignArea>
        </DesignWrapper>
      </Card> */}
    </>
  );
}
