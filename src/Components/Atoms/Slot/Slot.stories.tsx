// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import Slot from './Slot';
// Define metadata for the story
const meta = {
  component: Slot,
  parameters: {
    docs: {
      description: {
        component: 'A ScrollableBar component, when the content is too wide to fit in the screen, it will be scrollable',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    children: {
      description: 'The content to be displayed in the slot',
      control: {
        type: 'text',
      },
    },
    align: {
      description: 'The alignment of the content in the slot',
      control: {
        type: 'select',
      },
    },
    grow: {
      description: 'The Flex grow factor of the slot',
      control: {
        type: 'number',
      },
    },
  },
  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof Slot>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <Slot {...args} />,
  args: {
    children: 'Iam only a dummy',
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
