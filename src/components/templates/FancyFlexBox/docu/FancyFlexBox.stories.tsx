// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

import { FancyFlexBox } from '@/components/templates/FancyFlexBox';
// Import the component to be tested

// Define metadata for the story
const meta = {
  component: FancyFlexBox,
  title: 'components/templates/FancyFlexBox',
  parameters: {
    docs: {
      description: {
        component:
          'The `FancyFlexBox` is a highly customizable layout component designed for efficient alignment and spacing of child components using CSS Flexbox. It extends the capabilities of a standard flex container by allowing dynamic element types, incorporating a separator between children, and integrating styled-components for enhanced styling flexibility.',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    as: {
      description: 'The HTML element to be rendered.',
      table: {
        defaultValue: { summary: 'div' },
      },
      control: {
        type: 'text',
      },
    },
    direction: {
      description: 'The direction of the flex box.',
      control: {
        type: 'select',
        options: ['row', 'row-reverse', 'column', 'column-reverse', undefined],
      },
    },
    justify: {
      description: 'The justify content of the flex box.',
      control: {
        type: 'select',
        options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', undefined],
      },
    },
    align: {
      description: 'The align items of the flex box.',
      control: {
        type: 'select',
        options: ['flex-start', 'flex-end', 'center', 'stretch', 'baseline', undefined],
      },
    },
    gap: {
      description: 'The gap between the flex items.',
      control: {
        type: 'text',
      },
    },
    fitBox: {
      description: 'If the flex box should fill the entire container.',
      control: {
        type: 'boolean',
      },
    },
    separator: {
      description: 'A separator to be rendered between the flex items.',
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof FancyFlexBox>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => (
    <FancyFlexBox {...args}>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </FancyFlexBox>
  ),
  args: {
    as: 'ul',
    externalStyle: {
      backgroundColor: 'gray',
      height: '300px',
      width: '300px',
    },
  },
};
