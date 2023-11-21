// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import { CheckerBoardPattern } from '.';

// Define metadata for the story
const meta = {
  component: CheckerBoardPattern,
  parameters: {
    docs: {
      description: {
        component: 'The CheckerBoardPattern component is a Gradient pattern that can be used as a background for other components.',
      },
    },
  },

  // Define arguments for the story
  argTypes: {},

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof CheckerBoardPattern>;

// Export the metadata
export default meta;

// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <CheckerBoardPattern {...args} />,
  args: {
    opacity: 1,
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
