// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import SwipeUpContainer from './SwipeUpContainer';

// Define metadata for the story
const meta = {
  component: SwipeUpContainer,
  parameters: {
    docs: {
      description: {
        component:
          'SwipeUpContainer is only the container for the SwipeUpModal. <br> - The isScalable and the style prop is for the dynamicly changing height of the container. <br> - The real hieght of the container is the height of the children. ',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    style: {
      description: 'The style of the container',
    },
    isScalable: {
      description: 'Is the container scalable',
    },
    themeType: {
      description: 'The theme type of the container',
      control: {
        type: 'select',
      },
    },
    layer: {
      description: 'The layer of the container',
      control: {
        type: 'range',
        min: 1,
        max: 10,
        step: 1,
      },
    },
    children: {
      description: 'The children of the container',
    },
  },
  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof SwipeUpContainer>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <SwipeUpContainer {...args} />,
  args: {
    style: { height: '100px' },
    isScalable: true,
    themeType: 'primary',
    layer: 0,
    children: <div></div>,
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
