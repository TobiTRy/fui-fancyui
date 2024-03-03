// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import { FancyVideoSource } from '../FancyVideoSource';

// Define metadata for the story
const meta = {
  component: FancyVideoSource,
  parameters: {
    docs: {
      description: {
        component:
          'The FancyVideoSource component is a utility component designed to specify video sources for the FancyVideo component, enabling the inclusion of multiple video formats and providing fallback options for compatibility across different browsers and devices. It is a lightweight, functional component that directly maps its props to the underlying `<source>` element attributes in HTML.',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    type: {
      description: 'The type of the video source. This should be a valid MIME type. For example, "video/mp4".',
      control: { type: 'text' },
    },
    src: {
      description: 'The source URL for the video.',
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof FancyVideoSource>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyVideoSource {...args} />,
  args: {
    type: 'video/mp4',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
};
