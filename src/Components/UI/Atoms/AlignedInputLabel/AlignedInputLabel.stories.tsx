import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import AlignedInputLabel from './AlignedInputLabel';
import Typography from '../Typography/Typography';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: AlignedInputLabel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    docs: {
      description: {
        component:
          'The input label wich is aligned left or centered. <br> - the alignment is set by the $align prop. <br> - the color changes depending on the $isActive prop',
      },
    },
  },
  argTypes: {
    $align: {
      control: { type: 'select', options: ['left', 'center'] },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof AlignedInputLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {},
  render: (args) => (
    <AlignedInputLabel {...args}>
      <Typography type="label">Hello World</Typography>
    </AlignedInputLabel>
  ),
};
