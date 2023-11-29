// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import SimpleDialog from './SimpleDialog';

// Define metadata for the story
const meta = {
  component: SimpleDialog,
  parameters: {
    docs: {
      description: {
        component: 'A ScrollableBar component, when the content is too wide to fit in the screen, it will be scrollable',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    layer: {
      control: {
        type: 'range',
        min: 1,
        max: 10,
        step: 1,
      },
    },
    themeType: {
      control: {
        type: 'select',
      },
    },
  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof SimpleDialog>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <SimpleDialog {...args} />,
  args: {
    isOpen: true,
    children: 'Test',
    layer: 1,
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
