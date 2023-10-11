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
    status: {
      description: 'The status of the modal.',
      control: {
        type: 'radio',
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
    closeHandler: {
      description: 'A function that is called when the modal should be closed.',
      type: { name: 'function' },
    },
    id: {
      description: 'The id of the modal.',
      type: { name: 'string' },
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
        type: 'range', min: 0, max: 10, step: 1, 
      },
      defaultValue: {
        summary: 0,
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
    status: 'open',
    isCloseAble: true,
    isScalable: true,
    themeType: 'primary',
    layer: 1,
  },
};
