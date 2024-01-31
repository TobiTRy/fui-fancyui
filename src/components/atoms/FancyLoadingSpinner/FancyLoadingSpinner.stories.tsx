// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyLoadingSpinner from './FancyLoadingSpinner';
// Define metadata for the story
const meta = {
  component: FancyLoadingSpinner,

  parameters: {
    docs: {
      description: {
        component: 'FancyLooadingSpinner that indicates loading and can be dynamicly adjusted in the sizeC.',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    themeType: {
      description: 'The theme type of the component.',
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'accent', 'neutral'],
      },
    },
    sizeC: {
      description: 'The sizeC of the component.',
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
      },
    },
    layer: {
      description: 'The layer of the component.',
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 1,
      },
    },
  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof FancyLoadingSpinner>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyLoadingSpinner {...args} />,
  args: {
    themeType: 'accent',
    sizeC: 'md',
    layer: 0,
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
