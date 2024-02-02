// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import { TextGradient } from '@/components/atoms/TextGradient';
import { Typography } from '@/components/atoms/Typography';

// Define metadata for the story
const meta = {
  component: TextGradient,
  parameters: {
    docs: {
      description: {
        component: 'SwipeUpDash is a simple horizontal line',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    colors: {
      description: 'The colors of the gradient.',
      control: { type: 'object' },
    },
    orientation: {
      description: 'The orientation of the gradient.',
      control: { type: 'select' },
    },
    position: {
      description: 'The position of the gradient.',
      control: { type: 'select' },
    },
    degree: {
      description: 'The degree of the gradient.',
      control: { type: 'number' },
    },
  },
  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof TextGradient>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <TextGradient {...args} />,
  args: {
    colors: [
      {
        color: 'red',
        stop: '15%',
      },
      {
        color: 'blue',
        stop: '50%',
      },
    ],
    orientation: 'linear',
    position: 'top-left',
    children: <Typography variant="displayHeadline">FUIIIIII</Typography>,
  },
};
