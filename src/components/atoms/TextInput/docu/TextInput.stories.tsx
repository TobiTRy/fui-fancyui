// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import TextInput from '../TextInput';

// Define metadata for the story
const meta = {
  component: TextInput,
  title: 'components/atoms/TextInput',
  parameters: {
    docs: {
      description: {
        component:
          'The `TextInput` component is a React component designed to accept user input. It provides a simple, customizable input field that can be used to collect text-based data.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    value: {
      description: 'The value of the input.',
      type: { name: 'string' },
    },
    align: {
      description: 'The alignment of the text.',
      control: { type: 'select' },
      options: ['left', 'center'],
      defaultValue: {
        summary: 'left',
      },
    },
  },
  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof TextInput>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <TextInput {...args} />,
  args: {
    value: 'This is a text input',
  },
};
