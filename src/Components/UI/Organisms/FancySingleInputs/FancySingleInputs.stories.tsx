// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancySingleInputs from './FancySingleInputs';


// Define metadata for the story
const meta = {
  component: FancySingleInputs,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: The FancyPasswordInput Comonent with surrounding icon, label and underline',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    handler: {
      description: 'Callback function for the search value',
      control: {
        type: 'function',
      },
    },
    length: {
      description: 'The length of the input',
      control: {
        type: 'number',
      },
      defaultValue: {
        summary: '6',
      },
    },
    keyCode: {
      description: 'The keyCode of the input',
      control: {
        type: 'text',
      },
    },



  },
  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof FancySingleInputs>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancySingleInputs {...args} />,
  args: {
    length: 6,
    keyCode: '123456',
  },
};
