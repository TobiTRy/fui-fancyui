// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyImage from '../FancyImageWrapper';
// Define metadata for the story
const meta = {
  component: FancyImage,
  title: 'components/atoms/FancyImageWrapper',
  parameters: {
    docs: {
      description: {
        component:
          'The `FancyImageWrapper` component is a highly customizable React component designed to wrap around image elements, providing extensive control over their appearance and styling. It supports a wide range of properties to adjust the image´s aspect ratio, border radius, size, object fit, filter effects, and external CSS styling. Additionally, it validates the aspect ratio to ensure it is in the correct format.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    aspectRatio: {
      description:
        'Defines the aspect ratio of the image, e.g., "16/9". If provided, it must be in the format "width/height"',
      control: {
        type: 'text',
      },
    },
    children: {
      description: 'The image element to be wrapped by the `FancyImageWrapper`.',
      control: {
        type: 'object',
      },
    },
    filter: {
      description:
        'Applies CSS filter effects to the image. Accepts an object with properties corresponding to CSS filter functions, such as `blur` and `brightness`.',
      control: {
        type: 'object',
      },
    },
    externalStyle: {
      description: 'Allows for custom CSS to be applied directly to the image wrapper.',
      control: {
        type: 'object',
      },
    },
    borderRadius: {
      description: 'Specifies the border radius applied to the image. Can be a theme size or a custom CSS value.',
      table: {
        defaultValue: { summary: '' },
      },
      control: {
        type: 'select',
      },
    },
    sizeH: {
      description:
        'Sets the width of the image. Can be a predefined size, "fit" for 100% width, or a custom CSS value.',
      control: {
        type: 'text',
      },
      defaultValue: 'size of the image',
    },
    sizeW: {
      description:
        'Sets the height of the image. Can be a predefined size, "fit" for 100% height, or a custom CSS value.',
      control: {
        type: 'text',
      },
      defaultValue: 'size of the image',
    },
    objectFit: {
      description: ' Defines how the content of the replaced element should be resized to fit its container.',
      control: {
        type: 'select',
      },
      defaultValue: 'cover',
    },
  },
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
