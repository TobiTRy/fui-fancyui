/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';

import themeStore from '../../design/theme/themeStore/themeStore';

import { FancyButton } from '@/components/organisms/FancyButton';
import { FancyRadio } from '@/components/organisms/FancyRadio';
import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';

import PasswordStrengthMeter from '@/components/atoms/PasswordStrengthMeter/PasswordStrengthMeter';
import styled from 'styled-components';
import { FancyNumberInput } from '@/components/organisms/FancyNumberInput';
import { FancyFlexBox } from '@/components/templates/FancyFlexBox';
import { FancyTabSwitch } from '@/components/organisms/FancyTabSwitch';
import DynamicComponentWrapper from '@/components/atoms/DynamicComponentWrapper/DynamicComponentWrapper';
import { FancyBox } from '@/components/atoms/FancyBox';
import { FancyBoxTw } from '@/components/atoms/FancyBoxTw';
import { SwipeUpContainer } from '@/components/atoms/SwipeUpContainer';
import { useActiveBreakpoint } from '@/utils/hooks/useActiveBreakpoint';
import { SystemMessage } from '@/components/atoms/SystemMessage';
import { FancyTextInput } from '@/components/organisms/FancyTextInput';
import { FancyDropDownSelect } from '@/components/organisms/FancyDropDownSelect';
import { FancyFloatingInfoButton } from '@/components/organisms/FancyFloatingInfoButton';
import { SearchBar } from '@/components/molecules/SearchBar';
import FancySearchSelect from '@/components/organisms/FancySearchSelect/FancySearchSelect';
import FancySearchSelectExample from './FancySearchSelectExample';
import HeaderNavigationWithTitle from '@/components/molecules/HeaderNavigationWithTitle/HeaderNavigationWithTitle';

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

export default function ExperimentalRoute() {
  const refs = React.useRef<(HTMLDivElement | null)[]>([]);
  const updateTheme = themeStore((state) => state.updateTheme);
  const switchTheme = themeStore((state) => state.switchTheme);
  const [password, setPassword] = useState('');
  const [isHover, setIsHover] = useState(false);
  const [modalPosition, setModalPosition] = useState({ height: '100%' });
  const activeBP = useActiveBreakpoint();
  const [selectedValue, setSelectedValue] = useState<string>('');

  console.log(activeBP);

  const options = [
    { key: 'option1', value: 'Option 1' },
    { key: 'option2', value: 'Option 2' },
    { key: 'option3', value: 'Option 3' },
  ];

  return (
    <>
      <DesignWrapper>
        <DesignArea title="FancyBoxTw - Tailwind Migration Showcase">
          {/* Basic Comparison */}
          <div className="space-y-8">
            <HeaderNavigationWithTitle
              title="Header Navigation With Title"
              sizeC="sm"
              forwardButton={{
                onClick: () => console.log('forward'),
              }}
            />
            <HeaderNavigationWithTitle
              title="Header Navigation With Title"
              sizeC="md"
              backButton={{
                onClick: () => console.log('back'),
              }}
              forwardButton={{
                onClick: () => console.log('forward'),
              }}
            />
            <HeaderNavigationWithTitle
              sizeC="lg"
              title="Header Navigation With Title lg"
              backButton={{
                onClick: () => console.log('back'),
              }}
            />
            <section>
              <h2 className="text-xl font-bold mb-4">Basic FancyBox Comparison</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-700">Styled Components</h3>
                  <FancyBox themeType="primary" sizeC="md" layer={2}>
                    <p>Original FancyBox with styled-components</p>
                    <p className="text-sm mt-2 opacity-70">Using traditional CSS-in-JS approach</p>
                  </FancyBox>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-700">Tailwind CSS</h3>
                  <FancyBoxTw themeType="primary" sizeC="md" layer={2}>
                    <p>New FancyBoxTw with Tailwind CSS</p>
                    <p className="text-sm mt-2 opacity-70">Using utility-first CSS classes</p>
                  </FancyBoxTw>
                </div>
              </div>
            </section>

            {/* Different Theme Types */}
            <section>
              <h2 className="text-xl font-bold mb-4">Theme Variations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {(['primary', 'accent', 'secondary', 'info', 'success', 'warning', 'error'] as const).map((theme) => (
                  <div key={theme} className="space-y-2">
                    <h4 className="text-sm font-medium capitalize text-gray-600">{theme}</h4>
                    <FancyBoxTw themeType={theme} sizeC="sm" layer={1}>
                      <p className="text-center font-medium">{theme}</p>
                    </FancyBoxTw>
                  </div>
                ))}
              </div>
            </section>

            {/* Outlined Variations */}
            <section>
              <h2 className="text-xl font-bold mb-4">Outlined Styles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="text-sm font-medium mb-2 text-gray-600">Normal Outlined</h4>
                  <FancyBoxTw themeType="primary" sizeC="md" layer={5} outlined>
                    <p>Outlined with border</p>
                    <p className="text-xs mt-1 opacity-70">Standard outlined style</p>
                  </FancyBoxTw>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2 text-gray-600">No Border</h4>
                  <FancyBoxTw themeType="info" sizeC="md" layer={0} outlined outlinedRemoveBorder>
                    <p>Outlined without border</p>
                    <p className="text-xs mt-1 opacity-70">Subtle background only</p>
                  </FancyBoxTw>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2 text-gray-600">Custom Strength</h4>
                  <FancyBoxTw themeType="success" sizeC="md" layer={0} outlined outlinedBackgroundStrength={0.3}>
                    <p>Higher opacity background</p>
                    <p className="text-xs mt-1 opacity-70">Stronger background</p>
                  </FancyBoxTw>
                </div>
              </div>
            </section>

            {/* Size Variations */}
            <section>
              <h2 className="text-xl font-bold mb-4">Size Variations</h2>
              <div className="space-y-4">
                {(['xxs', 'xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
                  <div key={size} className="flex items-center space-x-4">
                    <div className="w-12 text-sm font-medium text-gray-600">{size}</div>
                    <FancyBoxTw themeType="primary" sizeC={size} layer={2} wide={false}>
                      <p>Size {size}</p>
                    </FancyBoxTw>
                  </div>
                ))}
              </div>
            </section>

            {/* Custom Spacing */}
            <section>
              <h2 className="text-xl font-bold mb-4">Custom Spacing (Numbers)</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="text-sm font-medium mb-2 text-gray-600">Small Padding (2)</h4>
                  <FancyBoxTw themeType="warning" layer={1} padding={2} borderRadius="sm">
                    <p>Compact padding</p>
                  </FancyBoxTw>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2 text-gray-600">Medium Padding (5)</h4>
                  <FancyBoxTw themeType="warning" layer={1} padding={5} borderRadius="md">
                    <p>Standard padding</p>
                  </FancyBoxTw>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2 text-gray-600">Large Padding (8)</h4>
                  <FancyBoxTw themeType="warning" layer={1} padding={8} borderRadius="lg">
                    <p>Generous padding</p>
                  </FancyBoxTw>
                </div>
              </div>
            </section>

            {/* Interactive States */}
            <section>
              <h2 className="text-xl font-bold mb-4">Interactive States</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium mb-2 text-gray-600">Hover Effects</h4>
                  <FancyBoxTw themeType="accent" layer={3} sizeC="md">
                    <p>Hover over me!</p>
                    <p className="text-xs mt-1 opacity-70">Background changes on hover</p>
                  </FancyBoxTw>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2 text-gray-600">Focused State</h4>
                  <FancyBoxTw themeType="info" layer={2} sizeC="md">
                    <p>I'm focused!</p>
                    <p className="text-xs mt-1 opacity-70">Has focus styling applied</p>
                  </FancyBoxTw>
                </div>
              </div>
            </section>

            {/* Transparent Style */}
            <section>
              <h2 className="text-xl font-bold mb-4">Transparent Style</h2>
              <div className="bg-gray-100 p-4 rounded-lg">
                <FancyBoxTw themeType="transparent" sizeC="lg" padding={6}>
                  <p className="text-lg font-semibold">Transparent Background</p>
                  <p className="text-sm mt-2">Adapts to light/dark themes automatically</p>
                  <p className="text-xs mt-1 opacity-70">Perfect for overlays and modals</p>
                </FancyBoxTw>
              </div>
            </section>

            {/* As Different Elements */}
            <section>
              <h2 className="text-xl font-bold mb-4">Different HTML Elements</h2>
              <div className="space-y-4">
                <FancyBoxTw as="article" themeType="primary" sizeC="md" layer={1}>
                  <h3 className="font-bold">Article Element</h3>
                  <p className="text-sm mt-1">FancyBoxTw rendered as an article tag</p>
                </FancyBoxTw>
                <FancyBoxTw as="section" themeType="secondary" sizeC="md" layer={2}>
                  <h3 className="font-bold">Section Element</h3>
                  <p className="text-sm mt-1">FancyBoxTw rendered as a section tag</p>
                </FancyBoxTw>
                <FancyBoxTw as="aside" themeType="info" sizeC="md" layer={1} outlined>
                  <h3 className="font-bold">Aside Element</h3>
                  <p className="text-sm mt-1">FancyBoxTw rendered as an aside tag with outline</p>
                </FancyBoxTw>
              </div>
            </section>

            {/* Migration Benefits */}
            <section className="bg-green-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4 text-green-800">Migration Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Performance</h4>
                  <ul className="space-y-1 text-green-600">
                    <li>• No runtime CSS generation</li>
                    <li>• Smaller bundle size</li>
                    <li>• Better caching</li>
                    <li>• Faster rendering</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Developer Experience</h4>
                  <ul className="space-y-1 text-green-600">
                    <li>• Better IntelliSense</li>
                    <li>• Easier debugging</li>
                    <li>• Consistent spacing system</li>
                    <li>• Numbered sizing (0-10)</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </DesignArea>

        <DesignArea title="FancySearchSelect Examples">
          <FancySearchSelectExample />
        </DesignArea>
      </DesignWrapper>
    </>
  );
}

const defaultProps = [
  { label: 'hi1', value: 'hi1', itemKey: '1' },
  { label: 'hi2', value: 'hi2', itemKey: '2' },
  { label: 'hi3', value: 'hi3', itemKey: '3' },
  { label: 'hi4', value: 'hi4', itemKey: '4' },
];

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
