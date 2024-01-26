// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyListBox from './FancyListBox';

// Define metadata for the tsory
const meta = {
  component: FancyListBox,
  parameters: {
    docs: {
      description: {
        component:
          'The FancyListBox is for displaying a list of items with a seperator between each item. It can also have a title.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    size: {
      description: 'The size of the list',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'md',
      },
    },
    themeType: {
      description: 'The theme of the list',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'primary',
      },
    },
    layer: {
      description: 'The layer of the list',
      control: {
        type: 'range',
        min: 0,
        max: 9,
      },
      defaultValue: {
        summary: '2',
      },
    },
    borderRadius: {
      description: 'The border radius of the list',
      control: {
        type: 'select',
      },
    },
    seperator: {
      description: 'The seperator of the list',
      control: {
        type: 'object',
      },
    },
    boxTitle: {
      description: 'The title of the list',
      control: {
        type: 'object',
      },
    },
    outlined: {
      description: 'The outlined of the list',
      control: {
        type: 'boolean',
      },
    },
    itemSettings: {
      description: 'The item settings of the list',
      control: {
        type: 'object',
      },
    },
    boxShadow: {
      description: 'The boxShadow of the list',
      control: {
        type: 'boolean',
      },
    },
    outlinedBackgroundStrength: {
      description: 'The outlinedBackgroundStrength of the list',
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.1,
      },
    },
  },
  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof FancyListBox>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => (
    <FancyListBox {...args}>
      <p>Hi</p>
      <p>Hi</p>
      <p>Hi</p>
      <p>Hi</p>
      <p>Hi</p>
      <p>Hi</p>
    </FancyListBox>
  ),
  args: {
    size: 'md',
    themeType: 'primary',
    layer: 2,
    borderRadius: 'md',
    seperator: {
      margin: ['0', 'sm'],
      themeType: 'primary',
    },
    boxTitle: {
      title: {
        children: 'Title',
      },
      titleAlign: 'left',
    },
    outlined: false,
    itemSettings: {
      size: 'md',
    },
  },
};
