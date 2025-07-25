// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyProfilePicture from './FancyProfilePicture';
// Define metadata for the story
const meta = {
  component: FancyProfilePicture,
  title: 'components/atoms/FancyProfilePicture',
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
    borderRadius: {
      type: {
        name: 'string',
        required: false,
      },
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'complete', undefined, 'none'],
      table: {
        defaultValue: { summary: 'complete' },
      },
    },
    sizeC: {
      control: { type: 'select' },
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
    children: {
      control: { type: 'object' },
      description: 'The children of the image.',
    },
    nickname: {
      control: { type: 'text' },
      description: 'The alt text of the image is used as a placeholder if no image is provided.',
      table: {
        defaultValue: { summary: 'User' },
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
    children: <img src="https://avatars.githubusercontent.com/u/54409958?v=4" alt="profile" />,
    borderRadius: 'complete',
    sizeC: 'md',
    nickname: 'User',
  },
};

export const Avatar: Story = {
  render: (args) => <FancyProfilePicture {...args} />,
  args: {
    borderRadius: 'complete',
    sizeC: 'md',
    nickname: 'User',
    textAvatarSettings: {
      sizeC: 'md',
      borderRadius: 'complete',
      themeType: 'secondary',
    },
  },
};
