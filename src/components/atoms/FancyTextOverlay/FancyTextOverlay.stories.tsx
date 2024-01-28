// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyTextOverlay from './FancyTextOverlay';
import { Typography } from '../Typography';
import { FancyVideo } from '../FancyVideo';

// Define metadata for the story
const meta = {
  component: FancyTextOverlay,
  parameters: {
    docs: {
      description: {
        component:
          'The FancyTextOverlay is a Wrapper for the FancyVideo / FancyImage Component. It can be used to add a text overlay to the video. <br> - It recives textChildren as normal React nodes <br> - As children it recives the FancyVideo / FancyImage Component / or what do you fucking want',
      },
    },
  },

  // Define arguments for the story
  argTypes: {},

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof FancyTextOverlay>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => (
    <FancyTextOverlay {...args}>
      <FancyVideo src="https://www.w3schools.com/html/mov_bbb.mp4" />
    </FancyTextOverlay>
  ),
  args: {
    position: 'center',
    textChildren: (
      <>
        <Typography type="h1">Hello World</Typography>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
