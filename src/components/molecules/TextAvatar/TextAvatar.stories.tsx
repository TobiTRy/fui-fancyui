// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import { TextAvatar } from '@/components/molecules/TextAvatar';
// Define metadata for the story
const meta = {
  component: TextAvatar,

  parameters: {
    docs: {
      description: {
        component:
          'A Text Avatar that displays the first two letters and more of a text in a circle. The sizeC and roundedness can be adjusted. ',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    rounded: {
      description: 'The roundedness of the image.',
      control: { type: 'select' },
      defaultValue: {
        summary: 'md',
      },
    },
    sizeC: {
      description: 'The sizeC of the image.',
      control: { type: 'select' },
      defaultValue: {
        summary: 'md',
      },
    },
    text: {
      control: { type: 'text' },
      description: 'The source of the image.',
    },
    letterLength: {
      control: { type: 'number' },
      description: 'The amount of letters to be displayed.',
      defaultValue: {
        summary: 2,
      },
    },
    fontSizes: {
      control: { type: 'select' },
      description: 'The font sizeC of the displayed text.',
    },
    externalStyle: {
      control: { type: 'text' },
      description: 'The externalStyle of the image.',
    },
    themeType: {
      control: { type: 'select' },
      description: 'The theme type of the image.',
      defaultValue: {
        summary: 'primary',
      },
    },
    layer: {
      control: { type: 'number' },
      description: 'The layer of the image.',
      defaultValue: {
        summary: 2,
      },
    },
    color: {
      control: { type: 'color' },
      description: 'The color of the image.',
    },
    backgroundColor: {
      control: { type: 'color' },
      description: 'The background color of the image.',
    },
  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof TextAvatar>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <TextAvatar {...args} />,
  args: {
    text: 'https://avatars.githubusercontent.com/u/54409958?v=4',
    rounded: 'complete',
    sizeC: 'md',
    themeType: 'primary',
  },
};
