// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import RawCheckbox from './RawCheckbox';

// Define metadata for the story
const meta = {
  component: RawCheckbox,
  parameters: {
    docs: {
      description: {
        component:
          'The RawCheckbox is a simple component to display the checkbox. <br> - It has a defaultChecked prop to define the default checked of the checkbox <br> - It has a onClick prop to define the onClick function',
      },
    },
  },
  // Define arguments for the story
  argTypes: {},

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof RawCheckbox>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <RawCheckbox {...args} />,
  args: {
    defaultChecked: true,
    onClick: () => console.log('click'),
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
