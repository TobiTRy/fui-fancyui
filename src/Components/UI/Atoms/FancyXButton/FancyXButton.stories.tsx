// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyXButton from './FancyXButton';

// Define metadata for the story
const meta = {
  component: FancyXButton,
  parameters: {
    docs: {
      description: {
        component: 'FancyVr that can be dynamicly adjusted in the size.',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    

  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof FancyXButton>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyXButton {...args}/>,
  args: {
    themeType: 'secondary',

  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
