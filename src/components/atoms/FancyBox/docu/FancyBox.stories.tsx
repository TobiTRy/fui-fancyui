// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

// Import the component to be tested
import FancyBox from '../FancyBox';
import { css } from 'styled-components';
import { FancyMiniProfile } from '../../../molecules/FancyMiniProfile';
import { HeaderTitleWithLogo } from '../../../molecules/HeaderTitleWithLogo';
import { FancyBottomBarIcon } from '../../../templates/FancyBottomBarIcon';
import SVGCheckMark from '../../../icons/SVGCheckMark/SVGCheckMark';
import { FancySearchBar } from '../../../organisms/FancySearchBar';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

// Define metadata for the story
const meta = {
  component: FancyBox,
  title: 'components/atoms/FancyBox',
  parameters: {
    docs: {
      description: {
        component:
          'I have given this a lot of thought, and I am a great enthusiast of customizable components. In the present times, there is an abundance of excellent headers and bottom bars, and I believe developers should have the liberty to design interfaces as they imagine. Therefore, I developed the FancyBox. It primarily offers the theme for a component, leaving the rest to your creativity. You can effortlessly integrate your styles using inline styles, and they will be added to the existing class. Whether you are designing a side nav, a header, or a bottom bar, FancyBox has everything you need.',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    ...templateThemeType('allThemeTypes', 'primary', 0),
    as: {
      description:
        'This property allows developers to change the HTML tag of the component. For example, if you want to use a div instead of',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: 'div' },
      },
    },
    outlined: {
      description: 'A boolean indicating whether the bar is styled with an outline.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    outlinedRemoveBorder: {
      description: 'A boolean indicating whether the border should be removed when outlined is true.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    outlinedBackgroundStrength: {
      description: 'Controls the background intensity when outlined is true.',
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.1,
      },
      table: {
        defaultValue: { summary: 0.5 },
      },
    },
    externalStyle: {
      description:
        'The style of the card can porvieed with the styled-component css and react style={{width: "100px"}}',
      control: {
        type: 'object',
      },
    },
    sizeC: {
      description: 'The size of the component.',
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: undefined },
      },
    },
    borderRadius: {
      description: 'The border radius of the component.',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: undefined },
      },
    },
    hoverLayer: {
      layer: {
        description: 'The hoverlayer of the component',
        control: { type: 'range', min: 0, max: 9 },
        table: {
          defaultValue: { summary: undefined },
        },
      },
    },
  },
} satisfies Meta<typeof FancyBox>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyBox {...args}>Hiii</FancyBox>,
  args: {},
};

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

export const Header: Story = {
  render: (args) => (
    <FancyBox {...args} externalStyle={headerStyle}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%' }}>
        <HeaderTitleWithLogo title="Let´sTryIt" />
      </div>
      <FancySearchBar />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '100%' }}>
        <FancyMiniProfile
          alignImage="left"
          title="@TobiTRy"
          Image={
            <img src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg" />
          }
        />
      </div>
    </FancyBox>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};

const BottomBarStyle = css`
  position: fixed;
  bottom: 10px;
  width: 100%;
  padding: 12px 8px 12px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px 12px 0 0;
`;

const BottomBarComponent = (args: Story['args']) => {
  const [wichIsActive, setWichIsActive] = React.useState('0');

  return (
    <FancyBox {...args} externalStyle={BottomBarStyle}>
      <FancyBottomBarIcon
        icon={<SVGCheckMark />}
        label="Test"
        isActive={wichIsActive === '0'}
        onClick={() => setWichIsActive('0')}
      />
      <FancyBottomBarIcon
        icon={<SVGCheckMark />}
        label="Test"
        isActive={wichIsActive === '1'}
        onClick={() => setWichIsActive('1')}
      />
      <FancyBottomBarIcon
        icon={<SVGCheckMark />}
        label="Test"
        isActive={wichIsActive === '2'}
        onClick={() => setWichIsActive('2')}
      />
      <FancyBottomBarIcon
        icon={<SVGCheckMark />}
        label="Test"
        isActive={wichIsActive === '3'}
        onClick={() => setWichIsActive('3')}
      />
    </FancyBox>
  );
};

export const BottomBar: Story = {
  render: (args) => <BottomBarComponent {...args} />,
  args: {
    externalStyle: {
      paddingBottom: '12px',
    },
  },
};
