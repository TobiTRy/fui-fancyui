// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import PasswordEye from './PasswordEye';

// Define metadata for the story
const meta = {
  component: PasswordEye,
  parameters: {
    docs: {
      description: {
        component:
          'The PasswordEye is a simple component to toggle the password visibility. <br> - It has a isShow prop to define if the password is shown <br> - It has a onClick prop to define the onClick function',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    isShow: {
      description: 'Define if the password is shown',
      control: {
        type: 'boolean',
      },
    },
  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof PasswordEye>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <PasswordEye {...args} />,
  args: {
    isShow: false,
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
