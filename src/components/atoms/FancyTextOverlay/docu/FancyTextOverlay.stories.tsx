// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyTextOverlay from '../FancyTextOverlay';
import { Typography } from '../../Typography';
import { FancyVideo } from '../../FancyVideo';

// Define metadata for the story
const meta = {
  component: FancyTextOverlay,
  title: 'components/atoms/FancyTextOverlay',
  parameters: {
    docs: {
      description: {
        component:
          'The `FancyTextOverlay` component is a versatile React component designed to overlay text on images or videos, providing various positioning and styling options. Utilizing styled-components, it enables developers to effortlessly integrate text overlays with gradient backgrounds over their media content, enhancing the visual appeal and information delivery of their projects.',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    externalStyle: {
      description: 'The external style of the overlay',
    },
    position: {
      description: 'Specifies the position of the text overlay relative to the media content.',
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'top-left' },
      },
    },
    children: {
      description: 'The media content (image or video) over which the text is overlaid.',
    },
    textChildren: {
      description: 'The text content to be displayed over the media content. This can be any React node',
    },
  },
} satisfies Meta<typeof FancyTextOverlay>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => (
    <FancyTextOverlay {...args}>
      <FancyVideo>
        <FancyVideo.Source type="video/mp4" src="https://www.w3schools.com/html/mov_bbb.mp4" />
      </FancyVideo>
    </FancyTextOverlay>
  ),
  args: {
    position: 'center',
    textChildren: (
      <>
        <Typography variant="bodytextMd">Hello World</Typography>
      </>
    ),
  },
};
