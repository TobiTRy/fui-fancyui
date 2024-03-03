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
          'The FancyProfilePicture component is a fancy profile picture that can be dynamicly adjusted in sizeC and roundedness.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    rounded: {
      type: {
        name: 'string',
        required: false,
      },
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'complete', undefined, 'none'],
      defaultValue: {
        summary: 'complete',
      },
    },
    sizeC: {
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
    externalStyle: {
      control: { type: 'text' },
      description: 'The externalStyle of the image.',
    },
    textAvatarSettings: {
      control: { type: 'object' },
      description: 'The textAvatarSettings of the image, the props of the AvatarTextImage component.',
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
    sizeC: 'md',
    alt: '',
  },
};

export const Avatar: Story = {
  render: (args) => <FancyProfilePicture {...args} />,
  args: {
    rounded: 'complete',
    sizeC: 'md',
    alt: '',
    textAvatarSettings: {
      sizeC: 'md',
      rounded: 'complete',
      themeType: 'secondary',
    },
  },
};
