// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyProfilePicture from './FancyProfilePicture';
// Define metadata for the story
const meta = {
  component: FancyProfilePicture,

  parameters: {
    docs: {
      description: {
        component:
          'The FancyProfilePicture component is a fancy profile picture that can be dynamicly adjusted in size and roundedness.',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    rounded: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'complete'],
    },
    size: {
      control: { type: 'select' },
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
    src: {
      control: { type: 'text' },
      description: 'The source of the image.',
    },
    alt: {
      control: { type: 'text' },
      description: 'The alt text of the image is used as a placeholder if no image is provided.',
      defaultValue: {
        summary: 'Profile',
      },
    },
    letterLength: {
      control: { type: 'number' },
      description: 'The amount of letters to be displayed in the placeholder.',
      defaultValue: {
        summary: 2,
      },
    },
    layer: {
      control: { type: 'range', min: 1, max: 10, step: 1 },
      description: 'The layer of the image.',
      defaultValue: {
        summary: 3,
      },
    },
    themeType: {
      control: { type: 'select' },
      description: 'The themeType of the image.',
      defaultValue: {
        summary: 'primary',
      },
    },
  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof FancyProfilePicture>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyProfilePicture {...args} />,
  args: {
    src: 'https://avatars.githubusercontent.com/u/54409958?v=4',
    rounded: 'complete',
    size: 'md',
    alt: 'Profile',
    letterLength: 2,
    layer: 3,
    themeType: 'primary',
  },
};

export const Avatar: Story = {
  render: (args) => <FancyProfilePicture {...args} />,
  args: {
    rounded: 'complete',
    size: 'md',
    alt: 'Profile',
    letterLength: 2,
    layer: 3,
    themeType: 'primary',
  },
};
