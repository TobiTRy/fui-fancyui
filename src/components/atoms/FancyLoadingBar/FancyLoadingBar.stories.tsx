// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyLoadingBar from './FancyLoadingBar';
// Define metadata for the story
const meta = {
  component: FancyLoadingBar,

  parameters: {
    docs: {
      description: {
        component: 'Fancy LI Item that can be dynamicly adjusted in size and alignment.',
      },
    },
  },

  // Define arguments for the story
  argTypes: {},

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof FancyLoadingBar>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyLoadingBar {...args} />,
  args: {},
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
