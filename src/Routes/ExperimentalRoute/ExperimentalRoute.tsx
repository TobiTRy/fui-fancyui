/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';

import themeStore from '../../design/theme/themeStore/themeStore';

import { FancyButton } from '@/components/organisms/FancyButton';
import FancyContent from '../../components/molecules/FancyContent/FancyContent';
import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';

import { SVGCheckMark } from '@/components/icons/SVGCheckMark';
import { Card } from '@/components/molecules/Card';
import { FancyNumberInput } from '@/components/organisms/FancyNumberInput';
import { FancyAlignBox } from '@/components/templates/FancyAlignBox';
import { Button } from '@/components/molecules/Button';
import { FancyLine } from '@/components/atoms/FancyLine';
import { useThrottledCallback } from '@/utils/hooks/useThrottle/useThrottle';
import styled from 'styled-components';
import createMultiIntersectionObserver from '@/utils/hooks/useMiltiIntersectionObserver/multiplyIntersectionObserver';
import { FancyVirtualScroll } from '@/components/shared/FancyVirtualScroll';
import ActionItem from '@/components/molecules/ActionItem/ActionItem';
import { AutoSizingBox } from '@/components/atoms/AutoSizingBox';
import { FancyBox } from '@/components/atoms/FancyBox';

const Icon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm11.666 1.89c.682 0 1.139.47 1.187 1.107H14v-.11c-.053-1.187-1.024-2-2.342-2-1.604 0-2.518 1.05-2.518 2.751v.747c0 1.7.905 2.73 2.518 2.73 1.314 0 2.285-.792 2.342-1.939v-.114h-1.147c-.048.615-.497 1.05-1.187 1.05-.839 0-1.318-.62-1.318-1.727v-.742c0-1.112.488-1.754 1.318-1.754zm-6.188.926h.044L6.542 11h1.006L9 5.001H7.818l-.82 4.355h-.056L5.97 5.001h-.94l-.972 4.355h-.053l-.827-4.355H2L3.452 11h1.005l1.02-4.184z" />
  </svg>
);

const svg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z" />
    <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z" />
  </svg>
);

const reloadIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
  </svg>
);

const values = [
  { label: 'test1', icon: Icon, itemKey: '1' },
  { label: 'test2', icon: Icon, itemKey: '2' },
  { label: 'test3', icon: Icon, itemKey: '3' },
  { label: 'test4', icon: Icon, itemKey: '4' },
  { label: 'test1', icon: Icon, itemKey: '1' },
  { label: 'test2', icon: Icon, itemKey: '2' },
  { label: 'test3', icon: Icon, itemKey: '3' },
  { label: 'test4', icon: Icon, itemKey: '4' },
  { label: 'test4', icon: Icon, itemKey: '4' },
  { label: 'test1', icon: Icon, itemKey: '1' },
  { label: 'test2', icon: Icon, itemKey: '2' },
  { label: 'test3', icon: Icon, itemKey: '3' },
  { label: 'test4', icon: Icon, itemKey: '4' },
  { label: 'test4', icon: Icon, itemKey: '4' },
  { label: 'test1', icon: Icon, itemKey: '1' },
  { label: 'test2', icon: Icon, itemKey: '2' },
  { label: 'test3', icon: Icon, itemKey: '3' },
  { label: 'test4', icon: Icon, itemKey: '4' },
];

//array with many strings
const testArray = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
];

const CustomComponent = ({ children, test }: { children?: React.ReactNode; test?: string }) => {
  return <span>{children}</span>;
};

const TestComps = () => [
  <>
    <div>Hiii</div>
    <div>Hiii</div>
    <div>Hiii</div>
    <div>Hiii</div>
    <div>Hiii</div>
    <div>Hiii</div>
    <div>Hiii</div>
    <div>Hiii</div>
    <div>Hiii</div>
    <div>Hiii</div>
    <div>Hiii</div>
  </>,
];

export default function ExperimentalRoute() {
  const refs = React.useRef<(HTMLDivElement | null)[]>([]);
  const updateTheme = themeStore((state) => state.updateTheme);
  const switchTheme = themeStore((state) => state.switchTheme);
  const [isActive, setIsActive] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const removeToast = () => {
    console.log('remove');
  };

  const daysInMonth = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);

  const throttledAction = useThrottledCallback(removeToast, 1000);

  useEffect(() => {
    // Initialize the intersection observer and store the cleanup function
    const cleanupObserver = createMultiIntersectionObserver({
      elements: refs.current.filter(Boolean), // Convert monthRefs to a format suitable for the observer
      callback: (el) => {
        console.log('in view', el);
      },
      options: { threshold: 0.81 },
    });

    // Call the cleanup function on component unmount or before re-running this effect
    return () => {
      if (cleanupObserver) {
        cleanupObserver();
      }
    };
  }, []);

  const addContent = () => {
    setIsLoading(!isLoading);
  };

  return (
    <>
      <DesignWrapper>
        <DesignArea title="Test">
          <FancyBox themeType="secondary" outlined>
            Mooiin
          </FancyBox>
          <AutoSizingBox adjustHeight>
            <Button sizeC={undefined} onClick={addContent}>
              Mooiin
            </Button>
            {isLoading ? (
              <TestComps />
            ) : (
              <Button sizeC={undefined} onClick={addContent}>
                Mooiin
              </Button>
            )}
          </AutoSizingBox>
          <FancyNumberInput label="TTTSa" systemMessage="error" />
          <Card />
          <Card>
            <FancyContent direction="column" justify="center">
              <FancyContent.Icon sizeC="lg">
                <SVGCheckMark />
              </FancyContent.Icon>
              <FancyContent.Title>Test</FancyContent.Title>
              <FancyContent.Description>Test fgfg fgfggf fgfgfg sddssd sddsds sddssd sdsdsd </FancyContent.Description>
            </FancyContent>
          </Card>
          <FancyButton
            borderRadius="md"
            sizeC="md"
            themeType="secondary"
            icon={reloadIcon}
            onClick={() => switchTheme()}
          />
        </DesignArea>
        <DesignArea title="Test">
          <FancyLine direction="horizontal" themeType="accent" />
          <div style={{ height: '300px', overflow: 'hidden', backgroundColor: 'black', marginBottom: '80px' }}>
            <FancyVirtualScroll containerHeight="300px" itemHeight={300}>
              {testArray.map((item, index) => (
                <div key={index} ref={(ref) => (refs.current[index] = ref)} style={{ height: '300px' }}>
                  {item}
                </div>
              ))}
            </FancyVirtualScroll>
          </div>
        </DesignArea>
      </DesignWrapper>
    </>
  );
}

const defaultProps = {
  buttons: [
    { label: 'hi', icon: svg, id: '1' },
    { label: 'hi', icon: svg, id: '2' },
    { label: 'hi', icon: svg, id: '3' },
    { label: 'hi', icon: svg, id: '4' },
    { label: 'hi', icon: svg, id: '4' },
  ],
};

const Box = styled.div`
  height: 270px;
  width: 90%;
  background-color: #3e3e3e;
  flex-shrink: 0;
`;

const WrapperBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  height: 300px;
  padding: 20px;
  background-color: black;
  overflow-y: scroll;
`;
