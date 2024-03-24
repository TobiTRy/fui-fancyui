// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import SVGCheckMark from '../../icons/SVGCheckMark/SVGCheckMark';

import FancyRange from '@/components/organisms/FancyRangeSlider/FancyRangeSlider';

// Define metadata for the story
const meta = {
  component: FancyRange,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: The FancyPasswordInput Comonent with surrounding icon, label and underline',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    label: {
      description: 'The label of the input',
      control: {
        type: 'text',
      },
    },
    align: {
      description: 'The alignment of the input',
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'left' },
      },
    },
    themeType: {
      description: 'The theme of the input',
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'secondary' },
      },
    },
    layer: {
      description: 'The layer of the input',
      control: {
        type: 'range ',
        min: 1,
        max: 10,
        step: 1,
      },
      table: {
        defaultValue: { summary: '4' },
      },
    },
    icon: {
      description: 'The icon of the input',
      table: {
        defaultValue: { summary: 'none' },
      },
    },
    disabled: {
      description: 'The disabled state of the input',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    min: {
      description: 'The minimum value of the input',
      control: {
        type: 'number',
      },
      table: {
        defaultValue: { summary: 0 },
      },
    },
    max: {
      description: 'The maximum value of the input',
      control: {
        type: 'number',
      },
      table: {
        defaultValue: { summary: 100 },
      },
    },
    value: {
      description: 'The current value of the input',
      control: {
        type: 'number',
      },
      table: {
        defaultValue: { summary: 50 },
      },
    },
  },
  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof FancyRange>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyRange {...args} />,
  args: {
    id: 'test',
    label: 'Label',
    align: 'left',
    themeType: 'secondary',
    layer: 4,
    icon: <SVGCheckMark />,
    disabled: false,
    min: 0,
    max: 100,
    value: 50,
  },
};
