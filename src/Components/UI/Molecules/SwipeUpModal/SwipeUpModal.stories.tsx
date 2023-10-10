import React from 'react';

import { ModalStatus } from '../../Interface/ModalStatus';

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
    },
    isScalable: {
      description: 'If true, the modal can be scaled.',
      type: { name: 'boolean' },
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
    },
    layer: {
      description: 'The layer of the modal.',
      control: {
        type: 'range', min: 0, max: 10, step: 1, 
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
    status: ModalStatus.Open,
    isCloseAble: true,
    isScalable: true,
    themeType: 'primary',
    layer: 1,
  },
};
