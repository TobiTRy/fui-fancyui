import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import SwipeUpModal from './SwipeUpModal';

const meta = {
  component: SwipeUpModal,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: A simple header component to display a header with slots',
      },
    },
  },

  argTypes: {
    isOpen: {
      description: 'The state of the modal',
      type: { name: 'boolean' },
      defaultValue: {
        summary: false,
      },
    },
    isCloseAble: {
      description: 'If true, the modal can be closed.',
      type: { name: 'boolean' },
      defaultValue: {
        summary: true,
      },
    },
    isScalable: {
      description: 'If true, the modal can be scaled.',
      type: { name: 'boolean' },
      defaultValue: {
        summary: true,
      },
    },
    onClose: {
      description: 'A function that is called when the modal should be closed.',
      type: { name: 'function' },
    },
    themeType: {
      description: 'The theme type of the modal.',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'primary',
      },
    },
    layer: {
      description: 'The layer of the modal.',
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 1,
      },
      defaultValue: {
        summary: 0,
      },
    },
    backdrop: {
      description: 'If true, the backdrop is visible.',
      type: { name: 'boolean' },
      defaultValue: {
        summary: true,
      },
    },
  },

  tags: ['autodocs'],
} satisfies Meta<typeof SwipeUpModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <SwipeUpModal {...args} />,
  args: {
    isOpen: true,
    isCloseAble: true,
    isScalable: true,
    themeType: 'primary',
    layer: 1,
  },
};
