// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyVideo from '../FancyVideo';

// Define metadata for the story
const meta = {
  component: FancyVideo,
  title: 'components/atoms/FancyVideo',
  parameters: {
    docs: {
      description: {
        component:
          'The FancyVideo component is designed to embed video content within your React application with enhanced styling and functionality options. It supports custom aspect ratios, autoplay, muting, and a darkening effect for a more immersive viewing experience. This component is part of a collection of atomic components aimed at providing a versatile set of UI tools for building interactive and engaging web applications.',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    muted: {
      description: 'Specifies whether the video should play automatically on load.',
      control: { type: 'boolean' },
      defaultValue: {
        summary: false,
      },
    },
    autoPlay: {
      control: { type: 'boolean' },
      description:
        'Controls whether the video is muted. When autoPlay is true, muted defaults to true to comply with browser autoplay policies.',
      defaultValue: {
        summary: false,
      },
    },
    aspectRatio: {
      description: 'The aspect ratio of the video. This should be a string in the format "16/9".',
      control: { type: 'text' },
    },
    darken: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
      description:
        'Applies a darkening filter over the video to reduce brightness by 50%. Useful for overlay text or creating a moody atmosphere.',
    },
    children: {
      description: 'The video content to be displayed. This can be any React node.',
    },
  },
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
