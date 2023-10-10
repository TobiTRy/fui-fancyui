// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyLoadingSpinner from './FancyLoadingSpinner';
// Define metadata for the story
const meta = {
  component: FancyLoadingSpinner,

  parameters: {
    docs: {
      description: {
        component: 'FancyLooadingSpinner that indicates loading and can be dynamicly adjusted in the size.',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof FancyLoadingSpinner>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyLoadingSpinner {...args} />,
  args: {

  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
