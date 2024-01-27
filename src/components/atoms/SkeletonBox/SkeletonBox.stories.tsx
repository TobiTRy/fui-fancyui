// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

import { SkeletonBox } from '@/components/atoms/SkeletonBox';

// Define metadata for the story
const meta = {
  component: SkeletonBox,
  parameters: {
    docs: {
      description: {
        component:
          'The SkeletonBox component is used to display a skeleton box, which is used to indicate that the content is loading',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    aspectRatio: {
      description: 'The aspect ratio of the skeleton box',
      control: {
        type: 'text',
      },
    },
    themeType: {
      description: 'The theme type of the skeleton box',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'primary',
      },
    },
    sizeH: {
      description: 'The height of the skeleton box',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'md',
      },
    },
    sizeW: {
      description: 'The width of the skeleton box',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'md',
      },
    },
    borderRadius: {
      description: 'The border radius of the skeleton box',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'xs',
      },
    },
    layer: {
      description: 'The layer of the skeleton box',
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 1,
      },
      defaultValue: {
        summary: '0',
      },
    },
  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof SkeletonBox>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <SkeletonBox {...args} />,
  args: {
    aspectRatio: '1:1',
    themeType: 'primary',
    sizeH: 'md',
    sizeW: 'md',
    borderRadius: 'xs',
    layer: 0,
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
