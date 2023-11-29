// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import SliderMarker from './SliderMarker';

// Define metadata for the story
const meta = {
  component: SliderMarker,
  parameters: {
    docs: {
      description: {
        component: 'A Marker component to display the position on the slider',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    position: {
      description: 'The position of the marker on the slider',
      control: {
        type: 'text',
      },
    },
  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof SliderMarker>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <SliderMarker {...args} />,
  args: {
    position: '50%',
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
