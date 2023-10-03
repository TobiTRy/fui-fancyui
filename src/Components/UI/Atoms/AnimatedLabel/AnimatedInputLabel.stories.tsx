import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import AnimatedInputLabel, { IAnimatedInputLabel } from './AnimatedInputLabel';
import Typography from '../Typography/Typography';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: AnimatedInputLabel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
    docs: {
      description: {
        component:
          'The input label wich hase some colors and an animation. <br> - the color changes depending on the $colorState prop. <br> - the animation is triggered by the $moveUp prop',
      },
    },
  },
  argTypes: {
    $moveUp: {
      control: { type: 'boolean' },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<IAnimatedInputLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    $moveUp: false,
  },
  render: (args) => (
    <AnimatedInputLabel {...args}>
      <Typography type="label">Hello World</Typography>
    </AnimatedInputLabel>
  ),
};
