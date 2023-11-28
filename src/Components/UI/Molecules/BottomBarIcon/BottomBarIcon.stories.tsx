// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';
import SVGCheckMark from '../../SVGIcons/SVGCheckMark/SVGCheckMark';
// Import the component to be tested
import BottomBarIcon from './BottomBarIcon';
// Define metadata for the story
const meta = {
  component: BottomBarIcon,
  parameters: {
    docs: {
      description: {
        component: 'The BottomBarIcon component is for displaying a bottom bar icon like.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      defaultValue: {
        summary: false,
      },
    },
    label: {
      control: { type: 'text' },
      defaultValue: {
        summary: 'Label',
      },
    },
    icon: {
      control: { type: 'object' },
    },
    isActive: {
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
  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof BottomBarIcon>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <BottomBarIcon {...args} />,
  args: {
    label: 'Label',
    disabled: false,
    themeType: 'secondary',
    layer: 0,
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
