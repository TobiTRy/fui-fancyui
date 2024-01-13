import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import PasswordInput from './PasswordInput';

const meta = {
  component: PasswordInput,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: A PasswordInput component to input password',
      },
    },
  },
  argTypes: {
    value: {
      description: 'The value of the input.',
      type: { name: 'string' },
    },
    align: {
      description: 'The align of the input.',
      control: {
        type: 'radio',
      },
      defaultValue: { summary: 'left' },
    },
    themeType: {
      description: 'The theme type of the input.',
      control: {
        type: 'select',
      },
      defaultValue: { summary: 'accent' },
    },
    layer: {
      description: 'The layer of the input.',
      control: {
        type: 'range',
        min: 1,
        max: 10,
        step: 1,
      },
      defaultValue: { summary: 4 },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PasswordInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <PasswordInput {...args} />,
  args: {
    value: '',
    align: 'left',
    themeType: 'secondary',
    layer: 4,
  },
};
