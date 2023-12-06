// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyVideo from './FancyVideo';

// Define metadata for the story
const meta = {
  component: FancyVideo,
  parameters: {
    docs: {
      description: {
        component: 'FancyLooadingSpinner that indicates loading and can be dynamicly adjusted in the size.',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    src: {
      control: { type: 'text' },
    },
    controls: {
      control: { type: 'boolean' },
    },
    loop: {
      control: { type: 'boolean' },
    },
    muted: {
      control: { type: 'boolean' },
    },
    autoPlay: {
      control: { type: 'boolean' },
    },
    darken: {
      control: { type: 'boolean' },
    },
    poster: {
      control: { type: 'text' },
    },
  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof FancyVideo>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyVideo {...args} />,
  args: {
    aspectRatio: '16/9',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    controls: true,
    loop: false,
    muted: false,
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
