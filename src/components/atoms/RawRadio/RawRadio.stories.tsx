// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import RawRadio from './RawRadio';

// Define metadata for the story
const meta = {
  component: RawRadio,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: The RawRadio Renders only a Styled Radio Button.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    checked: {
      description: 'The checked state of the radio button',
      control: {
        type: 'boolean',
      },
    },
    tabIndex: {
      description: 'The tabIndex of the radio button',
      control: {
        type: 'number',
      },
    },
  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof RawRadio>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <RawRadio {...args} />,
  args: {
    checked: false,
    tabIndex: 0,
    name: 'radio',
  },

  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
