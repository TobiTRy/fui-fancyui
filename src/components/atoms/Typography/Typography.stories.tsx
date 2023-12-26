// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import Typography from './Typography';

// Define metadata for the story
const meta = {
  component: Typography,
  parameters: {
    docs: {
      description: {
        component: 'The Typography component can render differnet elements with different styles',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    type: {
      description: 'The elemnt type of the typography',
      control: {
        type: 'select',
      },
    },
    variant: {
      description: 'The variant how the typography should look like',
      control: {
        type: 'select',
      },
    },
    className: {
      description: 'The className for the typography',
      control: {
        type: 'text',
      },
    },
    themeType: {
      description: 'The theme type for the typography',
      control: {
        type: 'select',
      },
    },
    layer: {
      description: 'The layer for the typography',
      control: {
        type: 'select',
      },
    },
  },
  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <Typography {...args}>{args.children}</Typography>,
  args: {
    children: 'I need something to eat, i think i will eat a pizza',
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
