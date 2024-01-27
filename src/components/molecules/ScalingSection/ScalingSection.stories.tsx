import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import ScalingSection from './ScalingSection';

const meta = {
  component: ScalingSection,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: This is the top of a swipeupmodal that is used to control the swipe up modal.',
      },
    },
  },
  argTypes: {
    touchStart: {
      description: 'A function to handle the touchStart event.',
      type: { name: 'function' },
    },
    touchMove: {
      description: 'A function to handle the touchMove event.',
      type: { name: 'function' },
    },
    touchEnd: {
      description: 'A function to handle the touchEnd event.',
      type: { name: 'function' },
    },
    click: {
      description: 'A function to handle the click event.',
      type: { name: 'function' },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScalingSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <ScalingSection {...args} />,
  args: {},
};
