// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyActionWrapper from '../FancyActionWrapper';

// Define metadata for the story
const meta = {
  component: FancyActionWrapper,
  parameters: {
    layout: 'centered',
  },

  // Define arguments for the story
  argTypes: {
    as: {
      description: 'The element type to render',
      control: {
        type: 'text',
      },
      defaultValue: {
        summary: 'div',
      },
    },
    children: {
      description: 'The content of the component',
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof FancyActionWrapper>;

// Export the metadata
export default meta;

// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyActionWrapper {...args} />,
  args: {
    children: 'mooiiin',
  },
  parameters: {
    docs: {
      description: {
        story: 'mooiiin',
      },
    },
  },
};
