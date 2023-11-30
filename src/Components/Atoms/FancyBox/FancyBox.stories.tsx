// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyBox from './FancyBox';
import { css } from 'styled-components';
import { FancyMiniProfile } from '../../molecules/FancyMiniProfile';
import { HeaderTitleWithLogo } from '../../molecules/HeaderTitleWithLogo';
import { FancyBottomBarIcon } from '../../Templates/FancyBottomBarIcon';
import SVGCheckMark from '../../SVGIcons/SVGCheckMark/SVGCheckMark';
import React from 'react';
import { FancySearchBar } from '../../organisms/FancySearchBar';

// Define metadata for the story
const meta = {
  component: FancyBox,

  parameters: {
    docs: {
      description: {
        component:
          'The FancyCard component is for displaying a card that can fill with somthing, it can be used for displaying content in a card <br> - height: the height of the card <br> - width: the width of the card <br> - themeType: the theme type of the card <br> - layer: the layer of the card <br> - textLayer: the layer of the text <br> - roundedEdges: the rounded edges of the card <br> - shadow: is the card shadowed',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    themeType: {
      description: 'The theme type of the card',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'primary',
      },
    },
    layer: {
      description: 'The layer of the card',
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 1,
      },
      defaultValue: {
        summary: 3,
      },
    },
    outlined: {
      description: 'Is the card outlined',
      control: {
        type: 'boolean',
      },
      defaultValue: {
        summary: false,
      },
    },
    outlinedBackgroundStrength: {
      description: 'The background strength of the outlined card',
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.1,
      },
      defaultValue: {
        summary: 0.5,
      },
    },
    externalStyle: {
      description: 'The style of the card can porvieed with the styled-component css and react style={{width: "100px"}}',
      control: {
        type: 'object',
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
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
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
          alignText="left"
          headingText="@TobiTRy"
          imageURL="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
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
  padding: 12px 8px 0px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px 12px 0 0;
`;

const BottomBarComponent = (args: React.ComponentProps<typeof FancyBox>) => {
  const [wichIsActive, setWichIsActive] = React.useState('0');

  return (
    <FancyBox {...args} externalStyle={BottomBarStyle}>
      <FancyBottomBarIcon icon={<SVGCheckMark />} label="Test" isActive={wichIsActive === '0'} onClick={() => setWichIsActive('0')} />
      <FancyBottomBarIcon icon={<SVGCheckMark />} label="Test" isActive={wichIsActive === '1'} onClick={() => setWichIsActive('1')} />
      <FancyBottomBarIcon icon={<SVGCheckMark />} label="Test" isActive={wichIsActive === '2'} onClick={() => setWichIsActive('2')} />
      <FancyBottomBarIcon icon={<SVGCheckMark />} label="Test" isActive={wichIsActive === '3'} onClick={() => setWichIsActive('3')} />
    </FancyBox>
  );
};

export const BottomBar: Story = {
  render: (args) => <BottomBarComponent {...args} />,
  args: {},
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
