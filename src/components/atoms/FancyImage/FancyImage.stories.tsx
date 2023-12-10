// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyImage from './FancyImage';
// Define metadata for the story
const meta = {
  component: FancyImage,

  parameters: {
    docs: {
      description: {
        component:
          'A FancyImage component is a styled image component that can be used to display images in a fancy way.',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    darken: {
      control: { type: 'boolean' },
    },
    alt: {
      control: { type: 'text' },
    },
    imageUrl: {
      control: { type: 'text' },
    },
  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof FancyImage>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyImage {...args} />,
  args: {
    imageUrl: 'https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg',
    aspectRatio: '2/4',
    alt: 'Fannncy',
    darken: false,
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};