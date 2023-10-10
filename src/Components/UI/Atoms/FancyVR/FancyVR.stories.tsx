// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyVR from './FancyVR';

// Define metadata for the story
const meta = {
  component: FancyVR,
  parameters: {
    docs: {
      description: {
        component: 'FancyVr that can be dynamicly adjusted in the size.',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    $themeType: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'accent'],
    },
    $layer: {
      control: { type: 'range', min: 1, max: 10, step: 1 },
    },

  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof FancyVR>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyVR {...args}/>,
  args: {
    $themeType: 'accent',
    $layer: 1,
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
