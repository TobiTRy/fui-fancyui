// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import RawInput from './RawInput';

// Define metadata for the story
const meta = {
  component: RawInput,
  title: 'components/atoms/RawInput',
  parameters: {
    docs: {
      description: {
        component:
          'The RawInput component is a customizable input field designed for React applications that require a clean, minimalistic input style. It allows for text alignment and external CSS customization through props, making it highly adaptable for various UI designs.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    placeholder: {
      description: 'Define the placeholder of the input field',
      control: {
        type: 'text',
      },
    },
    value: {
      description: 'Define the value of the input field',
      control: {
        type: 'text',
      },
    },
    $externalStyle: {
      description: 'Define the external style of the input field',
      control: {
        type: 'object',
      },
    },
    $align: {
      description: 'Define the text alignment of the input field, `left`, `center`',
      type: {
        name: 'string',
        required: false,
      },
      control: {
        type: 'radio',
        options: ['left', 'center'],
      },
      table: {
        defaultValue: { summary: 'left' },
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
    value: 'Test',
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
