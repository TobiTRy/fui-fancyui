import type { Meta, StoryObj } from '@storybook/react';

import Header from '../Header';
import { HeaderTitleWithLogo } from '../../HeaderTitleWithLogo';
import { FancySearchBar } from '../../../organisms/FancySearchBar';
import { FancyMiniProfile } from '../../FancyMiniProfile';
import { css } from 'styled-components';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

const meta = {
  component: Header,
  title: 'components/atoms/Header',
  parameters: {
    docs: {
      description: {
        component:
          'The `Header` component is a versatile and customizable header element designed for React applications. It utilizes the `generateThemeForCard` function to dynamically generate theme styles based on provided properties. This component supports extensive customization options, including theme types, layers, outline characteristics, and external styles, allowing for a completely tailored header appearance.',
      },
    },
  },
  argTypes: {
    ...templateThemeType('allThemeTypes', 'primary', 1),
    outlined: {
      description: 'If true, the header will have an outline',
      control: {
        type: 'boolean',
      },
    },
    outlinedBackgroundStrength: {
      description: 'The strength of the background when the header is outlined',
      control: {
        type: 'number',
        min: 0,
        max: 1,
        step: 0.1,
      },
    },
    externalStyle: {
      description: 'External style for the header.',
      control: {
        type: 'object',
      },
    },
  },
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
          alignImage="left"
          title="@TobiTRy"
          subTitle="Tobias TRy is cool"
          src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
        />
      </div>
    </Header>
  ),
  args: {
    themeType: 'primary',
    outlined: false,
    layer: 1,
    outlinedBackgroundStrength: 0.5,
  },
};
