// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyLI from './FancyLI';
// Define metadata for the story
const meta = {
  component: FancyLI,

  parameters: {
    docs: {
      description: {
        component: 'Fancy LI Item that can be dynamicly adjusted in size and alignment.',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    aligned: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof FancyLI>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyLI {...args} />,
  args: {
    children: <h1 style={{ margin: 0 }}>Huuu</h1>,
    size: 'md',
    aligned: 'left',
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
