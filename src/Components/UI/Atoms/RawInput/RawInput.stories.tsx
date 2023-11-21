// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import RawInput from './RawInput';

// Define metadata for the story
const meta = {
  component: RawInput,
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    placeholder: {
      control: {
        type: 'text',
      },
    },
    value: {
      control: {
        type: 'text',
      },
    },
    onChange: {
      control: {
        type: 'function',
      },
    },
  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof RawInput>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <RawInput {...args} />,
  args: {
    placeholder: 'Placeholder',
    value: '',
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => console.log(event.target.value),
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
