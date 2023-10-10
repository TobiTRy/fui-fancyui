// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyHeader from './FancyHeader';

import SVGCheckMark from '../../SVGIcons/SVGCheckMark';
import { FancyMiniProfile } from '../../Molecules/FancyMiniProfile';
import { ISimpleHeader } from '../../Molecules/SimpleHeader/SimpleHeader.model';
import { useState } from 'react';

// Define metadata for the story
const meta = {
  component: FancyHeader,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: A fancy dropdown select with label, icon and error message and more',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    themeType: {
      description: 'Theme type of the input',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'primary',
      },
    },
    layer: {
      description: 'Layer of the input',
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 1,
      },
      defaultValue: {
        summary: 1,
      },
    },
    headerHeight: {
      description: 'Height of the header',
      control: {
        type: 'text',
      },
      defaultValue: {
        summary: '3rem',
      },
    },
    spacingLeftRight: {
      description: 'Spacing left and right of the header',
      control: {
        type: 'text',
      },
      defaultValue: {
        summary: '0',
      },
    },
  },
  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof FancyHeader>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;


const RightSlot = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div onClick={onClick} style={{ display: 'flex', alignItems: 'center' }}>
      <FancyMiniProfile
        alignText="left"
        headingText="@TobiTRy"
        imageURL="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
      />
    </div>
  );
};


function FancyHeaderStory(props: ISimpleHeader) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FancyHeader {...props} />
  )
}


// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyHeaderStory {...args} />,
  args: {
    rightSlot: {
      component: <RightSlot/>,
      scale: 1,
    },
  },
};
