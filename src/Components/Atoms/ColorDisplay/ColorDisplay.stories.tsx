// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import ColorDisplay from './ColorDisplay';
// Define metadata for the story
const meta = {
  component: ColorDisplay,
  parameters: {
    docs: {
      description: {
        component: 'The ColorDisplay component is for displaying a color with a text label and the color and it can be copyd on click',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    color: {
      control: { type: 'color' },
    },
    opacity: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
    },
    fullHeight: {
      control: { type: 'boolean' },
    },
    showText: {
      control: { type: 'boolean' },
    },
  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof ColorDisplay>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <ColorDisplay {...args} />,
  args: {
    color: 'red',
    opacity: 1,
    fullHeight: false,
    showText: true,
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
