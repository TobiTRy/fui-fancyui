// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import ColorIndicator from './ColorIndicator';
// Define metadata for the story
const meta = {
  title: 'components/atoms/ColorIndicator',
  component: ColorIndicator,
  parameters: {
    docs: {
      description: {
        component:
          'The ColorIndicator component is for displaying a color, its can be used to show the color of a color picker and move with the position of the mouse',
      },
    },
  },

  // Define arguments for the story
  argTypes: {},

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof ColorIndicator>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <ColorIndicator {...args} />,
  args: {
    color: 'red',
    isActive: true,
    position: { x: '50%', y: '50%' },
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
