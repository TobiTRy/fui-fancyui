// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';
import SVGCheckMark from '../../SVGIcons/SVGCheckMark';
// Import the component to be tested
import FancyBottomBarIcon from './FancyBottomBarIcon';
// Define metadata for the story
const meta = {
  component: FancyBottomBarIcon,
  parameters: {
    docs: {
      description: {
        component:
          'The FancyBottomBarIcon component is for displaying a fancy bottom bar icon, it can be used for displaying a navivation button in da navigation bar.',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    type: {
      control: { type: 'select' },
      defaultValue: {
        summary: 'a',
      },
    },
    href: {
      control: { type: 'text' },
    },
    isActive: {
      control: { type: 'boolean' },
      defaultValue: {
        summary: false,
      },
    },
    label: {
      control: { type: 'text' },
    },
    layer: {
      control: { type: 'range', min: 0, max: 10, step: 1 },
      defaultValue: {
        summary: 1,
      },
    },
    onClick: {
      control: { type: 'function' },
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: {
        summary: false,
      },
    },
    themeType: {
      control: { type: 'select' },
      defaultValue: {
        summary: 'secondary',
      },
    },
    icon: {
      control: { type: 'object' },
    },
  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof FancyBottomBarIcon>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyBottomBarIcon {...args} />,
  args: {
    type: 'a',
    href: 'https://www.google.com',
    isActive: false,
    label: 'Label',
    disabled: false,
    themeType: 'secondary',
    layer: 1,
    icon: <SVGCheckMark />,
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
