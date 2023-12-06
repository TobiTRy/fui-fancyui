// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import SwipeUpDash from './SwipeUpDash';

// Define metadata for the story
const meta = {
  component: SwipeUpDash,
  parameters: {
    docs: {
      description: {
        component: 'SwipeUpDash is a simple horizontal line',
      },
    },
  },
  // Define arguments for the story
  argTypes: {},
  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof SwipeUpDash>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <SwipeUpDash {...args} />,
  args: {},
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
