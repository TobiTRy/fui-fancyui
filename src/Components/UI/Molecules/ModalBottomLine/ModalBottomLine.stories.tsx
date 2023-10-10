import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import ModalBottomLine from './ModalBottomLine';

const meta = {
  component: ModalBottomLine,
  parameters: {
    docs: {
      description: {
        component: 'Smart-Comonent: A Modal component to show a Dialog with a Backdrop',
      },
    },
  },
  argTypes: {

  },
  tags: ['autodocs'],
} satisfies Meta<typeof ModalBottomLine>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <ModalBottomLine {...args} />,
  args: {

  },
};
