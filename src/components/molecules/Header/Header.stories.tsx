import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Header from './Header';
import { HeaderTitleWithLogo } from '../HeaderTitleWithLogo';
import { FancySearchBar } from '../../organisms/FancySearchBar';
import { FancyMiniProfile } from '../FancyMiniProfile';
import { css } from 'styled-components';

const meta = {
  component: Header,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: A simple header that can be self designd with the help of the theme.',
      },
    },
  },
  argTypes: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

const headerStyle = css`
  position: fixed;
  top: 10px;
  width: 80%;
  padding: 12px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
`;

export const Primary: Story = {
  render: (args) => (
    <Header {...args} externalStyle={headerStyle}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%' }}>
        <HeaderTitleWithLogo title="Let´sTryIt" />
      </div>
      <FancySearchBar />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '100%' }}>
        <FancyMiniProfile
          alignText="left"
          headingText="@TobiTRy"
          imageURL="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
        />
      </div>
    </Header>
  ),
  args: {
    themeType: 'primary',
    outlined: false,
    layer: 1,
    outlinedBackgroundStrength: 0.5,
    children: 'Header',
  },
};
