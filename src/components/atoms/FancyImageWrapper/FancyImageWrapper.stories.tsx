// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyImage from './FancyImageWrapper';
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
    aspectRatio: {
      description: 'The aspect ratio of the image.',
      control: {
        type: 'text',
      },
    },
    children: {
      description: 'The image to be displayed.',
      control: {
        type: 'object',
      },
    },
    filter: {
      description: 'The filter to apply to the image all css filters a allowed.',
      control: {
        type: 'object',
      },
    },
    externalStyle: {
      description: 'The external style to apply to the image.',
      control: {
        type: 'object',
      },
    },
    borderRadius: {
      description: 'The border radius to apply to the image.',
      defaultValue: {
        summary: '',
      },
      control: {
        type: 'select',
      },
    },
    sizeH: {
      description: 'The height of the image.',
      control: {
        type: 'text',
      },
      defaultValue: 'size of the image',
    },
    sizeW: {
      description: 'The width of the image.',
      control: {
        type: 'text',
      },
      defaultValue: 'size of the image',
    },
    objectFit: {
      description: 'The object fit of the image.',
      control: {
        type: 'select',
      },
      defaultValue: 'cover',
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
  render: (args) => (
    <FancyImage {...args}>
      <img src="http://via.placeholder.com/640x360" />
    </FancyImage>
  ),
  args: {
    sizeW: '100px',
    aspectRatio: '16/9',
    filter: {
      brightness: 0.5,
    },
    borderRadius: 'complete',
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
