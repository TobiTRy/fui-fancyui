import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import SingleInputs from './SingleInputs';

const meta = {
  component: SingleInputs,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: A simple header component to display a header with slots',
      },
    },
  },

  argTypes: {
    length: {
      description: 'How many inputs are Displayed / how long is the verification code.',
      control: {
        type: 'range', min: 0, max: 10, step: 1,
      },
      defaultValue: {
        summary: 6,
      },
    },

  },
  tags: ['autodocs'],
} satisfies Meta<typeof SingleInputs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <SingleInputs {...args} />,
  args: {
    length: 6,
    status: {
      isError: false,
      isSucceed: false,
    },
  },
};
