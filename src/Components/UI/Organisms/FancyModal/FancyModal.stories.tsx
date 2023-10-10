// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyModal from './FancyModal';


// Define metadata for the story
const meta = {
  component: FancyModal,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: A fancy dropdown select with label, icon and error message and more',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    
  },
  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof FancyModal>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyModal {...args} />,
  args: {


  },
};
